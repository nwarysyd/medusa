## 2025-05-15 - [Referential Stability in Foundation Hooks]
**Learning:** Foundational hooks like `useQueryParams` that depend on frequently-changing state (like URL search params) can cause widespread performance degradation if they return new object references on every render. Even if the extracted values are identical, downstream `useMemo`, `useEffect`, and memoized components will re-trigger/re-render.
**Action:** Always wrap the return value of such hooks in `useMemo` and use deep equality checks (e.g., `lodash.isequal` with `useRef`) to ensure referential stability when values haven't actually changed.

## 2025-05-15 - [Array Iteration Anti-patterns]
**Learning:** The pattern `.map(x => x.id).includes(targetId)` is a common but inefficient way to check for existence in an array of objects. It creates an intermediate array (O(N) memory) and performs two passes (one for mapping, one for searching).
**Action:** Use `.some(x => x.id === targetId)` instead. It avoids allocations and short-circuits as soon as a match is found, making it faster and more memory-efficient.
