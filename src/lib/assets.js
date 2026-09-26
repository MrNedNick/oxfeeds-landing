// Files in `public/` are served from the site root locally and from
// /oxfeeds-landing/ on GitHub Pages; this keeps component paths base-agnostic.
export const img = (path) => `${import.meta.env.BASE_URL}img/${path}`
