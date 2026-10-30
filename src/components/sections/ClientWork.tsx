const ClientWork = () => {
    const clients = [
        {
            client: 'Royal Touchup',
            category: 'Interior Design',
            description: 'Landing page for an interior designing company, backed by a custom backend that captures leads and manages images and assets section-wise through a dedicated admin panel.',
            deliverables: ['Landing Page', 'Lead Management', 'Asset Manager', 'Admin Panel'],
            tech: ['React', 'Python', 'REST APIs'],
            icon: 'chair',
            link: 'https://royaltouchup.co.in/',
            linkLabel: 'Visit Live Site'
        },
        {
            client: 'Aquazenix',
            category: 'Water Tank Cleaning',
            description: 'Business website for a water tank cleaning company with a React frontend and Python backend. Includes an admin panel for image management and lead capture, stored in PostgreSQL.',
            deliverables: ['Business Website', 'Lead Capture', 'Image Management', 'Admin Panel'],
            tech: ['React', 'Python', 'PostgreSQL'],
            icon: 'water_drop',
            link: 'https://aquazenix.co.in/',
            linkLabel: 'Visit Live Site'
        },
        {
            client: 'FPS Shop',
            category: 'Quick Commerce App',
            description: 'Android quick-commerce app for a closed community, built in Flutter with a Python backend. Paired with a staff admin app for billing and preparing orders.',
            deliverables: ['Customer App', 'Staff Billing App', 'Order Preparation', 'Backend APIs'],
            tech: ['Flutter', 'Python', 'Android'],
            icon: 'shopping_cart',
            link: 'https://play.google.com/store/apps/details?id=in.fps.shop',
            linkLabel: 'View on Play Store'
        },
        {
            client: 'Zyrax Fitness',
            category: 'Fitness & Diet',
            description: 'Personalized diet and fitness platform with a web presence and a companion Android application that lets members join live workout classes.',
            deliverables: ['Website', 'Android App', 'Live Classes'],
            tech: ['Web', 'Android'],
            icon: 'fitness_center',
            link: 'https://www.zyrax.fit/',
            linkLabel: 'Visit Live Site'
        }
    ];

    return (
        <section id="clients" className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-display">
                            Client <span className="text-primary">Work</span>
                        </h2>
                        <div className="h-px bg-white/10 flex-grow"></div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        Freelance products I've designed, built and shipped for clients, live and in use today.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {clients.map((item, index) => (
                        <div
                            key={index}
                            className="glass-card p-8 rounded-2xl flex flex-col gap-6 group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                </div>
                                <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-primary/20 bg-primary/5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest font-mono">Live</span>
                                </span>
                            </div>

                            <div>
                                <span className="text-gray-500 text-xs font-mono tracking-widest uppercase">{item.category}</span>
                                <h3 className="text-2xl font-bold text-white mt-1 mb-2 font-display">{item.client}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm font-body">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {item.deliverables.map(d => (
                                    <span key={d} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">
                                        {d}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-4">
                                <div className="flex flex-wrap gap-2">
                                    {item.tech.map(t => (
                                        <span key={t} className="text-xs font-medium text-primary bg-primary/5 px-2 py-1 rounded">
                                            #{t}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
                                >
                                    {item.linkLabel} <span className="material-symbols-outlined text-sm">arrow_outward</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientWork;
