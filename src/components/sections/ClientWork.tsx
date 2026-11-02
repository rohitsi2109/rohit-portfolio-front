type ClientProject = {
    client: string;
    category: string;
    problem: string;
    description: string;
    deliverables: string[];
    tech: string[];
    icon: string;
    link: string;
    linkLabel: string;
    // Optional proof: a screenshot (import from src/assets), a measurable result, and a client quote
    image?: string;
    result?: string;
    testimonial?: { quote: string; author: string };
};

const ClientWork = () => {
    const clients: ClientProject[] = [
        {
            client: 'Royal Touchup',
            category: 'Interior Design',
            problem: 'Needed a website that turns visitors into enquiries, and that the team can update without a developer.',
            description: 'Landing page backed by a custom backend that captures leads and lets the team manage images and content section by section through an admin panel.',
            deliverables: ['Landing Page', 'Lead Management', 'Asset Manager', 'Admin Panel'],
            tech: ['React', 'Python', 'REST APIs'],
            icon: 'chair',
            link: 'https://royaltouchup.co.in/',
            linkLabel: 'Visit Live Site'
        },
        {
            client: 'Aquazenix',
            category: 'Water Tank Cleaning',
            problem: 'A local service business that needed an online presence and one place to collect and follow up on leads.',
            description: 'Business website with a React frontend and Python backend. Leads are stored in PostgreSQL, and an admin panel handles image management and lead tracking.',
            deliverables: ['Business Website', 'Lead Capture', 'Image Management', 'Admin Panel'],
            tech: ['React', 'Python', 'PostgreSQL'],
            icon: 'water_drop',
            link: 'https://aquazenix.co.in/',
            linkLabel: 'Visit Live Site'
        },
        {
            client: 'FPS Shop',
            category: 'Quick Commerce App',
            problem: 'A closed community store that wanted residents ordering from their phones and staff billing faster.',
            description: 'Android quick-commerce app built in Flutter with a Python backend, paired with a staff app for billing and preparing orders.',
            deliverables: ['Customer App', 'Staff Billing App', 'Order Preparation', 'Backend APIs'],
            tech: ['Flutter', 'Python', 'Android'],
            icon: 'shopping_cart',
            link: 'https://play.google.com/store/apps/details?id=in.fps.shop',
            linkLabel: 'View on Play Store'
        },
        {
            client: 'Zyrax Fitness',
            category: 'Fitness & Diet',
            problem: 'A fitness brand delivering personalised diet plans and live classes, which needed both web and mobile.',
            description: 'Website plus a companion Android app that lets members join live workout classes.',
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
                        Products I've scoped, built and shipped for paying clients. All of them are live and in use today.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {clients.map((item) => (
                        <div
                            key={item.client}
                            className="glass-card rounded-2xl flex flex-col overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                        >
                            {item.image && (
                                <div className="aspect-[16/9] w-full overflow-hidden border-b border-white/5 bg-black/40">
                                    <img
                                        src={item.image}
                                        alt={`${item.client} screenshot`}
                                        loading="lazy"
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}

                            <div className="p-8 flex flex-col gap-6 flex-grow">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                    </div>
                                    <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-primary/20 bg-primary/5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                        <span className="text-primary text-[10px] font-bold uppercase tracking-widest font-mono">Live</span>
                                    </span>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <span className="text-gray-500 text-xs font-mono tracking-widest uppercase">{item.category}</span>
                                    <h3 className="text-2xl font-bold text-white font-display">{item.client}</h3>
                                    <p className="text-gray-300 text-sm font-body">
                                        <span className="text-primary font-bold">The brief: </span>{item.problem}
                                    </p>
                                    <p className="text-gray-400 leading-relaxed text-sm font-body">
                                        <span className="text-white font-bold">What I built: </span>{item.description}
                                    </p>
                                    {item.result && (
                                        <p className="text-sm font-body text-white bg-primary/10 border border-primary/20 rounded-lg px-3 py-2">
                                            <span className="material-symbols-outlined text-sm text-primary align-middle mr-1">trending_up</span>
                                            {item.result}
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {item.deliverables.map(d => (
                                        <span key={d} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">
                                            {d}
                                        </span>
                                    ))}
                                </div>

                                {item.testimonial && (
                                    <blockquote className="border-l-2 border-primary/50 pl-4 text-sm text-gray-300 italic">
                                        "{item.testimonial.quote}"
                                        <footer className="not-italic text-xs text-gray-500 mt-2">{item.testimonial.author}</footer>
                                    </blockquote>
                                )}

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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientWork;
