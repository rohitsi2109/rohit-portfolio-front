import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Handle navigation for anchor links
    const handleNavClick = (href: string) => {
        setIsMenuOpen(false);

        // If it's a page route (starts with / and no hash), just navigate
        if (href.startsWith('/') && !href.includes('#')) {
            navigate(href);
            window.scrollTo(0, 0); // Reset scroll for new page
            return;
        }

        // If it's an anchor link (starts with #)
        if (href.startsWith('#')) {
            const id = href.substring(1);

            // If we are not on home page, navigate to home first, then scroll
            if (location.pathname !== '/') {
                navigate('/');
                // Wait for navigation then scroll
                setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                // We are already on home page, just scroll
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const navLinks = [
        { name: 'About', href: '#experience' },
        { name: 'Clients', href: '#clients' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 transition-all duration-300">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-4 flex items-center justify-between">
                {/* Logo - Click to go Home */}
                <div
                    className="flex items-center gap-3 group cursor-pointer"
                    onClick={() => handleNavClick('/')}
                >
                    <div className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-lg border border-primary/20 group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined">terminal</span>
                    </div>
                    <h2 className="text-white text-xl font-bold tracking-tight font-display">
                        RS<span className="text-primary">.DEV</span>
                    </h2>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.href)}
                            className="text-gray-300 hover:text-primary text-sm font-medium transition-colors font-body bg-transparent border-none cursor-pointer"
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <a
                        href="/resume.html"
                        target="_blank"
                        className="hidden sm:flex h-9 px-4 items-center justify-center rounded-lg border border-primary/30 text-primary text-sm font-bold hover:bg-primary/10 transition-colors font-body shadow-neon-sm"
                    >
                        Resume
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-background-dark/95 backdrop-blur-xl md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link, index) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.href)}
                            className="text-3xl font-bold text-white hover:text-primary transition-colors font-display tracking-tight bg-transparent border-none cursor-pointer"
                            style={{
                                transitionDelay: `${index * 50}ms`,
                                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                                opacity: isMenuOpen ? 1 : 0,
                                transition: 'all 0.3s ease-out'
                            }}
                        >
                            {link.name}
                        </button>
                    ))}
                    <a
                        href="/resume.html"
                        target="_blank"
                        className="mt-8 px-8 py-3 rounded-full border border-primary/30 text-primary font-bold text-lg hover:bg-primary/10 transition-colors"
                    >
                        Get Resume
                    </a>

                    {/* Close Button specific to overlay */}
                    <button
                        className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="material-symbols-outlined text-3xl">close</span>
                    </button>

                    {/* Background decoration in menu */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
