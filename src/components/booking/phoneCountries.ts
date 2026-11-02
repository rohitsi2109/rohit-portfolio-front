import type { ComponentType } from 'react';
import {
    AE, AU, BD, CA, CH, CN, DE, ES, FJ, FR, GB, HK, ID, IE, IN, IT, JP, KR, LK, MY,
    NL, NP, NZ, PH, PK, QA, SA, SE, SG, TH, TW, US, VN, ZA,
} from 'country-flag-icons/react/3x2';

export type Country = { iso: string; name: string; dial: string; Flag: ComponentType<{ className?: string; title?: string }> };

// Target markets first, then the rest alphabetically
export const COUNTRIES: Country[] = [
    { iso: 'AU', name: 'Australia', dial: '+61', Flag: AU },
    { iso: 'SG', name: 'Singapore', dial: '+65', Flag: SG },
    { iso: 'NZ', name: 'New Zealand', dial: '+64', Flag: NZ },
    { iso: 'IN', name: 'India', dial: '+91', Flag: IN },
    { iso: 'US', name: 'United States', dial: '+1', Flag: US },
    { iso: 'GB', name: 'United Kingdom', dial: '+44', Flag: GB },
    { iso: 'BD', name: 'Bangladesh', dial: '+880', Flag: BD },
    { iso: 'CA', name: 'Canada', dial: '+1', Flag: CA },
    { iso: 'CN', name: 'China', dial: '+86', Flag: CN },
    { iso: 'FJ', name: 'Fiji', dial: '+679', Flag: FJ },
    { iso: 'FR', name: 'France', dial: '+33', Flag: FR },
    { iso: 'DE', name: 'Germany', dial: '+49', Flag: DE },
    { iso: 'HK', name: 'Hong Kong', dial: '+852', Flag: HK },
    { iso: 'ID', name: 'Indonesia', dial: '+62', Flag: ID },
    { iso: 'IE', name: 'Ireland', dial: '+353', Flag: IE },
    { iso: 'IT', name: 'Italy', dial: '+39', Flag: IT },
    { iso: 'JP', name: 'Japan', dial: '+81', Flag: JP },
    { iso: 'MY', name: 'Malaysia', dial: '+60', Flag: MY },
    { iso: 'NP', name: 'Nepal', dial: '+977', Flag: NP },
    { iso: 'NL', name: 'Netherlands', dial: '+31', Flag: NL },
    { iso: 'PK', name: 'Pakistan', dial: '+92', Flag: PK },
    { iso: 'PH', name: 'Philippines', dial: '+63', Flag: PH },
    { iso: 'QA', name: 'Qatar', dial: '+974', Flag: QA },
    { iso: 'SA', name: 'Saudi Arabia', dial: '+966', Flag: SA },
    { iso: 'ZA', name: 'South Africa', dial: '+27', Flag: ZA },
    { iso: 'KR', name: 'South Korea', dial: '+82', Flag: KR },
    { iso: 'ES', name: 'Spain', dial: '+34', Flag: ES },
    { iso: 'LK', name: 'Sri Lanka', dial: '+94', Flag: LK },
    { iso: 'SE', name: 'Sweden', dial: '+46', Flag: SE },
    { iso: 'CH', name: 'Switzerland', dial: '+41', Flag: CH },
    { iso: 'TW', name: 'Taiwan', dial: '+886', Flag: TW },
    { iso: 'TH', name: 'Thailand', dial: '+66', Flag: TH },
    { iso: 'AE', name: 'United Arab Emirates', dial: '+971', Flag: AE },
    { iso: 'VN', name: 'Vietnam', dial: '+84', Flag: VN },
];

// Best guess at the visitor's country from their time zone
const TIMEZONE_COUNTRY: Record<string, string> = {
    'Asia/Singapore': 'SG', 'Asia/Kolkata': 'IN', 'Asia/Calcutta': 'IN', 'Pacific/Auckland': 'NZ',
    'Europe/London': 'GB', 'Asia/Dubai': 'AE', 'Asia/Kuala_Lumpur': 'MY', 'Asia/Hong_Kong': 'HK',
    'Asia/Jakarta': 'ID', 'Asia/Manila': 'PH', 'Asia/Bangkok': 'TH', 'Asia/Tokyo': 'JP',
};

export const guessCountry = (timeZone: string) => {
    if (timeZone.startsWith('Australia/')) return 'AU';
    if (timeZone.startsWith('America/')) return 'US';
    return TIMEZONE_COUNTRY[timeZone] ?? 'AU';
};

// Joins dial code and local number into E.164, dropping a leading trunk "0" (e.g. AU 0412… → +61412…)
export const toE164 = (iso: string, local: string) => {
    const country = COUNTRIES.find(c => c.iso === iso) ?? COUNTRIES[0];
    return country.dial + local.replace(/\D/g, '').replace(/^0+/, '');
};
