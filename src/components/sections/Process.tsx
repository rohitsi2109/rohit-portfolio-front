const Process = () => {
    const steps = [
        {
            icon: 'call',
            title: 'Scope Call',
            description: 'A free 15-minute call to understand your business, goals and budget. You get a written scope and fixed quote within a few days.'
        },
        {
            icon: 'design_services',
            title: 'Plan & Design',
            description: 'We agree on features, milestones and timelines. You review designs or a clickable prototype before any heavy build starts.'
        },
        {
            icon: 'code_blocks',
            title: 'Build & Demo',
            description: 'Weekly progress updates and demos on a live staging link, during hours that overlap with AEST and SGT.'
        },
        {
            icon: 'rocket_launch',
            title: 'Launch & Support',
            description: 'Deployment, handover of full source code and documentation, then a post-launch support window for fixes and tweaks.'
        }
    ];

    return (
        <section id="process" className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-display">
                            How It <span className="text-primary">Works</span>
                        </h2>
                        <div className="h-px bg-white/10 flex-grow"></div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        A simple, transparent process, so you always know what's being built, when, and for how much.
                    </p>
                </div>

                <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <li key={step.title} className="glass-panel p-6 rounded-xl flex flex-col gap-4 relative">
                            <span className="absolute top-4 right-5 text-4xl font-bold font-display text-white/5">0{index + 1}</span>
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white font-display">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Process;
