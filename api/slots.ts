import { calConfig, calErrorMessage, calFetch, isValidTimeZone, json } from './_cal.js';

const DATE = /^\d{4}-\d{2}-\d{2}$/;

// GET /api/slots?start=YYYY-MM-DD&end=YYYY-MM-DD&timeZone=Area/City
// → { slots: { "YYYY-MM-DD": ["2026-11-04T14:00:00.000+11:00", ...] } }
export async function GET(request: Request) {
    const params = new URL(request.url).searchParams;
    const start = params.get('start') || '';
    const end = params.get('end') || '';
    const timeZone = params.get('timeZone') || 'UTC';

    if (!DATE.test(start) || !DATE.test(end) || !isValidTimeZone(timeZone)) {
        return json({ error: 'Invalid start, end or timeZone' }, 400);
    }

    const { username, eventTypeSlug } = calConfig();
    const query = new URLSearchParams({ username, eventTypeSlug, start, end, timeZone });
    const res = await calFetch(`/slots?${query}`, '2024-09-04');
    const body = (await res.json().catch(() => null)) as { data?: Record<string, { start: string }[]> } | null;

    if (!res.ok) {
        return json({ error: calErrorMessage(body, 'Could not load availability') }, 502);
    }

    const data = body?.data ?? {};
    const slots = Object.fromEntries(
        Object.entries(data).map(([date, list]) => [date, list.map(s => s.start)])
    );

    return json({ slots }, 200, { 'Cache-Control': 's-maxage=60, stale-while-revalidate=300' });
}
