## 2026-01-25 - [Pattern: Inaccessible Click Handlers on Non-Interactive Elements]
**Learning:** Several utility components (e.g., `DisplayId`, `Copied` in `JsonViewSection`) use `span` or `div` elements with `onClick` handlers instead of semantic `button` elements. This breaks keyboard accessibility and misses native focus indicators.
**Action:** Always prefer semantic `button` elements for click actions, even when they should look like text. Use `type="button"` and `e.stopPropagation()` to avoid side effects in nested interactive components like tables.
