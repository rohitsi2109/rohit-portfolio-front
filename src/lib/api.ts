// Base URL of rohit-portfolio-api (no trailing slash). VITE_API_URL overrides it; without it,
// production builds use the live API and `npm run dev` uses the API running locally.
const DEFAULT_API_URL = import.meta.env.PROD ? 'https://api.rohitsingh.in' : 'http://localhost:8000';
export const API_URL = (import.meta.env.VITE_API_URL || DEFAULT_API_URL).replace(/\/+$/, '');

// Bump together with the privacy page whenever its text changes; stored with every lead
export const CONSENT_VERSION = 'privacy-2026-11';
