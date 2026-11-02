import { calConfig, calErrorMessage, calFetch, isValidTimeZone, json } from './_cal.js';

type BookingRequest = {
    start?: string;
    name?: string;
    email?: string;
    phone?: string;
    timeZone?: string;
    notes?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Cal.com expects E.164, e.g. +61412345678
const PHONE = /^\+[1-9]\d{6,14}$/;

// POST /api/book { start, name, email, timeZone, notes? }
// → { uid, start, end, meetingUrl? }
export async function POST(request: Request) {
    const body = (await request.json().catch(() => ({}))) as BookingRequest;
    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const phone = body.phone?.replace(/[\s()-]/g, '') ?? '';
    const notes = body.notes?.trim().slice(0, 2000) ?? '';
    const timeZone = body.timeZone ?? '';
    const start = body.start ? new Date(body.start) : null;

    if (!name || name.length > 100) return json({ error: 'Please enter your name.' }, 400);
    if (!EMAIL.test(email)) return json({ error: 'Please enter a valid email address.' }, 400);
    if (!PHONE.test(phone)) return json({ error: 'Please enter your phone number with country code, e.g. +61 412 345 678.' }, 400);
    if (!isValidTimeZone(timeZone)) return json({ error: 'Invalid time zone.' }, 400);
    if (!start || Number.isNaN(start.getTime()) || start.getTime() < Date.now()) {
        return json({ error: 'Please pick an available time.' }, 400);
    }

    const { username, eventTypeSlug } = calConfig();
    const res = await calFetch('/bookings', '2024-08-13', {
        method: 'POST',
        body: JSON.stringify({
            start: start.toISOString(),
            username,
            eventTypeSlug,
            attendee: { name, email, phoneNumber: phone, timeZone, language: 'en' },
            // "title" is a required booking field on the event type ("What is this meeting about?")
            bookingFieldsResponses: {
                title: `Project scope call with ${name}`,
                attendeePhoneNumber: phone,
                ...(notes && { notes }),
            },
            metadata: { source: 'portfolio' },
        }),
    });
    type CalBooking = { uid?: string; start?: string; end?: string; meetingUrl?: string; location?: string };
    const result = (await res.json().catch(() => null)) as { data?: CalBooking | CalBooking[] } | null;

    if (!res.ok) {
        return json({ error: calErrorMessage(result, 'That time could not be booked. Please pick another slot.') }, res.status >= 500 ? 502 : 400);
    }

    const booking = Array.isArray(result?.data) ? result.data[0] : result?.data;
    return json({
        uid: booking?.uid,
        start: booking?.start,
        end: booking?.end,
        meetingUrl: booking?.meetingUrl ?? booking?.location,
    });
}
