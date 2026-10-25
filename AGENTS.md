# Engineering conventions

- Use React function components and TypeScript for UI.
- Keep page-specific components in `src/components/landing` and compose them in `src/pages`.
- Prefer standard CSS and shared custom properties in `src/styles/variables.css`; do not add a CSS framework.
- Preserve semantic HTML, visible focus states, keyboard operation, and reduced-motion support.
- Keep dependencies minimal and avoid direct DOM manipulation when React state or effects are suitable.
- Previously approved product decisions and visual designs must not be changed without explicit approval.
