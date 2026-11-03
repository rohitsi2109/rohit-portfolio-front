import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from './PhoneInput';
import { guessCountry, toE164 } from './phoneCountries';
import { API_URL, CONSENT_VERSION } from '../../lib/api';
import { getAttribution } from '../../lib/attribution';

type Slots = Record<string, string[]>;
type SlotsResult = { key: string; slots: Slots; error: string | null };
type Booking = { start?: string; meetingUrl?: string };

const MONTHS_AHEAD = 3;
const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const TIMEZONES = [
    { value: 'Australia/Sydney', label: 'Sydney / Melbourne (AET)' },
    { value: 'Australia/Brisbane', label: 'Brisbane (AEST)' },
    { value: 'Australia/Adelaide', label: 'Adelaide (ACT)' },
    { value: 'Australia/Perth', label: 'Perth (AWST)' },
    { value: 'Asia/Singapore', label: 'Singapore (SGT)' },
    { value: 'Asia/Kolkata', label: 'India (IST)' },
    { value: 'Asia/Dubai', label: 'Dubai (GST)' },
    { value: 'Europe/London', label: 'London (UK)' },
    { value: 'America/New_York', label: 'New York (ET)' },
    { value: 'America/Los_Angeles', label: 'Los Angeles (PT)' },
];

const visitorTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Australia/Sydney';

