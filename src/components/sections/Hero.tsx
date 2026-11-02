import { Fragment } from 'react';
import { useBooking } from '../booking/BookingContext';

const Hero = () => {
    const { openBooking } = useBooking();
    const proofPoints = [
        { icon: 'rocket_launch', label: '4 client products live' },
        { icon: 'devices', label: 'Web · Mobile · AI' },
        { icon: 'schedule', label: 'Overlaps AEST & SGT hours' },
    ];

    const stack = [
        { icon: 'code', name: 'React' },
        { icon: 'phone_android', name: 'Flutter' },
        { icon: 'terminal', name: 'Python' },
        { icon: 'database', name: 'PostgreSQL' },
        { icon: 'cloud', name: 'AWS' },
        { icon: 'deployed_code', name: 'Docker' },
        { icon: 'smart_toy', name: 'AI Agents' },
    ];

    return (
        <section className="relative min-h-[90vh] flex flex-col overflow-hidden">

            {/* Dynamic Background Overlays */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>

            {/* Main Content Wrapper - Grows to fill space */}
            <div className="flex-grow flex items-center justify-center py-20 lg:py-0">
                <div className="relative z-20 w-full max-w-[1280px] px-4 sm:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="flex-1 flex flex-col gap-6 text-center lg:text-left mt-16 lg:mt-0">

                        <div className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-primary text-xs font-bold uppercase tracking-widest font-mono">Taking new projects · AU & SG</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.0] font-display">
                            Websites, apps & AI tools that{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">grow your business</span>
                        </h1>

                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-body max-w-2xl">
                            I'm Rohit Singh, a freelance full-stack developer. I design, build and ship production software
                            for small businesses and startups: lead-capturing websites, mobile apps, admin panels and AI automation.
                            You get one senior engineer from scoping call to launch, and full ownership of the code.
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            {proofPoints.map(p => (
                                <span key={p.label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                                    <span className="material-symbols-outlined text-base text-primary">{p.icon}</span>
                                    {p.label}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
                            <button
                                onClick={openBooking}
                                className="flex items-center justify-center gap-3 h-14 px-8 rounded-lg bg-primary text-background-dark text-base font-bold shadow-neon hover:shadow-neon-sm transform hover:-translate-y-1 transition-all font-display"
                            >
                                <span className="material-symbols-outlined">calendar_month</span>
                                Book a Free 15-min Call
                            </button>
                            <button
                                onClick={() => document.getElementById('clients')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center justify-center gap-3 h-14 px-8 rounded-lg border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white text-base font-bold backdrop-blur-sm transition-all font-display"
                            >
                                See Client Work
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Visual/Code Abstract */}
                    <div className="flex-1 w-full max-w-[500px] lg:max-w-none hidden lg:block relative">
                        <div className="relative aspect-square w-full max-w-[600px] mx-auto">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] opacity-30 animate-pulse"></div>

                            {/* Code Window */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] border border-white/10 rounded-2xl bg-[#0d1518] shadow-2xl z-30 overflow-hidden flex flex-col transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                                <div className="h-8 border-b border-white/5 flex items-center px-4 gap-2 bg-[#0f1b1e]">
                                    <div className="size-3 rounded-full bg-red-500/80"></div>
                                    <div className="size-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="size-3 rounded-full bg-green-500/80"></div>
                                    <div className="ml-auto text-xs text-gray-600 font-mono">your-project.ts</div>
                                </div>
                                <div className="p-6 font-mono text-sm text-gray-400 leading-relaxed overflow-hidden relative flex-1">
                                    <p><span className="text-purple-400">const</span> <span className="text-yellow-300">project</span> = <span className="text-purple-400">await</span> <span className="text-blue-400">rohit</span>.build({`{`}</p>
                                    <p className="pl-4">type: <span className="text-green-400">"Website + Admin Panel"</span>,</p>
                                    <p className="pl-4">stack: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Python"</span>, <span className="text-green-400">"PostgreSQL"</span>],</p>
                                    <p className="pl-4">features: [<span className="text-green-400">"Lead capture"</span>, <span className="text-green-400">"CMS"</span>],</p>
                                    <p className="pl-4">timezone: [<span className="text-green-400">"AEST"</span>, <span className="text-green-400">"SGT"</span>],</p>
                                    <p className="pl-4">handover: <span className="text-green-400">"Full source + docs"</span></p>
                                    <p>{`}`});</p>
                                    <p className="mt-4"><span className="text-gray-600">// ✓ Shipped. Live. Supported.</span></p>
                                    <p><span className="text-primary animate-pulse">_</span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Stack Marquee */}
            <div id="skills" className="relative z-20 border-t border-white/5 bg-[#0f2023]/80 backdrop-blur-sm overflow-hidden py-4">
                <div className="flex whitespace-nowrap gap-12 animate-marquee w-max">
                    {[...Array(2)].map((_, i) => (
                        <Fragment key={i}>
                            {stack.map(s => (
                                <Fragment key={s.name}>
                                    <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-3xl text-white">{s.icon}</span>
                                        <span className="font-display font-bold text-lg text-white">{s.name}</span>
                                    </div>
                                    <div className="w-px h-6 bg-white/10"></div>
                                </Fragment>
                            ))}
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
