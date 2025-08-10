import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-black/90 backdrop-blur-lg border-b border-yellow-400/20'
      : 'bg-transparent'
      }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">A</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-yellow-400">Axonn</span>
                <span className="block text-xs text-gray-400">TechDigiMind</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 hover:text-yellow-400 ${isScrolled ? 'text-gray-300' : 'text-white'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Links */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors duration-200 hover:text-yellow-400 hover:bg-yellow-400/10 ${isScrolled ? 'text-gray-400' : 'text-white/80'
                }`}
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors duration-200 hover:text-yellow-400 hover:bg-yellow-400/10 ${isScrolled ? 'text-gray-400' : 'text-white/80'
                }`}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className={`p-2 rounded-lg transition-colors duration-200 hover:text-yellow-400 hover:bg-yellow-400/10 ${isScrolled ? 'text-gray-400' : 'text-white/80'
                }`}
            >
              <Mail size={18} />
            </a>

            {/* CTA Button */}
            <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition-colors duration-200">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${isScrolled ? 'text-gray-300 hover:text-yellow-400' : 'text-white hover:text-yellow-400'
              }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-700 bg-black/95 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-3">
              {/* Mobile Navigation Links */}
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 rounded-lg font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-700">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="p-3 text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-4">
                <button
                  className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;