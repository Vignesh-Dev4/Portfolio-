import React, { useState, useEffect } from 'react';
import { generateResumePDF } from '../../utils/generateResume';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg shadow-dark-950/50' : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => scrollToSection(e, '#home')}
                        className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
                    >
                        Portfolio
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="px-4 py-2 text-dark-300 hover:text-dark-50 rounded-lg hover:bg-white/5 transition-all duration-300 animated-underline"
                            >
                                {item.name}
                            </a>
                        ))}
                        <button
                            onClick={generateResumePDF}
                            className="ml-4 px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary-500/30"
                        >
                            Resume
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg glass glass-hover"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-dark-50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-dark-900/95 backdrop-blur-lg border-t border-dark-800 shadow-xl z-50 animate-fade-in-down">
                        <div className="flex flex-col space-y-2 px-4 py-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        scrollToSection(e, item.href);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="px-4 py-3 text-dark-300 hover:text-dark-50 rounded-lg hover:bg-white/5 transition-all duration-300"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    generateResumePDF();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 text-center w-full"
                            >
                                Download Resume
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
