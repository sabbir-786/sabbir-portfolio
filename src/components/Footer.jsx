import React, { useState, useEffect, useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUp,
  Send,
  Heart,
  Code,
  Coffee,
  Zap,
  Star,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [waves, setWaves] = useState([]);
  const footerRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate animated waves
  useEffect(() => {
    const generateWaves = () => {
      const newWaves = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        delay: i * 0.3,
        duration: 3 + Math.random() * 2,
        amplitude: 20 + Math.random() * 30,
      }));
      setWaves(newWaves);
    };

    generateWaves();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: '#', color: 'hover:text-yellow-300' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#', color: 'hover:text-yellow-400' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#', color: 'hover:text-yellow-300' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#', color: 'hover:text-amber-400' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Web Development', href: '#' },
    { name: 'Mobile Apps', href: '#' },
    { name: 'UI/UX Design', href: '#' },
    { name: 'Consulting', href: '#' },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden"
    >
      {/* Animated Wave Background with Yellow Tints */}
      <div className="absolute inset-0 overflow-hidden">
        {waves.map((wave) => (
          <div
            key={wave.id}
            className="absolute bottom-0 left-0 w-full opacity-10"
            style={{
              height: '200px',
              background: `linear-gradient(45deg, rgba(251, 191, 36, 0.3), rgba(245, 158, 11, 0.3), rgba(217, 119, 6, 0.2))`,
              clipPath: `polygon(0 ${50 + Math.sin(wave.id) * 20}%, 100% ${30 + Math.cos(wave.id) * 25}%, 100% 100%, 0% 100%)`,
              animationDelay: `${wave.delay}s`,
              transform: `translateY(${wave.id * 10}px)`,
            }}
          />
        ))}
      </div>

      {/* Dynamic Grid Background with Yellow Accents */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at ${mousePosition.x * 0.1}% ${mousePosition.y * 0.1}%, rgba(251, 191, 36, 0.4) 2px, transparent 2px),
            linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '200px 200px, 40px 40px, 40px 40px',
        }}
      />

      {/* Floating Particles with Yellow Colors */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute w-1 h-1 rounded-full animate-float-random ${i % 3 === 0 ? 'bg-yellow-400/30' : i % 3 === 1 ? 'bg-amber-400/20' : 'bg-yellow-300/25'
              }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-amber-400/8 to-yellow-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">

        {/* Newsletter Section with Yellow Theme */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Stay Connected
              </span>
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Get the latest updates on my projects and tech insights
            </p>

            {/* Newsletter Form with Yellow Accents */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-grey-400 to-grey-500 rounded-full blur opacity-30"></div>
              <div className="relative flex bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-full overflow-hidden hover:border-yellow-400/50 transition-all duration-300">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
                <button className="group px-6 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 text-black font-semibold">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Section with Yellow Accents */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-400/30">
                  <Code className="w-6 h-6 text-black" />
                </div>
                <span className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                    DevPortfolio
                  </span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Crafting digital experiences with passion and precision.
                Let's build something amazing together.
              </p>

              {/* Contact Info with Yellow Hover Effects */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-yellow-300 transition-colors cursor-pointer group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">hello@example.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-yellow-300 transition-colors cursor-pointer group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-yellow-300 transition-colors group">
                  <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links with Yellow Theme */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <h4 className="text-lg font-semibold mb-6 text-yellow-300">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center space-x-2 text-gray-400 hover:text-yellow-300 transition-all duration-300"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-yellow-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services with Amber Theme */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="group flex items-center space-x-2 text-gray-400 hover:text-amber-300 transition-all duration-300"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Stats with Yellow Accents */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Connect</h4>

            {/* Social Links with Yellow Hover Effects */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`group relative p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-yellow-300/50 transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Mini Stats with Yellow Theme */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group text-center p-4 bg-gray-900/30 rounded-lg border border-gray-700/30 hover:border-yellow-400/50 transition-colors">
                <div className="flex items-center justify-center mb-2">
                  <Coffee className="w-5 h-5 text-yellow-400 group-hover:animate-bounce" />
                </div>
                <div className="text-xl font-bold text-white">500+</div>
                <div className="text-xs text-gray-400">Cups of Coffee</div>
              </div>
              <div className="group text-center p-4 bg-gray-900/30 rounded-lg border border-gray-700/30 hover:border-amber-400/50 transition-colors">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-amber-400 group-hover:animate-pulse" />
                </div>
                <div className="text-xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Yellow Accents */}
        <div className={`border-t border-gray-800 pt-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

            {/* Copyright with Yellow Heart */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2025 DevPortfolio. Made with</span>
              <Heart className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span>and</span>
              <Zap className="w-4 h-4 text-yellow-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>


          </div>
        </div>
      </div>

      {/* Decorative Elements with Yellow Colors */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-yellow-400/20 rounded-full animate-spin-slow opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 border-2 border-amber-400/30 rotate-45 animate-pulse opacity-30"></div>

      {/* Additional Yellow Accent Elements */}
      <div className="absolute top-1/2 left-5 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute bottom-1/4 right-5 w-3 h-3 bg-amber-400 rounded-full animate-pulse opacity-40"></div>

      <style jsx>{`
        @keyframes float-random {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-10px) translateX(5px) rotate(90deg);
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-20px) translateX(-5px) rotate(180deg);
            opacity: 1;
          }
          75% {
            transform: translateY(-10px) translateX(10px) rotate(270deg);
            opacity: 0.5;
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float-random {
          animation: float-random 8s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;