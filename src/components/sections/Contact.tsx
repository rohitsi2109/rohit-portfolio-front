import { useBooking } from '../booking/BookingContext';

const Contact = () => {
    const { openBooking } = useBooking();
    const channels = [
        { icon: 'mail', label: 'Email', value: 'connect@rohitsingh.in', href: 'mailto:connect@rohitsingh.in?subject=Project%20enquiry' },
        { icon: 'chat', label: 'WhatsApp', value: '+91 83358 11533', href: 'https://wa.me/918335811533' },
        { icon: 'work', label: 'LinkedIn', value: 'Connect', href: 'https://www.linkedin.com/in/rohit-singh-283bb7243/' },
        { icon: 'code', label: 'GitHub', value: 'rohitsi2104', href: 'https://github.com/rohitsi2104' },
    ];

    return (
        <section id="contact" className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto min-h-[60vh] flex flex-col justify-center">
            <div className="glass-panel p-8 md:p-16 rounded-3xl border border-primary/20 relative overflow-hidden text-center">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center gap-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Taking new projects
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white font-display leading-tight">
                        Have a project <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">in mind?</span>
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl font-body">
                        Tell me what you're trying to achieve. In a free 15-minute call we'll work out scope, timeline and budget,
                        and you'll get a clear written quote afterwards. No obligation.
                    </p>

                    <button
                        onClick={openBooking}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-background-dark font-display font-bold text-base md:text-lg shadow-neon hover:shadow-neon-sm transform hover:-translate-y-1 transition-all"
                    >
                        <span className="material-symbols-outlined text-2xl">calendar_month</span>
                        Book a Free Scope Call
                    </button>

                    <p className="flex items-center gap-2 text-gray-500 text-sm">
                        <span className="material-symbols-outlined text-base">public</span>
                        Based in India · working with clients in Australia, Singapore & worldwide · replies within 24 hours
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mt-4">
                        {channels.map(c => (
                            <a
                                key={c.label}
                                href={c.href}
                                target={c.href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                className="group glass-card p-6 rounded-xl hover:bg-primary/10 transition-colors flex flex-col items-center gap-3"
                            >
                                <span className="material-symbols-outlined text-3xl text-primary mb-2">{c.icon}</span>
                                <span className="text-white font-bold">{c.label}</span>
                                <span className="text-gray-500 text-sm group-hover:text-primary transition-colors">{c.value}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
