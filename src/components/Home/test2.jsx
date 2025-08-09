import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, Play, Sparkles, Star, Zap, Code, Palette, ExternalLink, ChevronRight } from 'lucide-react';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [sparkles, setSparkles] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const heroRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        setIsLoaded(true);
        
        const handleMouseMove = (e) => {
            const rect = heroRef.current?.getBoundingClientRect();
            if (rect) {
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setMousePosition({ x, y });

                // Create magical sparkles
                if (Math.random() < 0.1) {
                    const newSparkle = {
                        id: Date.now() + Math.random(),
                        x: e.clientX,
                        y: e.clientY,
                        size: Math.random() * 8 + 4,
                        life: 100
                    };
                    setSparkles(prev => [...prev.slice(-8), newSparkle]);
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        // Auto-remove sparkles
        const interval = setInterval(() => {
            setSparkles(prev => prev.map(sparkle => ({
                ...sparkle,
                life: sparkle.life - 5
            })).filter(sparkle => sparkle.life > 0));
        }, 50);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        };
    }, []);

    return (
        <section 
            ref={heroRef}
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-black flex items-center justify-center"
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <div 
                    className="absolute w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-amber-500/10 rounded-full blur-3xl animate-pulse opacity-60"
                    style={{
                        top: '20%',
                        right: '10%',
                        transform: `translate(${(mousePosition.x - 50) * 0.5}px, ${(mousePosition.y - 50) * 0.3}px)`
                    }}
                />
                <div 
                    className="absolute w-80 h-80 bg-gradient-to-r from-blue-400/15 to-purple-500/10 rounded-full blur-3xl animate-pulse opacity-50"
                    style={{
                        bottom: '20%',
                        left: '5%',
                        animationDelay: '2s',
                        transform: `translate(${(mousePosition.x - 50) * -0.3}px, ${(mousePosition.y - 50) * 0.4}px)`
                    }}
                />

                {/* Grid Pattern */}
                <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                        transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
                    }}
                />

                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-gradient-to-r from-transparent via-gray-900/50 to-transparent" />
            </div>

            {/* Floating Sparkles */}
            <div className="fixed inset-0 pointer-events-none z-30">
                {sparkles.map((sparkle) => (
                    <div
                        key={sparkle.id}
                        className="absolute"
                        style={{
                            left: sparkle.x - sparkle.size/2,
                            top: sparkle.y - sparkle.size/2,
                            opacity: sparkle.life / 100
                        }}
                    >
                        <div 
                            className="bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full animate-ping"
                            style={{ width: sparkle.size, height: sparkle.size }}
                        />
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-20 container mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Status Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-400/20 rounded-full backdrop-blur-sm transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            <span className="text-emerald-300 text-sm font-medium">Available for Projects</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className={`text-6xl md:text-7xl lg:text-8xl font-black leading-none transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <span className="block text-white hover:text-gray-200 transition-colors duration-300 cursor-default">
                                    Hello,
                                </span>
                                <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 transition-all duration-300">
                                    I'm Sabbir
                                </span>
                            </h1>
                            
                            <div className={`space-y-2 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <p className="text-2xl md:text-3xl text-gray-300 font-light">
                                    Full-Stack Developer
                                </p>
                                <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                                    I create exceptional digital experiences through innovative design and cutting-edge technology. 
                                    Passionate about building products that make a difference.
                                </p>
                            </div>
                        </div>

                        {/* Skills Pills */}
                        <div className={`flex flex-wrap gap-3 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            {[
                                { name: 'React', color: 'from-cyan-500 to-blue-500', icon: '⚛️' },
                                { name: 'Node.js', color: 'from-green-500 to-emerald-500', icon: '🚀' },
                                { name: 'TypeScript', color: 'from-blue-500 to-indigo-500', icon: '💎' },
                                { name: 'UI/UX', color: 'from-purple-500 to-pink-500', icon: '🎨' }
                            ].map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className={`group px-4 py-2 bg-gradient-to-r ${skill.color} bg-opacity-10 border border-white/10 rounded-full backdrop-blur-sm hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default`}
                                >
                                    <span className="flex items-center gap-2 text-white text-sm font-medium">
                                        <span>{skill.icon}</span>
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Let's Collaborate
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                {/* Shine effect */}
                                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                            </button>

                            <button className="group px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-2xl hover:border-yellow-400 hover:bg-yellow-400/5 transition-all duration-300 hover:scale-105">
                                <span className="flex items-center justify-center gap-2">
                                    Download CV
                                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                                </span>
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className={`flex gap-4 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            {[
                                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                                { icon: Mail, href: 'mailto:sabbir@example.com', label: 'Email' }
                            ].map((social, index) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-yellow-400 hover:bg-yellow-400/5 transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div 
                            className={`relative transition-all duration-1500 delay-300 ${isLoaded ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-3'}`}
                        >
                            {/* Floating rings */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`absolute border border-yellow-400/${30 - i * 8} rounded-full animate-spin`}
                                        style={{
                                            width: `${380 + i * 60}px`,
                                            height: `${380 + i * 60}px`,
                                            animationDuration: `${20 + i * 15}s`,
                                            animationDirection: i % 2 ? 'reverse' : 'normal'
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Main image container */}
                            <div className="relative z-10 group">
                                {/* Glow effect */}
                                <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400/30 via-orange-500/20 to-red-500/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                                
                                {/* Image */}
                                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 p-1">
                                    <div className="relative overflow-hidden rounded-3xl">
                                        {/* Placeholder for profile image */}
                                        <div className="w-80 h-96 md:w-96 md:h-[28rem] bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                                            {/* Replace this div with your actual image */}
                                            <div className="text-center">
                                                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                                                    <Star className="w-10 h-10 text-white" />
                                                </div>
                                                <p className="text-gray-300 text-lg font-medium">Your Photo</p>
                                                <p className="text-gray-500 text-sm">Add profile.png here</p>
                                            </div>
                                            
                                            {/* Overlay effects */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            
                                            {/* Scanning animation */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent animate-scan" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg shadow-yellow-400/50" />
                                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse shadow-lg shadow-purple-400/50" />
                                <div className="absolute top-1/4 -left-8 w-4 h-4 border-2 border-cyan-400 rotate-45 animate-spin shadow-lg shadow-cyan-400/50" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
                            <div className="w-1 h-3 bg-yellow-400 rounded-full animate-bounce" />
                        </div>
                        <span className="text-xs font-medium">Scroll</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                
                .animate-scan {
                    animation: scan 2s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero;