// Where the visitor came from, captured on their first page view of the session and sent with a booking.
// Kept in sessionStorage only: nothing leaves the browser unless the visitor submits a form.

export type Attribution = {
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmTerm?: string;
    utmContent?: string;
    referrer?: string;
    landingPage?: string;
};

const KEY = 'attribution';

const UTM_PARAMS: Record<string, keyof Attribution> = {
    utm_source: 'utmSource',
    utm_medium: 'utmMedium',
    utm_campaign: 'utmCampaign',
    utm_term: 'utmTerm',
    utm_content: 'utmContent',
};

export const captureAttribution = () => {
    try {
        if (sessionStorage.getItem(KEY)) return;
        const params = new URLSearchParams(window.location.search);
        const attribution: Attribution = { landingPage: window.location.pathname + window.location.search };
        for (const [param, field] of Object.entries(UTM_PARAMS)) {
            const value = params.get(param);
            if (value) attribution[field] = value;
        }
        // Only external referrers are interesting; internal navigation isn't a source
        if (document.referrer && new URL(document.referrer).origin !== window.location.origin) {
            attribution.referrer = document.referrer;
        }
        sessionStorage.setItem(KEY, JSON.stringify(attribution));
    } catch {
        // Storage blocked (private mode etc.): attribution is optional
    }
};

export const getAttribution = (): Attribution => {
    try {
        return JSON.parse(sessionStorage.getItem(KEY) ?? '{}') as Attribution;
    } catch {
        return {};
    }
};
