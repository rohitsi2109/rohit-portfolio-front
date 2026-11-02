// Shared Cal.com API v2 helpers for the /api functions (underscore = not a route on Vercel)

const CAL_API = 'https://api.cal.com/v2';

export const calConfig = () => ({
    username: process.env.CAL_USERNAME || 'rohit-singh-g2fz4h',
    eventTypeSlug: process.env.CAL_EVENT_SLUG || '15min',
    // Optional: public event types can be booked without a key
    apiKey: process.env.CAL_API_KEY,
});

export const calFetch = (path: string, version: string, init: RequestInit = {}) => {
    const { apiKey } = calConfig();
    const headers: Record<string, string> = {
        'cal-api-version': version,
        'Content-Type': 'application/json',
    };
    if (apiKey) headers.Authorization = `Bearer ${apiKey}`;
    return fetch(`${CAL_API}${path}`, { ...init, headers });
};

export const json = (body: unknown, status = 200, extraHeaders: Record<string, string> = {}) =>
    new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json', ...extraHeaders },
    });

export const isValidTimeZone = (tz: string) => {
    try {
        new Intl.DateTimeFormat('en-US', { timeZone: tz });
        return true;
    } catch {
        return false;
    }
};

// Cal.com errors come back as { error: { message } } or { message }
export const calErrorMessage = (body: unknown, fallback: string) => {
    const b = body as { error?: { message?: string }; message?: string } | null;
    return b?.error?.message || b?.message || fallback;
};
