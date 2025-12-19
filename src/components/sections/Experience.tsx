const Experience = () => {
    const jobs = [
        {
            company: 'EXL Service',
            role: 'Senior Executive - Software Engineer',
            period: '2025 – Present',
            description: 'Promoted for ownership and delivery of key engineering initiatives. Owning VS Code extension architecture and Code Execution Service. Leading execution on large projects and supporting client demos.',
            tags: ['VS Code API', 'Backend Architecture', 'Leadership']
        },
        {
            company: 'EXL Service',
            role: 'Associate - Software Engineer',
            period: '2024 – 2025',
            description: 'Built developer productivity systems for code operations. Worked across backend and tooling layers using REST integrations and scalable design patterns.',
            tags: ['Python', 'REST APIs', 'Developer Tools']
        },
        {
            company: 'Livwize IoT Solutions',
            role: 'Industry Automation Engineer Intern (R&D)',
            period: 'Internship',
            description: 'Developed a 6-node power monitoring device and a precise Ohm meter. Designed and prototyped a smart environmental monitoring device.',
            tags: ['IoT', 'Embedded Systems', 'R&D']
        },
        {
            company: 'Dayalbagh Educational Institute',
            role: 'Intern (Learn & Earn Program)',
            period: '2020 – Present',
            description: 'Worked on a pollution control project using water mist, focused on air quality monitoring and reporting.',
            tags: ['Environmental Tech', 'Monitoring']
        }
    ];

    return (
        <section id="experience" className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-display">Experience</h2>
                        <div className="h-px bg-white/10 flex-grow"></div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        My professional journey in software engineering, from R&D in IoT to building enterprise developer tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="glass-panel p-8 rounded-xl flex flex-col md:flex-row gap-6 hover:border-primary/30 transition-all duration-300 group"
                        >
                            <div className="flex-shrink-0 md:w-48 flex flex-col">
                                <span className="text-primary font-bold text-lg">{job.company}</span>
                                <span className="text-gray-500 text-sm font-mono mt-1">{job.period}</span>
                            </div>

                            <div className="flex-grow flex flex-col gap-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                    {job.role}
                                </h3>
                                <p className="text-gray-300 leading-relaxed font-body">
                                    {job.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {job.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-primary/80 border border-primary/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
