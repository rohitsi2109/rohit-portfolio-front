import { useEffect, useRef, useState } from 'react';
import { COUNTRIES } from './phoneCountries';

type Props = {
    country: string;
    number: string;
    onCountryChange: (iso: string) => void;
    onNumberChange: (value: string) => void;
    inputClass: string;
};

const PhoneInput = ({ country, number, onCountryChange, onNumberChange, inputClass }: Props) => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const wrapperRef = useRef<HTMLDivElement>(null);
    const selected = COUNTRIES.find(c => c.iso === country) ?? COUNTRIES[0];

    useEffect(() => {
        if (!open) return;
        const onClick = (e: MouseEvent) => {
            if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, [open]);

    const q = query.trim().toLowerCase();
    const filtered = q
        ? COUNTRIES.filter(c => c.name.toLowerCase().includes(q) || c.dial.includes(q) || c.iso.toLowerCase() === q)
        : COUNTRIES;

    const choose = (iso: string) => {
        onCountryChange(iso);
        setOpen(false);
        setQuery('');
    };

    return (
        <div ref={wrapperRef} className="relative flex gap-2">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label={`Country code: ${selected.name} ${selected.dial}`}
                className="shrink-0 flex items-center gap-2 rounded-lg bg-background-dark/60 border border-white/10 px-3 text-white hover:border-primary/40 focus:outline-none focus:border-primary/60 transition-colors"
            >
                <selected.Flag className="w-6 h-4 rounded-sm" title={selected.name} />
                <span className="font-mono text-sm">{selected.dial}</span>
                <span className={`material-symbols-outlined text-base text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}>expand_more</span>
            </button>

            <input
                required
                type="tel"
                inputMode="tel"
                pattern="[0-9\s\(\)\-]{5,16}"
                title="Your number without the country code"
                value={number}
                onChange={e => onNumberChange(e.target.value)}
                className={inputClass}
                placeholder="412 345 678"
                autoComplete="tel-national"
            />

            {open && (
                <div className="absolute z-20 top-full left-0 mt-2 w-72 max-w-[calc(100vw-3rem)] rounded-xl border border-white/10 bg-surface-dark shadow-2xl overflow-hidden">
                    <div className="p-2 border-b border-white/10">
                        <input
                            autoFocus
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            placeholder="Search country or code"
                            className="w-full rounded-lg bg-background-dark border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/60"
                        />
                    </div>
                    <ul role="listbox" className="max-h-64 overflow-y-auto py-1">
                        {filtered.map(c => (
                            <li key={c.iso}>
                                <button
                                    type="button"
                                    role="option"
                                    aria-selected={c.iso === selected.iso}
                                    onClick={() => choose(c.iso)}
                                    className={`w-full flex items-center gap-3 px-3 py-2 text-left text-sm transition-colors ${
                                        c.iso === selected.iso ? 'bg-primary/15 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                    }`}
                                >
                                    <c.Flag className="w-6 h-4 rounded-sm shrink-0" />
                                    <span className="flex-1 truncate">{c.name}</span>
                                    <span className="font-mono text-gray-500">{c.dial}</span>
                                </button>
                            </li>
                        ))}
                        {filtered.length === 0 && <li className="px-3 py-3 text-sm text-gray-500">No matches</li>}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PhoneInput;
