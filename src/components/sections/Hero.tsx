import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="relative min-h-[90vh] flex flex-col overflow-hidden">

            {/* Dynamic Background Overlays */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>

            {/* Main Content Wrapper - Grows to fill space */}
            <div className="flex-grow flex items-center justify-center py-20 lg:py-0">
                <div className="relative z-20 w-full max-w-[1280px] px-4 sm:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="flex-1 flex flex-col gap-6 text-center lg:text-left mt-16 lg:mt-0 animate-float">

                        <div className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-primary text-xs font-bold uppercase tracking-widest font-mono">Available for Hire</span>
                        </div>

                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9] font-display">
                            ROHIT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">SINGH</span>
                        </h1>

                        <div className="glass-panel p-6 rounded-xl max-w-2xl transform transition-transform hover:scale-[1.01] duration-500">
                            <h2 className="text-xl sm:text-2xl text-primary font-medium mb-3 font-display">
                                Senior Software Engineer
                            </h2>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-body">
                                Built to stay reliable under pressure — scalable architecture, clean execution, and systems that keep shipping without surprises.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                            <a
                                href="/resume.html"
                                target="_blank"
                                className="flex items-center justify-center gap-3 h-14 px-8 rounded-lg bg-primary text-background-dark text-base font-bold shadow-neon hover:shadow-neon-sm transform hover:-translate-y-1 transition-all font-display"
                            >
                                <span className="material-symbols-outlined">download</span>
                                View Resume
                            </a>
                            <button
                                onClick={() => navigate('/projects')}
                                className="flex items-center justify-center gap-3 h-14 px-8 rounded-lg border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white text-base font-bold backdrop-blur-sm transition-all font-display"
                            >
                                View Projects
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
                                    <div className="ml-auto text-xs text-gray-600 font-mono">portfolio.config.ts</div>
                                </div>
                                <div className="p-6 font-mono text-sm text-gray-400 leading-relaxed overflow-hidden relative flex-1">
                                    <p><span className="text-purple-400">const</span> <span className="text-yellow-300">engineer</span> = <span className="text-purple-400">new</span> <span className="text-blue-400">SoftwareEngineer</span>({`{`}</p>
                                    <p className="pl-4">name: <span className="text-green-400">"Rohit Singh"</span>,</p>
                                    <p className="pl-4">role: <span className="text-green-400">"Software Engineer"</span>,</p>
                                    <p className="pl-4">company: <span className="text-green-400">"EXL Service"</span>,</p>
                                    <p className="pl-4">skills: [</p>
                                    <p className="pl-8"><span className="text-green-400">"Python"</span>, <span className="text-green-400">"TypeScript"</span>, <span className="text-green-400">"REST API"</span>,</p>
                                    <p className="pl-8"><span className="text-green-400">"AWS"</span>, <span className="text-green-400">"React"</span>, <span className="text-green-400">"VS Code Plugin"</span></p>
                                    <p className="pl-4">],</p>
                                    <p className="pl-4">focus: <span className="text-green-400">"Scalable Systems"</span></p>
                                    <p>{`}`});</p>
                                    <p className="mt-4"><span className="text-gray-600">// Initializing portfolio...</span></p>
                                    <p><span className="text-primary animate-pulse">_</span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Stack Marquee - Now Relative relative flow */}
            <div id="skills" className="relative z-20 border-t border-white/5 bg-[#0f2023]/80 backdrop-blur-sm overflow-hidden py-4">
                <div className="flex whitespace-nowrap gap-12 animate-marquee w-max">
                    {[...Array(2)].map((_, i) => (
                        <Fragment key={i}>
                            <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-3xl text-white">code</span>
                                <span className="font-display font-bold text-lg text-white">Python</span>
                            </div>
                            <div className="w-px h-6 bg-white/10"></div>

                            <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-3xl text-white">data_object</span>
                                <span className="font-display font-bold text-lg text-white">TypeScript</span>
                            </div>
                            <div className="w-px h-6 bg-white/10"></div>

                            <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-3xl text-white">terminal</span>
                                <span className="font-display font-bold text-lg text-white">Django</span>
                            </div>
                            <div className="w-px h-6 bg-white/10"></div>

                            <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-3xl text-white">memory</span>
                                <span className="font-display font-bold text-lg text-white">Machine Learning</span>
                            </div>
                            <div className="w-px h-6 bg-white/10"></div>

                            <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-3xl text-white">cloud</span>
                                <span className="font-display font-bold text-lg text-white">AWS</span>
                            </div>
                            <div className="w-px h-6 bg-white/10"></div>

                            <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-3xl text-white">extension</span>
                                <span className="font-display font-bold text-lg text-white">VS Code Extensions</span>
                            </div>
                            <div className="w-px h-6 bg-white/10"></div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
