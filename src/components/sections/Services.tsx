const Services = () => {
    const services = [
        {
            title: 'Business Website + Lead Capture',
            icon: 'language',
            idealFor: 'Service businesses, clinics, trades, agencies',
            description: 'A fast, mobile-friendly website that turns visitors into enquiries, with an admin panel so your team can update content and follow up on leads without a developer.',
            includes: ['Custom design & build', 'Lead forms → database / email', 'Admin panel & CMS', 'SEO basics & analytics']
        },
        {
            title: 'Mobile Apps (Android & iOS)',
            icon: 'phone_android',
            idealFor: 'Retail, communities, fitness, booking-based businesses',
            description: 'Cross-platform Flutter apps with a backend and staff or admin tools: ordering, bookings, memberships and billing.',
            includes: ['Customer app', 'Staff / admin app', 'Backend APIs', 'Play Store / App Store release']
        },
        {
            title: 'AI Chatbots & Automation',
            icon: 'smart_toy',
            idealFor: 'Teams drowning in repetitive questions or manual work',
            description: 'AI assistants trained on your business information, plus agents that automate repetitive workflows such as answering enquiries, processing documents and testing APIs.',
            includes: ['Website / WhatsApp chatbot', 'Workflow automation', 'LLM integrations', 'Usage & cost monitoring']
        },
        {
            title: 'Backend, APIs & Cloud',
            icon: 'cloud',
            idealFor: 'Startups needing a reliable technical partner',
            description: 'Scalable Python backends, REST APIs, databases and AWS deployments, built with the same rigour I apply to enterprise developer tooling.',
            includes: ['API design & build', 'PostgreSQL data modelling', 'AWS / Docker deployment', 'Performance & security fixes']
        }
    ];

    const engagements = [
        { icon: 'request_quote', title: 'Fixed-price project', description: 'Clear scope, milestones and a fixed quote after a free scoping call.' },
        { icon: 'autorenew', title: 'Monthly retainer', description: 'Ongoing development, maintenance and support with dedicated hours.' },
        { icon: 'schedule', title: 'Hourly / ad-hoc', description: 'For small fixes, audits or extending an existing codebase.' },
    ];

    return (
        <section id="services" className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-display">
                        How I Can <span className="text-primary">Help</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        End-to-end delivery, from idea to launch, for businesses in Australia, Singapore and beyond.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="glass-card p-8 rounded-2xl flex flex-col gap-4 hover:bg-white/5 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white font-display">{service.title}</h3>
                            <span className="text-gray-500 text-xs font-mono tracking-widest uppercase">Ideal for: {service.idealFor}</span>
                            <p className="text-gray-400 leading-relaxed font-body">
                                {service.description}
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto pt-4 border-t border-white/5">
                                {service.includes.map(item => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                                        <span className="material-symbols-outlined text-base text-primary">check_circle</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold text-white font-display text-center">Ways to Work Together</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {engagements.map(e => (
                            <div key={e.title} className="glass-panel p-6 rounded-xl flex flex-col gap-3">
                                <span className="material-symbols-outlined text-3xl text-primary">{e.icon}</span>
                                <h4 className="text-lg font-bold text-white font-display">{e.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{e.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 text-sm">
                        Quotes and invoices in AUD, SGD or USD.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
