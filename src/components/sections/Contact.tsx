const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 md:px-10 max-w-[1280px] mx-auto min-h-[60vh] flex flex-col justify-center">
            <div className="glass-panel p-8 md:p-16 rounded-3xl border border-primary/20 relative overflow-hidden text-center">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center gap-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Open for Opportunities
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white font-display leading-tight">
                        Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">The Future</span>
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl font-body">
                        Specializing in High-Performance Architecture, Scalable System Design, and Clean Code.
                        Ready to transform complex problems into elegant solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mt-8">
                        <a href="mailto:rohitsi2104@gmail.com" className="group glass-card p-6 rounded-xl hover:bg-primary/10 transition-colors flex flex-col items-center gap-3">
                            <span className="material-symbols-outlined text-3xl text-primary mb-2">mail</span>
                            <span className="text-white font-bold">Email</span>
                            <span className="text-gray-500 text-sm group-hover:text-primary transition-colors">rohitsi2104@gmail.com</span>
                        </a>

                        <a href="tel:+918335811533" className="group glass-card p-6 rounded-xl hover:bg-primary/10 transition-colors flex flex-col items-center gap-3">
                            <span className="material-symbols-outlined text-3xl text-primary mb-2">call</span>
                            <span className="text-white font-bold">Phone</span>
                            <span className="text-gray-500 text-sm group-hover:text-primary transition-colors">+91 8335811533</span>
                        </a>

                        <a href="https://www.linkedin.com/in/rohit-singh-283bb7243/" target="_blank" className="group glass-card p-6 rounded-xl hover:bg-primary/10 transition-colors flex flex-col items-center gap-3">
                            <span className="material-symbols-outlined text-3xl text-primary mb-2">work</span>
                            <span className="text-white font-bold">LinkedIn</span>
                            <span className="text-gray-500 text-sm group-hover:text-primary transition-colors">Connect</span>
                        </a>

                        <a href="https://github.com/rohitsi2104" target="_blank" className="group glass-card p-6 rounded-xl hover:bg-primary/10 transition-colors flex flex-col items-center gap-3">
                            <span className="material-symbols-outlined text-3xl text-primary mb-2">code</span>
                            <span className="text-white font-bold">GitHub</span>
                            <span className="text-gray-500 text-sm group-hover:text-primary transition-colors">Follow</span>
                        </a>
                    </div>

                    <div className="flex gap-6 mt-4">
                        <a href="https://www.facebook.com/rohitsingh2106" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                            <span className="text-sm font-bold">Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/rohitsi2106/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                            <span className="text-sm font-bold">Instagram</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
