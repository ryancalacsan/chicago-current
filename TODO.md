# TODO

## Dependencies

- [ ] **Upgrade eslint 9 → 10** (held back). eslint 10 removed the deprecated
  `context.getFilename()` API. `eslint-config-next` currently bundles
  `eslint-plugin-react@7.37.x`, which still calls it, so linting crashes under
  eslint 10 (`TypeError: contextOrFilename.getFilename is not a function`).
  Revisit once a newer `eslint-config-next` ships an eslint-10-compatible
  `eslint-plugin-react`, then bump `eslint` to `^10`.

- [ ] **Upgrade TypeScript 6 → 7** (held back). Next.js supports TS 7 since
  16.3 via `experimental.useTypeScriptCli`, but TS 7.0 ships no JS compiler
  API, and `typescript-eslint` (pulled in by `eslint-config-next`) still
  requires `typescript <6.1.0`. Revisit once `typescript-eslint` supports TS 7
  (likely alongside TS 7.1's compiler API).
