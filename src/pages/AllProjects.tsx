

const AllProjects = () => {
    const allProjects = [
        // --- Flagship Projects (Resume) ---
        {
            title: 'CodeHarbor VS Code Extension',
            category: 'Developer Tools',
            description: 'A comprehensive developer tool for file-level code analysis, conversion, and lineage tracking. Features batch operations and real-time status updates via WebViews.',
            tech: ['TypeScript', 'VS Code API', 'HTML/CSS'],
            icon: 'extension',
            image: null,
            link: '#'
        },
        {
            title: 'Secure Code Execution Service',
            category: 'Backend Security',
            description: 'Docker-based sandboxed environment for executing code safely. Features isolation, dependency pre-bundling, and custom runtime support for Java 17 and Python.',
            tech: ['Docker', 'Python', 'FastAPI'],
            icon: 'security',
            image: null,
            link: '#'
        },
        {
            title: 'Autonomous API Testing Agent',
            category: 'AI Agents',
            description: 'Agent-based endpoint testing system (AtomicAgent/AutoGen Core v2) that autonomously generates payloads, executes against APIs, and compares responses.',
            tech: ['AutoGen', 'AI Agents', 'Python'],
            icon: 'smart_toy',
            image: null,
            link: '#'
        },

        // --- Hardware & IoT Projects ---
        {
            title: 'Smart Crop Health Monitoring System',
            category: 'IoT / AI',
            description: 'Automated rover system using AI to monitor crop health, identify diseases, and alert farmers via WhatsApp. Includes 6-node power monitoring and environmental sensing.',
            tech: ['IoT', 'Artificial Intelligence', 'Raspberry Pi', 'WhatsApp API'],
            icon: 'agriculture',
            image: null,
            link: 'https://github.com/rohitsi2104/Plant-Disease-Detection_rover'
        },
        {
            title: 'Four-Legged Surveillance Bot',
            category: 'Robotics',
            description: 'Spider-shaped robot with live feed camera and Bluetooth control for disaster-stricken environment surveillance.',
            tech: ['Android', 'Bluetooth', 'Robotics'],
            icon: 'smart_toy',
            image: null,
            link: '#'
        },
        {
            title: 'Home Automation System',
            category: 'IoT / NLP',
            description: 'Voice and mobile-operated system for door locks and lighting. Integrated with MQTT server and ESP32 microcontrollers.',
            tech: ['NLP', 'ESP32', 'MQTT', 'C++'],
            icon: 'home_iot_device',
            image: null,
            link: '#'
        },

        {
            title: 'Agriculture Drone',
            category: 'Robotics / IoT',
            description: 'Autonomous agriculture drone featuring plant disease and animal detection with alert generation. Supports manual and automated surveillance modes.',
            tech: ['Drone Tech', 'IoT', 'Computer Vision'],
            icon: 'flight',
            image: null,
            link: '#'
        },

        // --- AI & ML Projects ---
        {
            title: 'Sign Language Detection',
            category: 'Computer Vision',
            description: 'Real-time video translation system that converts sign language gestures into English text using TensorFlow and Deep Learning models.',
            tech: ['Computer Vision', 'TensorFlow', 'Python'],
            icon: 'sign_language',
            image: null,
            link: 'https://github.com/rohitsi2104/ISL/blob/main/Final_program.ipynb'
        },
        {
            title: 'Plant Disease Detection (SVM)',
            category: 'Machine Learning',
            description: 'SVM-based model trained on 800+ distinctive features to identify plant diseases with high precision.',
            tech: ['Machine Learning', 'SVM', 'Python'],
            icon: 'local_florist',
            image: null,
            link: 'https://github.com/rohitsi2104/self_agri_dis_detc/blob/main/Disease.py'
        },
        {
            title: 'Spam Message Detection',
            category: 'NLP / Security',
            description: 'Automatic spam message detection system using machine learning algorithms to filter unsolicited communication in real-time.',
            tech: ['NLP', 'Machine Learning', 'Python'],
            icon: 'mark_email_unread',
            image: null,
            link: 'https://github.com/rohitsi2104/Spam-message-detection'
        }
    ];

    return (
        <section className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto min-h-screen">

            <div className="flex flex-col gap-12">
                {/* Header */}
                <div className="flex flex-col gap-6 text-center animate-fade-in">
                    <div className="inline-flex items-center gap-2 self-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-primary text-xs font-bold uppercase tracking-widest font-mono">My Portfolio</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-display">
                        All <span className="text-primary">Projects</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        A collection of my work ranging from enterprise developer tools to IoT research and AI systems.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-card flex flex-col group rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-white/5 bg-card-dark/50"
                        >
                            {/* Image Section (if available) */}
                            {project.image && (
                                <div className="h-48 w-full overflow-hidden relative border-b border-white/5 bg-black/40">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                                        onError={(e) => {
                                            // Fallback if image not found to avoid broken UI
                                            (e.target as HTMLImageElement).style.display = 'none';
                                            ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback Icon Overlay - Visible if image fails or loading */}
                                    <div className="absolute inset-0 hidden items-center justify-center bg-card-dark text-gray-600">
                                        <span className="material-symbols-outlined text-4xl">{project.icon}</span>
                                    </div>
                                </div>
                            )}

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow gap-4">
                                <div className="flex justify-between items-start">
                                    {!project.image && (
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                            <span className="material-symbols-outlined text-2xl">{project.icon}</span>
                                        </div>
                                    )}
                                    <span className="text-gray-500 text-xs font-mono tracking-widest uppercase ml-auto">{project.category}</span>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 font-display">{project.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm font-body line-clamp-4">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs font-medium text-primary bg-primary/5 px-2 py-1 rounded">
                                                #{t}
                                            </span>
                                        ))}
                                    </div>

                                    {project.link && project.link !== '#' && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors mt-2"
                                        >
                                            View Code <span className="material-symbols-outlined text-sm">arrow_outward</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllProjects;
