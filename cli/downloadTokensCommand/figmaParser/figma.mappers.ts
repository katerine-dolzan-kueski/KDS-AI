import { RGBAColor } from '../../figmaTypes';
import { capitalize } from './utils';

interface TokenTypeConfig {
  parser?: (value: any) => string | number;
  defaultValue?: any;
  suffix?: string;
}

interface Variable {
  resolvedType: string;
  scopes: string[];
  name: string;
}

interface ParseableValue {
  description: string;
  type: string;
  value: any;
}

export interface FigmaVariableMode {
  modeId: string;
  name: string;
}

export interface FigmaVariableCollection {
  name: string;
  modes: FigmaVariableMode[];
  variableIds: string[];
}

export interface FigmaVariable {
  resolvedType: string;
  scopes: string[];
  name: string;
  valuesByMode: Record<string, any>;
  deletedButReferenced?: boolean;
}

const FONT_WEIGHT: Record<string, string> = {
  thin: 'w100',
  hairline: 'w100',
  extralight: 'w200',
  ultralight: 'w200',
  light: 'w300',
  normal: 'w400',
  regular: 'w400',
  book: 'w400',
  medium: 'w500',
  semibold: 'w600',
  demibold: 'w600',
  bold: 'w700',
  extrabold: 'w800',
  ultrabold: 'w800',
  black: 'w900',
  heavy: 'w900',
  extrablack: 'w950',
  ultrablack: 'w950',
};

export function weightToFlutter(rawName: string): string {
  const name = String(rawName)
    .toLowerCase()
    .replace(/[^a-zA-Z]/, '');

  return FONT_WEIGHT[name] || name;
}

const TOKEN_TYPES: Record<string, TokenTypeConfig> = {
  color: { defaultValue: 'transparent', parser: String },
  cubicBezier: {},
  dimension: { defaultValue: 0, suffix: 'px' },
  duration: { suffix: 'ms' },
  fontFamily: { parser: String },
  fontWeight: { parser: weightToFlutter },
  number: { defaultValue: 0 },
};

const CONTEXT_TO_TOKEN_TYPE: Record<string, string | null> = {
  COLOR: 'color',
  ALL_SCOPES: null,
  CORNER_RADIUS: 'number',
  WIDTH_HEIGHT: 'number',
  GAP: 'number',
  OPACITY: 'number',
  FONT_VARIATIONS: null,
  FRAME_FILL: 'color',
  TEXT_FILL: 'color',
  SHAPE_FILL: 'color',
  STROKE_COLOR: 'color',
  STROKE_FLOAT: 'number',
  FONT_FAMILY: 'fontFamily',
  FONT_STYLE: 'fontWeight',
  FONT_SIZE: 'number',
  LINE_HEIGHT: 'number',
  LETTER_SPACING: 'number',
  TEXT_CONTENT: null,
};

const REPLACEMENTS: Array<[RegExp | string, string]> = [
  [/^(.)?-/, '$1Minus'],
  [/^-/, 'minus'],
  [/_|(\(\d+\))/g, ''],
  [/^alpha$/, ''],
  ['ɑ', 'Alpha'],
  ['⅛', 'octave'],
  ['¼', 'quarter'],
  ['½', 'half'],
  [/^default$/, 'defaultValue'],
  [/[()]/, ''],
];

function decimalToHex(num: number): string {
  const rawHex = Math.round(num * 255).toString(16);

  if (rawHex.length === 2) return rawHex;

  return `0${rawHex}`;
}

export function sanitizeName(name: string | null | undefined): string | null {
  if (!name) return null;

  let preparedName = name;

  REPLACEMENTS.forEach(([search, replace]) => {
    preparedName = preparedName.replace(search, replace);
  });

  return preparedName.split(/-|\s/).map(capitalize).join('');
}

export function isNonEmptyObject(object: any): boolean {
  return object && typeof object === 'object' && Object.keys(object).length > 0;
}

export function isValue(object: any): boolean {
  return object && typeof object === 'object' && 'type' in object && 'value' in object;
}

export function isRGBA(value: any): boolean {
  return value && typeof value === 'object' && 'r' in value && 'g' in value && 'b' in value;
}

export function isVariableAlias(value: any): boolean {
  return value && typeof value === 'object' && value.type === 'VARIABLE_ALIAS';
}

export function toParseableValue(variable: Variable, rawValue: any): ParseableValue | null {
  const { resolvedType, scopes, name: description } = variable;
  const types = [
    ...scopes.map((scope: string) => CONTEXT_TO_TOKEN_TYPE[scope]),
    CONTEXT_TO_TOKEN_TYPE[resolvedType],
  ].filter(Boolean);
  const type = types[0] as string;

  let value = rawValue;

  if (!type) return null;

  const { parser, suffix, defaultValue } = TOKEN_TYPES[type] || {};

  if (parser) value = parser(value);
  if (suffix && value) value = `${value}${suffix}`;
  if (!value && typeof defaultValue !== 'undefined') value = defaultValue;

  return {
    description,
    type,
    value,
  };
}

export function stripCollectionName(name: string): string {
  return name.replace(/([0-9]+\.\s)|(corner )|(\ssize)|(")/gi, '').toLowerCase();
}

export function stripModeName(name: string): string {
  const strippedName = name.replace(/(\W)|(mode)/gi, '');
  return strippedName.length > 1 ? strippedName : 'UnknownMode';
}

export function splitSlashes(name: string | null | undefined): (string | null)[] {
  if (!name) return [];
  if (name.match(/^(\D+-)+(\D+)$/)) return name.split('-').map(sanitizeName);

  return [sanitizeName(name)];
}

export function spacesToCapitalCase(name: string): string {
  return name.split(' ').map(capitalize).join('');
}

export function rgbaToHex({ r, g, b, a }: RGBAColor): string {
  const rgb = `${decimalToHex(r)}${decimalToHex(g)}${decimalToHex(b)}`;

  if (typeof a === 'undefined') return rgb;

  return `#${decimalToHex(a)}${rgb}`;
}
