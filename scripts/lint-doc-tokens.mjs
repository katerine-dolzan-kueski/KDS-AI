#!/usr/bin/env node
/**
 * lint-doc-tokens.mjs
 *
 * Validates KDS .docs.md files in two phases:
 *
 * Phase 1 — Token validity
 *   Every backtick token reference must exist in tokens.registry.json.
 *   Raw hex/rgb/px values in token positions are forbidden.
 *
 * Phase 2 — Semantic rules (extracted from design.md)
 *   S-01  Fill + text pairs: every solid background token must be accompanied
 *         by its correct foreground token.
 *   S-02  Error completeness: --color-stroke-error requires
 *         --color-text-and-icons-danger (footer error text).
 *   S-03  Focus/active state: if States table has an Active or Focus row,
 *         --color-stroke-brand must appear in the token tables.
 *   S-04  State overlays: if States table has Hover / Pressed rows,
 *         --color-states-hover / --color-states-pressed must be referenced.
 *   S-05  Read-only completeness: --color-stroke-tertiary in a field context
 *         requires --color-background-tertiary.
 *   S-06  Disabled: if States table has a Disabled row, either
 *         --color-states-disabled or the word "opacity" must appear.
 *
 * Usage:
 *   node scripts/lint-doc-tokens.mjs <path-to-docs-file.md>
 *
 * Exit codes:
 *   0 — all checks pass
 *   1 — one or more issues found
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REGISTRY_PATH = resolve(__dirname, 'tokens.registry.json');

// ─── Load registry ────────────────────────────────────────────────────────────

const registry = JSON.parse(readFileSync(REGISTRY_PATH, 'utf8'));

const webTokens = new Set([
  ...Object.keys(registry.web.color),
  ...Object.keys(registry.web.spacing),
  ...Object.keys(registry.web.radius),
  ...Object.keys(registry.web.typography),
  ...Object.keys(registry.web.border),
  ...registry.web['tailwind-utilities'].typography,
]);

const flutterTokens = new Set([
  ...Object.keys(registry.flutter.color['semantic-action']),
  ...Object.keys(registry.flutter.color['semantic-neutral']),
  ...Object.keys(registry.flutter.spacing),
  ...Object.keys(registry.flutter.radius),
  ...Object.keys(registry.flutter.typography),
  ...Object.keys(registry.flutter.motion),
]);

// ─── Semantic rule: required fill → text pairs ────────────────────────────────
// Key = background token that triggers the rule.
// Value = foreground token that MUST also appear in the file.

const FILL_TEXT_PAIRS = {
  '--color-background-brand':          '--color-text-and-icons-always-white',
  '--color-background-danger':         '--color-text-and-icons-always-white',
  '--color-background-success':        '--color-text-and-icons-always-white',
  '--color-background-warning':        '--color-text-and-icons-always-white',
  '--color-background-upsell':         '--color-text-and-icons-always-white',
  '--color-background-invert-primary': '--color-text-and-icons-invert-primary',
  '--color-background-brand-subtle':   '--color-text-and-icons-brand-on-subtle',
  '--color-background-danger-subtle':  '--color-text-and-icons-danger-on-subtle',
  '--color-background-success-subtle': '--color-text-and-icons-success-on-subtle',
  '--color-background-warning-subtle': '--color-text-and-icons-warning-on-subtle',
  '--color-background-upsell-subtle':  '--color-text-and-icons-upsell-on-subtle',
};

// ─── CLI arg ──────────────────────────────────────────────────────────────────

const filePath = process.argv[2];
if (!filePath) {
  console.error('Usage: node scripts/lint-doc-tokens.mjs <path-to-docs-file.md>');
  process.exit(1);
}

const fullPath = resolve(process.cwd(), filePath);
let content;
try {
  content = readFileSync(fullPath, 'utf8');
} catch {
  console.error(`Cannot read file: ${fullPath}`);
  process.exit(1);
}

const lines = content.split('\n');

// ─── Section map ──────────────────────────────────────────────────────────────

function buildSectionMap(lines) {
  const map = [];
  let current = 'shared';
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim().toLowerCase();
    if (line.startsWith('## web')) {
      current = 'web';
    } else if (line.startsWith('## flutter') || line.startsWith('## dart')) {
      current = 'flutter';
    } else if (line === '## shared') {
      current = 'shared';
    }
    map[i] = current;
  }
  return map;
}

const sectionMap = buildSectionMap(lines);

// ─── Token extraction patterns ────────────────────────────────────────────────

const TOKEN_PATTERN   = /`(--[\w-]+|[\w][\w-]*)`/g;
const RAW_HEX_PATTERN = /`#[0-9a-fA-F]{3,8}`/g;
const RAW_RGB_PATTERN = /`rgba?\([^)]+\)`/g;
const RAW_PX_PATTERN  = /`\d+(\.\d+)?px`/g;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function looksLikeToken(str) {
  if (/^[A-Z]/.test(str)) return false;
  if (['true','false','null','undefined','string','boolean','number',
       'ReactNode','button','submit','reset'].includes(str)) return false;
  if (str.startsWith('--')) return true;
  return /[-]/.test(str) || ['primary','secondary','destructive','success',
    'warning','accent','surface','foreground','background','border',
    'input','ring'].includes(str);
}

function isCodeKeyword(str) {
  if (/^[A-Z][a-zA-Z]+$/.test(str)) return true;
  return ['Button','Link','Slot','React','boolean','string','number','void',
    'null','undefined','any','unknown','never','true','false','primary',
    'secondary','default','icon','alternative','link','sm','md','lg'].includes(str);
}

// ─── PHASE 1: Token validity ──────────────────────────────────────────────────

const p1Issues = [];
/** All CSS tokens referenced anywhere in the file (for phase 2). */
const allWebTokensFound = new Set();