const pad = (n: number) => String(n).padStart(2, '0');
const toDateKey = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`;

// Today's date (YYYY-MM-DD) as seen in the given time zone
const todayIn = (timeZone: string) =>
    new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

const formatTime = (iso: string, timeZone: string) =>
    new Intl.DateTimeFormat('en-US', { timeZone, hour: 'numeric', minute: '2-digit' }).format(new Date(iso));

const formatDate = (dateKey: string, style: 'long' | 'short' = 'long') =>
    new Intl.DateTimeFormat('en-US', {
        timeZone: 'UTC',
        weekday: style,
        day: 'numeric',
        month: style,
    }).format(new Date(`${dateKey}T00:00:00Z`));

const monthLabel = (y: number, m: number) =>
    new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', month: 'long', year: 'numeric' }).format(new Date(Date.UTC(y, m, 1)));

const BookingCalendar = () => {
    const [timeZone, setTimeZone] = useState(visitorTimeZone);
    const today = todayIn(timeZone);
    const [todayYear, todayMonth] = today.split('-').map(Number);

    const [view, setView] = useState({ year: todayYear, month: todayMonth - 1 });
    const [result, setResult] = useState<SlotsResult | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [step, setStep] = useState<'pick' | 'details' | 'done'>('pick');
    // "website" is a honeypot: hidden from people, filled in by bots
    const [form, setForm] = useState({ name: '', email: '', phoneCountry: guessCountry(visitorTimeZone), phone: '', notes: '', website: '' });
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [booking, setBooking] = useState<Booking | null>(null);

    const daysInMonth = new Date(Date.UTC(view.year, view.month + 1, 0)).getUTCDate();
    const monthStart = toDateKey(view.year, view.month, 1);
    const monthEnd = toDateKey(view.year, view.month, daysInMonth);
    const rangeStart = monthStart < today ? today : monthStart;
    const rangeKey = `${timeZone}|${rangeStart}|${monthEnd}`;

    useEffect(() => {
        let cancelled = false;
        const query = new URLSearchParams({ start: rangeStart, end: monthEnd, timeZone });
        fetch(`${API_URL}/v1/slots?${query}`)
            .then(async res => {
                const data = await res.json();
                if (!res.ok) throw new Error(data?.error);
                if (!cancelled) setResult({ key: rangeKey, slots: data.slots ?? {}, error: null });
            })
            .catch(() => {
                if (!cancelled) setResult({ key: rangeKey, slots: {}, error: 'Could not load availability. Please try again.' });
            });
        return () => { cancelled = true; };
    }, [rangeKey, rangeStart, monthEnd, timeZone]);

    const loading = result?.key !== rangeKey;
    const slots = loading ? {} : result.slots;
    const availableDates = Object.keys(slots).filter(d => slots[d].length > 0).sort();
    const activeDate = selectedDate && slots[selectedDate]?.length ? selectedDate : availableDates[0] ?? null;

    const monthIndex = view.year * 12 + view.month;
    const currentMonthIndex = todayYear * 12 + (todayMonth - 1);
    const canGoBack = monthIndex > currentMonthIndex;
    const canGoForward = monthIndex < currentMonthIndex + MONTHS_AHEAD;

    const changeMonth = (delta: number) => {
        const next = monthIndex + delta;
        setView({ year: Math.floor(next / 12), month: next % 12 });
        setSelectedDate(null);
    };

    const changeTimeZone = (tz: string) => {
        setTimeZone(tz);
        setSelectedDate(null);
        setSelectedSlot(null);
    };

    const pickSlot = (slot: string) => {
        setSelectedSlot(slot);
        setSubmitError(null);
        setStep('details');
    };

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        if (!selectedSlot) return;
        setSubmitting(true);
        setSubmitError(null);
        try {
            const res = await fetch(`${API_URL}/v1/bookings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: toE164(form.phoneCountry, form.phone),
                    phoneCountry: form.phoneCountry,
                    notes: form.notes,
                    start: selectedSlot,
                    timeZone,
                    consentVersion: CONSENT_VERSION,
                    attribution: getAttribution(),
                    honeypot: form.website,
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || 'Booking failed. Please try another time.');
            setBooking(data);
            setStep('done');
        } catch (err) {
            setSubmitError(err instanceof Error ? err.message : 'Booking failed. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const timeZoneOptions = TIMEZONES.some(t => t.value === visitorTimeZone)
        ? TIMEZONES
        : [{ value: visitorTimeZone, label: `${visitorTimeZone.replace(/_/g, ' ')} (your time)` }, ...TIMEZONES];

    const slotSummary = selectedSlot && (
        <div className="flex flex-col gap-1">
            <span className="text-white font-bold font-display text-lg">
                {formatDate(new Intl.DateTimeFormat('en-CA', { timeZone }).format(new Date(selectedSlot)))}
            </span>
            <span className="text-primary font-mono text-sm">
                {formatTime(selectedSlot, timeZone)} · 15 min · {timeZone.replace(/_/g, ' ')}
            </span>
        </div>
    );

    const inputClass = 'w-full rounded-lg bg-background-dark/60 border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-colors font-body';

    return (
        <div className="glass-card rounded-2xl border border-white/10 overflow-hidden text-left grid grid-cols-1 lg:grid-cols-[260px_1fr]">
            {/* Event details */}
            <aside className="p-6 lg:p-8 flex flex-col gap-5 border-b lg:border-b-0 lg:border-r border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">terminal</span>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">Rohit Singh</p>
                        <h3 className="text-white font-bold font-display text-lg leading-tight">Project Scope Call</h3>
                    </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    A free, no-obligation chat about what you want to build, your timeline and budget.
                </p>
                <ul className="flex flex-col gap-3 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">schedule</span>15 minutes
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">videocam</span>Google Meet
                    </li>
                </ul>
                <label className="flex flex-col gap-2 mt-auto">
                    <span className="flex items-center gap-2 text-xs text-gray-500 font-mono uppercase tracking-widest">
                        <span className="material-symbols-outlined text-base">public</span>Your time zone
                    </span>
                    <select
                        value={timeZone}
                        onChange={e => changeTimeZone(e.target.value)}
                        disabled={step !== 'pick'}
                        className="rounded-lg bg-background-dark border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/60 disabled:opacity-50"
                    >
                        {timeZoneOptions.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                    </select>
                </label>
            </aside>

            {step === 'pick' && (
                <div className="grid grid-cols-1 md:grid-cols-[1fr_200px]">
                    {/* Month calendar */}
                    <div className="p-6 lg:p-8 flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                            <h4 className="text-white font-bold font-display text-lg">{monthLabel(view.year, view.month)}</h4>
                            <div className="flex gap-1">
                                <button
                                    onClick={() => changeMonth(-1)}
                                    disabled={!canGoBack}
                                    aria-label="Previous month"
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-primary disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                                >
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                <button
                                    onClick={() => changeMonth(1)}
                                    disabled={!canGoForward}
                                    aria-label="Next month"
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-primary disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                                >
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-1.5 text-center">
                            {WEEKDAYS.map(d => (
                                <span key={d} className="text-[11px] font-mono uppercase tracking-widest text-gray-500 pb-2">{d}</span>
                            ))}
                            {Array.from({ length: (new Date(Date.UTC(view.year, view.month, 1)).getUTCDay() + 6) % 7 }, (_, i) => (
                                <span key={`blank-${i}`} />
                            ))}
                            {Array.from({ length: daysInMonth }, (_, i) => {
                                const key = toDateKey(view.year, view.month, i + 1);
                                const available = !!slots[key]?.length;
                                const selected = key === activeDate;
                                return (
                                    <button
                                        key={key}
                                        disabled={!available}
                                        onClick={() => setSelectedDate(key)}
                                        className={`aspect-square rounded-lg text-sm font-bold font-display transition-all relative ${
                                            selected
                                                ? 'bg-primary text-background-dark shadow-neon-sm'
                                                : available
                                                    ? 'bg-primary/10 text-white border border-primary/20 hover:border-primary/60 hover:bg-primary/20'
                                                    : 'text-gray-600 cursor-not-allowed'
                                        }`}
                                    >
                                        {i + 1}
                                        {key === today && (
                                            <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${selected ? 'bg-background-dark' : 'bg-primary'}`} />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {loading && <p className="text-gray-500 text-sm flex items-center gap-2"><span className="material-symbols-outlined text-base animate-spin">progress_activity</span>Loading availability…</p>}
                        {!loading && result?.error && <p className="text-red-400 text-sm">{result.error}</p>}
                        {!loading && !result?.error && availableDates.length === 0 && (
                            <p className="text-gray-500 text-sm">No open times this month. Try the next month.</p>
                        )}
                    </div>

                    {/* Time slots */}
                    <div className="p-6 lg:py-8 lg:pr-8 lg:pl-0 flex flex-col gap-3 border-t md:border-t-0 border-white/10">
                        <h4 className="text-white font-bold font-display">
                            {activeDate ? formatDate(activeDate, 'short') : 'Pick a date'}
                        </h4>
                        <div className="flex flex-col gap-2 max-h-[360px] overflow-y-auto pr-1">
                            {activeDate && slots[activeDate].map(slot => (
                                <button
                                    key={slot}
                                    onClick={() => pickSlot(slot)}
                                    className="w-full py-2.5 rounded-lg border border-primary/30 text-primary font-bold font-mono text-sm hover:bg-primary hover:text-background-dark transition-colors"
                                >
                                    {formatTime(slot, timeZone)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {step === 'details' && (
                <form onSubmit={submit} className="p-6 lg:p-8 flex flex-col gap-5">
                    <button
                        type="button"
                        onClick={() => setStep('pick')}
                        className="self-start flex items-center gap-1 text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                        <span className="material-symbols-outlined text-base">arrow_back</span>Change time
                    </button>
                    {slotSummary}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label className="flex flex-col gap-2">
                            <span className="text-sm text-gray-300">Your name *</span>
                            <input required maxLength={100} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Jane Smith" autoComplete="name" />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm text-gray-300">Work email *</span>
                            <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="jane@company.com" autoComplete="email" />
                        </label>
                        <label className="flex flex-col gap-2 sm:col-span-2">
                            <span className="text-sm text-gray-300">Phone / WhatsApp *</span>
                            <PhoneInput
                                country={form.phoneCountry}
                                number={form.phone}
                                onCountryChange={phoneCountry => setForm({ ...form, phoneCountry })}
                                onNumberChange={phone => setForm({ ...form, phone })}
                                inputClass={inputClass}
                            />
                        </label>
                    </div>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm text-gray-300">What would you like to build?</span>
                        <textarea rows={4} maxLength={2000} value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} className={inputClass} placeholder="A few lines about your business, the project and any deadline." />
                    </label>
                    <label aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                        Website
                        <input tabIndex={-1} autoComplete="off" name="website" value={form.website} onChange={e => setForm({ ...form, website: e.target.value })} />
                    </label>
                    {submitError && <p className="text-red-400 text-sm">{submitError}</p>}
                    <button
                        type="submit"
                        disabled={submitting}
                        className="self-start inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-background-dark font-display font-bold shadow-neon hover:shadow-neon-sm hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 transition-all"
                    >
                        <span className={`material-symbols-outlined ${submitting ? 'animate-spin' : ''}`}>{submitting ? 'progress_activity' : 'event_available'}</span>
                        {submitting ? 'Booking…' : 'Confirm Booking'}
                    </button>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-xl">
                        By booking, you agree that I store the details above to arrange and follow up on this call,
                        as described in the{' '}
                        <Link to="/privacy" target="_blank" className="text-gray-300 underline hover:text-primary">privacy policy</Link>.
                    </p>
                </form>
            )}

            {step === 'done' && (
                <div className="p-8 lg:p-12 flex flex-col items-center justify-center gap-5 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center text-primary shadow-neon-sm">
                        <span className="material-symbols-outlined text-4xl">check</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white font-display">You're booked in!</h3>
                    {slotSummary}
                    <p className="text-gray-400 max-w-md">
                        A calendar invite with the Google Meet link is on its way to <span className="text-white">{form.email}</span>.
                        Talk soon!
                    </p>
                    {booking?.meetingUrl?.startsWith('http') && (
                        <a href={booking.meetingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors">
                            <span className="material-symbols-outlined">videocam</span>Meeting link
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

export default BookingCalendar;
