## 2025-01-25 - IDOR in Store Order Retrieval
**Vulnerability:** The `GET /store/orders/:id` endpoint allowed unauthenticated access to any order's details (including PII) by simply knowing the order ID.
**Learning:** Store endpoints for sensitive resources must always enforce authentication and ownership checks, even if they seem intended for guest access. Guest access should be handled via specific verification mechanisms (like tokens or email validation) rather than open endpoints.
**Prevention:** Always apply `authenticate("customer", ...)` middleware to store routes accessing personal data and filter by `req.auth_context.actor_id` in the route handler.