for (let i = 0; i < lines.length; i++) {
  const line    = lines[i];
  const lineNum = i + 1;
  const section = sectionMap[i];

  // Forbidden raw values
  for (const pattern of [RAW_HEX_PATTERN, RAW_RGB_PATTERN, RAW_PX_PATTERN]) {
    pattern.lastIndex = 0;
    let m;
    while ((m = pattern.exec(line)) !== null) {
      p1Issues.push({
        line: lineNum, section, type: 'forbidden-raw-value', value: m[0],
        message: `Raw value ${m[0]} — use a KDS token instead`,
      });
    }
  }

  // Backtick token references
  TOKEN_PATTERN.lastIndex = 0;
  let match;
  while ((match = TOKEN_PATTERN.exec(line)) !== null) {
    const token = match[1];
    if (isCodeKeyword(token) || !looksLikeToken(token)) continue;

    if (token.startsWith('--')) {
      allWebTokensFound.add(token);
      if (!webTokens.has(token)) {
        p1Issues.push({
          line: lineNum, section, type: 'unknown-web-token', value: token,
          message: `Unknown web token \`${token}\` — not found in registry.web`,
        });
      }
    } else if (section === 'flutter') {
      if (!flutterTokens.has(token)) {
        p1Issues.push({
          line: lineNum, section, type: 'unknown-flutter-token', value: token,
          message: `Unknown Flutter token \`${token}\` — not found in registry.flutter`,
        });
      }
    }
  }
}

// ─── PHASE 2: Semantic rules ──────────────────────────────────────────────────

const p2Issues = [];

// Helper: check if States table contains a given state name (case-insensitive)
function statesTableHas(stateName) {
  const re = new RegExp(`\\|\\s*${stateName}\\s*\\|`, 'i');
  return lines.some(l => re.test(l));
}

// S-01 — Fill + text pairs
for (const [bgToken, fgToken] of Object.entries(FILL_TEXT_PAIRS)) {
  if (allWebTokensFound.has(bgToken) && !allWebTokensFound.has(fgToken)) {
    p2Issues.push({
      rule: 'S-01',
      type: 'missing-paired-token',
      message: `\`${bgToken}\` is used but its required text pair \`${fgToken}\` is missing.`,
    });
  }
}

// S-02 — Error completeness (Pattern B: field components only)
// Only fires when the file documents an errorMessage prop, indicating a
// field component that renders error text below the field. Inline atoms
// (Badge, Chip) signal error purely via stroke colour — no footer text.
const hasErrorMessageProp = content.includes('errorMessage');
if (hasErrorMessageProp &&
    allWebTokensFound.has('--color-stroke-error') &&
    !allWebTokensFound.has('--color-text-and-icons-danger')) {
  p2Issues.push({
    rule: 'S-02',
    type: 'error-incomplete',
    message: `\`--color-stroke-error\` is used and \`errorMessage\` prop exists, ` +
             `but \`--color-text-and-icons-danger\` is missing. ` +
             `Error message text must use this token.`,
  });
}

