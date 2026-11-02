import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();
    const projects = [
        {
            title: 'CodeHarbor VS Code Extension',
            category: 'Developer Tools',
            description: 'A comprehensive developer tool for file-level code analysis, conversion, and lineage tracking. Features batch operations and real-time status updates via WebViews.',
            tech: ['TypeScript', 'VS Code API', 'HTML/CSS'],
            icon: 'extension'
        },
        {
            title: 'Secure Code Execution Service',
            category: 'Backend Security',
            description: 'Docker-based sandboxed environment for executing code safely. Features isolation, dependency pre-bundling, and custom runtime support for Java 17 and Python.',
            tech: ['Docker', 'Python', 'FastAPI'],
            icon: 'security'
        },
        {
            title: 'Autonomous API Testing Agent',
            category: 'AI Agents',
            description: 'Agent-based endpoint testing system (AtomicAgent/AutoGen Core v2) that autonomously generates payloads, executes against APIs, and compares responses.',
            tech: ['AutoGen', 'AI Agents', 'Python'],
            icon: 'smart_toy'
        },
        {
            title: 'Plant Disease Detection',
            category: 'Research / ML',
            description: 'Best Paper Award winner. A Bluetooth-controlled rover system that identifies crop diseases using Machine Learning and sends actionable solutions via WhatsApp.',
            tech: ['Python', 'Raspberry Pi', 'ML'],
            icon: 'agriculture'
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-display">
                            Engineering <span className="text-primary">Highlights</span>
                        </h2>
                        <div className="h-px bg-white/10 flex-grow"></div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        Complex systems I've built in enterprise and research settings, the depth I bring to every client project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-card p-8 rounded-2xl flex flex-col gap-6 group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                    <span className="material-symbols-outlined text-2xl">{project.icon}</span>
                                </div>
                                <span className="text-gray-500 text-xs font-mono tracking-widest uppercase">{project.category}</span>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 font-display">{project.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm font-body">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs font-medium text-primary bg-primary/5 px-2 py-1 rounded">
                                        #{t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="flex justify-center mt-12">
                    <button
                        onClick={() => navigate('/projects')}
                        className="group relative px-8 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-full transition-all hover:scale-105 border border-primary/20 hover:border-primary/50 flex items-center gap-2 shadow-neon-sm"
                    >
                        View All Projects
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
