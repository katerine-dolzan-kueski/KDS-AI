# AGENTS.md

## Cursor Cloud specific instructions

This repo is the **Kueski Design System (KDS)** — a publishable React component library monorepo (no backend, no database, no apps). The only long-running dev surface is **Storybook**.

- **Package manager:** pnpm (enforced via `preinstall: only-allow pnpm`). Node 22.x. Dependencies are installed by the startup update script (`pnpm install`).
- **Monorepo orchestrator:** Nx. Workspaces are under `packages/*` (`@kueski-dev/kds-react`, `@kueski-dev/kds-legacy`, `@kueski-dev/kds-utils`). Note: `cli/*` and `docs/storybook` are listed in `pnpm-workspace.yaml` but currently have no `package.json`.

### Running things (see root `package.json` scripts for the full list)
- **Dev (primary):** `pnpm storybook` — serves Storybook at `http://localhost:6006`. This is the main way to develop/preview components. HMR works; control/prop changes update the canvas live.
- **Build:** `pnpm build` (`nx run-many -t build`, builds all 3 packages via `kds-utils`/Vite).
- **Test:** `pnpm test` (Vitest via Nx). `pnpm test:react` runs only the modern package.
- **Lint:** `pnpm lint` (ESLint). Also `pnpm stylelint`, `pnpm check:types`.

### Non-obvious caveats
- There is **no `pnpm dev` script** despite the README mentioning it — use `pnpm storybook` for development.
- Running `pnpm build` regenerates `packages/utils/bin/kds-utils.mjs` (the built CLI bin). This shows up as a git change after building; revert it (`git checkout -- packages/utils/bin/kds-utils.mjs`) if you don't intend to commit a rebuilt bin.
- The `esbuild` install/build script is not in pnpm's `onlyBuiltDependencies` allowlist, so pnpm prints an "Ignored build scripts: esbuild" warning on install. This is harmless — Vite/Vitest/Storybook all run correctly; do not add it or run `pnpm approve-builds` (interactive).
- **Pre-existing failures (not environment issues):** as of setup, `pnpm test` has 7 failing tests (e.g. in `Divider`, `Banner`) and `pnpm lint` reports ~49 errors. These are pre-existing code/test mismatches unrelated to env setup; the tooling itself works (255+ tests pass, lint/build run fine).
- `react-legacy` build emits TypeScript `[vite:dts]` declaration warnings but the build still completes (exit 0). Do not modify the `react-legacy` package (see `.cursor/rules`).