// S-03 — Focus state requires --color-stroke-brand
// Only fires when a "Focus" row exists (not just "Active" — Active covers
// step-indicator or selection state in non-form components like CarouselStepper).
if (statesTableHas('Focus') &&
    !allWebTokensFound.has('--color-stroke-brand')) {
  p2Issues.push({
    rule: 'S-03',
    type: 'focus-stroke-missing',
    message: `States table has Focus row but \`--color-stroke-brand\` is not referenced. ` +
             `All focus states must use this border token.`,
  });
}

// S-04 — State overlays
if (statesTableHas('Hover') && !allWebTokensFound.has('--color-states-hover')) {
  p2Issues.push({
    rule: 'S-04',
    type: 'hover-overlay-missing',
    message: `States table has Hover row but \`--color-states-hover\` is not referenced.`,
  });
}
if (statesTableHas('Pressed') && !allWebTokensFound.has('--color-states-pressed')) {
  p2Issues.push({
    rule: 'S-04',
    type: 'pressed-overlay-missing',
    message: `States table has Pressed row but \`--color-states-pressed\` is not referenced.`,
  });
}

// S-05 — Read-only completeness (Pattern B: field components only)
// Only fires when the file explicitly documents a "Read-only" state row,
// which indicates a field container — not a decorative or disabled stroke.
if (statesTableHas('Read-only') &&
    allWebTokensFound.has('--color-stroke-tertiary') &&
    !allWebTokensFound.has('--color-background-tertiary')) {
  p2Issues.push({
    rule: 'S-05',
    type: 'readonly-incomplete',
    message: `States table has Read-only row and \`--color-stroke-tertiary\` is used, ` +
             `but \`--color-background-tertiary\` is missing. ` +
             `Read-only field containers require both tokens.`,
  });
}

// S-06 — Disabled state
if (statesTableHas('Disabled')) {
  const hasDisabledToken  = allWebTokensFound.has('--color-states-disabled');
  const hasOpacityMention = content.includes('opacity');
  if (!hasDisabledToken && !hasOpacityMention) {
    p2Issues.push({
      rule: 'S-06',
      type: 'disabled-incomplete',
      message: `States table has Disabled row but neither \`--color-states-disabled\` ` +
               `nor "opacity" appears in the file. Disabled state must suppress interaction visually.`,
    });
  }
}

// ─── Report ───────────────────────────────────────────────────────────────────

const separator = '─'.repeat(62);
console.log(`\n${separator}`);
console.log(`KDS Token Linter — ${filePath}`);
console.log(separator);

const totalIssues = p1Issues.length + p2Issues.length;

// Phase 1
if (p1Issues.length > 0) {
  const raw     = p1Issues.filter(i => i.type === 'forbidden-raw-value');
  const webUnk  = p1Issues.filter(i => i.type === 'unknown-web-token');
  const flutUnk = p1Issues.filter(i => i.type === 'unknown-flutter-token');

  console.log(`\n── Phase 1: Token validity ─────────────────────────────────`);

  if (raw.length) {
    console.log(`\n🚫  Forbidden raw values (${raw.length}):`);
    raw.forEach(i =>
      console.log(`   Line ${String(i.line).padStart(4)} [${i.section.padEnd(7)}]  ${i.message}`));
  }
  if (webUnk.length) {
    console.log(`\n⚠️   Unknown web tokens (${webUnk.length}):`);
    webUnk.forEach(i =>
      console.log(`   Line ${String(i.line).padStart(4)} [${i.section.padEnd(7)}]  ${i.message}`));
  }
  if (flutUnk.length) {
    console.log(`\n⚠️   Unknown Flutter tokens (${flutUnk.length}):`);
    flutUnk.forEach(i =>
      console.log(`   Line ${String(i.line).padStart(4)} [${i.section.padEnd(7)}]  ${i.message}`));
  }
} else {
  console.log(`\n── Phase 1: Token validity ──────────────────────────────────`);
  console.log(`   ✅  All token references valid.`);
}

// Phase 2
if (p2Issues.length > 0) {
  console.log(`\n── Phase 2: Semantic rules ──────────────────────────────────`);
  p2Issues.forEach(i =>
    console.log(`\n   [${i.rule}] ❌  ${i.message}`));
} else {
  console.log(`\n── Phase 2: Semantic rules ──────────────────────────────────`);
  console.log(`   ✅  All semantic rules pass.`);
}

console.log(`\n${separator}`);

if (totalIssues === 0) {
  console.log(`✅  Passed — no issues found.\n`);
  process.exit(0);
} else {
  console.log(`Found ${totalIssues} issue${totalIssues === 1 ? '' : 's'}. Fix before proceeding.\n`);
  process.exit(1);
}
