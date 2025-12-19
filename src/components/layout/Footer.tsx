const Footer = () => {
    return (
        <footer className="bg-background-dark border-t border-white/5 py-8 relative z-20 mt-auto">
            <div className="max-w-[1280px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-1 text-center md:text-left">
                    <p className="text-gray-500 text-sm font-normal font-body">
                        © {new Date().getFullYear()} Rohit Singh. Built with React & Clean Code.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">code</span>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">work</span>
                    </a>
                    <a href="mailto:rohitsi2104@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">mail</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
