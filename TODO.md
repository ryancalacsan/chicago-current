# TODO

## Dependencies

- [ ] **Upgrade eslint 9 → 10** (held back). eslint 10 removed the deprecated
  `context.getFilename()` API. `eslint-config-next` currently bundles
  `eslint-plugin-react@7.37.x`, which still calls it, so linting crashes under
  eslint 10 (`TypeError: contextOrFilename.getFilename is not a function`).
  Revisit once a newer `eslint-config-next` ships an eslint-10-compatible
  `eslint-plugin-react`, then bump `eslint` to `^10`.
