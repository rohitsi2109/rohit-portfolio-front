const Services = () => {
    const services = [
        {
            title: 'Python Developer',
            icon: 'terminal',
            description: 'Developing independent high-performance software applications. Proficient in creating efficient, scalable, and maintainable solutions using Python frameworks. Strong focus on clean, modular code and problem-solving.'
        },
        {
            title: 'Machine Learning',
            icon: 'neurology',
            description: 'Creating systems that learn from experience. Expertise in developing algorithms and statistical models for prediction and pattern recognition using Supervised, Unsupervised, and Reinforcement learning.'
        },
        {
            title: 'Embedded Systems',
            icon: 'memory',
            description: 'Designing and implementing embedded systems using C/C++. Strong background in microcontroller programming (Arduino, ESP32, Raspberry Pi) and hardware-software integration.'
        },
        {
            title: 'Frontend Development',
            icon: 'code',
            description: 'Crafting visually appealing, responsive web interfaces. Proficient in HTML, CSS, JavaScript, and modern frameworks like React. Translating design concepts into dynamic user experiences.'
        }
    ];

    return (
        <section id="services" className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-display">
                        My <span className="text-primary">Expertise</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Delivering comprehensive solutions across the full technology stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="glass-card p-8 rounded-2xl flex flex-col gap-4 hover:bg-white/5 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white font-display">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-body">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
