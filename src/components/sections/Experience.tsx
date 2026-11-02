import plantDiseasePdf from '../../assets/paper/plantDiseaseDetection.pdf';

const Experience = () => {
    const background = [
        {
            icon: 'work',
            title: 'Software Engineer, Clairlabs',
            period: '2026 – Present',
            description: 'Building production software at Clairlabs.'
        },
        {
            icon: 'work_history',
            title: 'Software Engineer (promoted to Senior), EXL Service',
            period: '2024 – 2026',
            description: 'Built enterprise developer tools: a VS Code extension for code analysis and conversion, a sandboxed code execution service, and AI agents for automated API testing.'
        },
        {
            icon: 'memory',
            title: 'IoT & Automation R&D, Livwize IoT Solutions',
            period: 'Internship',
            description: 'Designed and prototyped power and environmental monitoring devices, bridging hardware and software.'
        }
    ];

    const recognition = [
        {
            icon: 'trophy',
            title: 'Best Paper Award',
            description: '46th (Inter) National Systems Conference, chosen from ~400 entries for an ML-powered plant disease detection rover.',
            link: plantDiseasePdf,
            linkText: 'Read Paper'
        },
        {
            icon: 'menu_book',
            title: 'Journal Publication',
            description: 'Co-authored "Smart Crop Health Monitoring System" in the PARITANTRA Journal of Systems Science and Engineering (2024).',
            link: 'https://drive.google.com/file/d/1nC9MXT64wMintgBSDqZBV3C-mNifskSV/view?usp=drive_link',
            linkText: 'View Journal'
        }
    ];

    return (
        <section id="background" className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-display">Background</h2>
                        <div className="h-px bg-white/10 flex-grow"></div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        The enterprise engineering experience behind every client project.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {background.map(item => (
                        <div key={item.title} className="glass-panel p-6 rounded-xl flex gap-4">
                            <span className="material-symbols-outlined text-2xl text-primary">{item.icon}</span>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-bold text-white font-display">{item.title}</h3>
                                <span className="text-gray-500 text-sm font-mono">{item.period}</span>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                    {recognition.map(item => (
                        <div key={item.title} className="glass-panel p-6 rounded-xl flex gap-4">
                            <span className="material-symbols-outlined text-2xl text-primary">{item.icon}</span>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-bold text-white font-display">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-white transition-colors"
                                >
                                    {item.linkText} <span className="material-symbols-outlined text-sm">arrow_outward</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
