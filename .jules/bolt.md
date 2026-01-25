## 2025-05-15 - [O(n^2) Hidden in Utility Functions]
**Learning:** Found an O(n^2) implementation in `deepEqualObj` due to the use of `Array.includes()` inside a loop over object keys. This is a common performance anti-pattern in utility functions that handle generic data structures.
**Action:** When auditing utility functions, specifically look for nested loops or array methods like `includes`, `find`, or `filter` being called inside a loop. Prefer `hasOwnProperty` or `Map`/`Set` for O(1) lookups.
