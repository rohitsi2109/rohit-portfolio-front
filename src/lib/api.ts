// Base URL of rohit-portfolio-api, e.g. https://api.rohitsingh.in (no trailing slash)
export const API_URL = (import.meta.env.VITE_API_URL ?? '').replace(/\/+$/, '');

// Bump together with the privacy page whenever its text changes; stored with every lead
export const CONSENT_VERSION = 'privacy-2026-11';
