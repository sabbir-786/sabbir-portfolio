import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, Play, Sparkles, Star } from 'lucide-react';
import profile from '../../assets/profile.png'

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newPosition = {
                x: e.clientX,
                y: e.clientY
            };

            setMousePosition(newPosition);

            // Create sparkle effect
            const newSparkle = {
                id: Date.now() + Math.random(),
                x: newPosition.x,
                y: newPosition.y,
                size: Math.random() * 8 + 4,
                opacity: 1,
                rotation: Math.random() * 360
            };

            setSparkles(prev => [...prev.slice(-20), newSparkle]);

            // Remove sparkle after animation
            setTimeout(() => {
                setSparkles(prev => prev.filter(sparkle => sparkle.id !== newSparkle.id));
            }, 1000);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Generate grid pattern
    const gridSize = 50;
    const gridOpacity = 0.1;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
            {/* Enhanced Background with Yellow Accents */}
            <div className="absolute inset-0">
                {/* Primary gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-transparent to-amber-900/5"></div>

                {/* Animated yellow glow spots */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-amber-400/8 to-yellow-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Sparkle Effect on Mouse Move */}
            <div className="fixed inset-0 pointer-events-none z-20">
                {sparkles.map((sparkle) => (
                    <div
                        key={sparkle.id}
                        className="absolute animate-sparkle"
                        style={{
                            left: sparkle.x - 6,
                            top: sparkle.y - 6,
                            transform: `rotate(${sparkle.rotation}deg)`,
                        }}
                    >
                        <Sparkles
                            size={sparkle.size}
                            className="text-yellow-400 animate-pulse"
                            style={{
                                filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.9))'
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Grid Line Pattern Background */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, ${gridOpacity}) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, ${gridOpacity}) 1px, transparent 1px)
                `,
                    backgroundSize: `${gridSize}px ${gridSize}px`,
                    transform: `translate(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1920) / 2) * 0.01}px, ${(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 1080) / 2) * 0.01}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            />

            {/* Enhanced Animated Grid Overlay with Yellow Tint */}
            <div
                className="absolute inset-0 opacity-15 animate-pulse"
                style={{
                    backgroundImage: `
                    linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
                `,
                    backgroundSize: `${gridSize * 2}px ${gridSize * 2}px`,
                    transform: `translate(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1920) / 2) * -0.005}px, ${(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 1080) / 2) * -0.005}px)`,
                    transition: 'transform 0.2s ease-out'
                }}
            />

            {/* Enhanced Floating Grid Squares with Yellow Accents */}
            <div className="absolute inset-0">
                {Array.from({ length: 12 }, (_, i) => (
                    <div
                        key={`grid-square-${i}`}
                        className={`absolute border animate-pulse ${i % 3 === 0 ? 'border-yellow-400/20' : 'border-white/10'
                            }`}
                        style={{
                            width: `${gridSize * (1.5 + Math.random())}px`,
                            height: `${gridSize * (1.5 + Math.random())}px`,
                            left: `${Math.random() * 90}%`,
                            top: `${Math.random() * 90}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 3}s`,
                            transform: `rotate(${Math.random() * 45}deg)`
                        }}
                    />
                ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            {/* Content Container - Responsive Layout */}
            <div className="relative z-10 w-full max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
                {/* Mobile/Tablet Layout (Profile on top, content below) */}
                <div className="flex flex-col lg:hidden items-center text-center space-y-8">

                    {/* Profile Image - Mobile First - FIXED */}
                    <div className="relative flex justify-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        {/* Enhanced Glowing Background Elements */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Main glow effect with yellow accents */}
                            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-yellow-500/15 via-amber-500/15 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>

                            {/* Secondary glow */}
                            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-yellow-400/10 to-amber-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                            {/* Enhanced Accent rings */}
                            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 border border-yellow-400/10 rounded-full animate-spin-slow"></div>
                            <div className="absolute w-80 h-80 sm:w-[26rem] sm:h-[26rem] border border-amber-400/8 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
                        </div>

                        {/* Enhanced Profile Image Container */}
                        <div className="relative z-10 group">
                            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl transform group-hover:scale-105 transition-all duration-500 ease-out">
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 rounded-2xl sm:rounded-3xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 rounded-2xl sm:rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>

                                {/* Image - FIXED: Now using actual profile image */}
                                <div className="relative m-1 overflow-hidden rounded-2xl sm:rounded-3xl">
                                    <img
                                        src={profile}
                                        alt="Sabbir Ansari - Professional Profile"
                                        className="w-64 h-80 sm:w-80 sm:h-96 object-cover filter brightness-110 contrast-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-yellow-400/5"></div>
                                </div>
                            </div>

                            {/* Enhanced floating accent elements */}
                            <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-bounce shadow-lg shadow-yellow-400/50" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute -bottom-6 -left-6 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse shadow-lg shadow-amber-400/50"></div>
                            <div className="absolute top-1/4 -left-6 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 border-2 border-yellow-400/40 rotate-45 animate-spin-slow"></div>
                            <div className="absolute top-1/3 -right-8 sm:-right-10 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* Text Content - Mobile */}
                    <div className="space-y-6">
                        {/* Enhanced Main Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-fade-in-up leading-tight" style={{ animationDelay: '0.2s' }}>
                            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-3xl sm:text-4xl text-transparent animate-pulse">
                                I am
                            </span>
                            <br />
                            <span className="text-white relative">
                                Sabbir Ansari
                                {/* Subtle glow effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent blur-xl -z-10"></span>
                            </span>
                        </h1>

                        {/* Enhanced Subtitle with Yellow Accents */}
                        <p className="text-base sm:text-lg text-gray-300 animate-fade-in-up leading-relaxed max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
                            I craft beautiful digital experiences that combine
                            <span className="text-yellow-400 font-semibold"> innovative design </span>
                            with
                            <span className="text-amber-400 font-semibold"> cutting-edge technology</span>
                        </p>

                        {/* Enhanced Typing Animation */}
                        <div className="text-sm sm:text-base animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <span className="inline-block text-yellow-200">Specializing in: </span>
                            <span className="text-white font-mono">
                                <span className="animate-pulse text-yellow-400">|</span>
                                <span className="animate-typing"> React • Node.js • UI/UX • Mobile Apps</span>
                            </span>
                        </div>

                        {/* Enhanced CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                            <button className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-yellow-500/30 transform hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto">
                                <span className="relative z-10 flex items-center justify-center">
                                    Hire Me
                                    <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                                {/* Animated gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Shimmer effect */}
                                <div className="absolute inset-0 -skew-x-12 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700"></div>
                            </button>

                            <button className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-yellow-400/40 text-white font-semibold rounded-full hover:bg-yellow-400/10 hover:border-yellow-400/60 hover:shadow-lg hover:shadow-yellow-400/20 transform hover:scale-105 transition-all duration-300 relative overflow-hidden w-full sm:w-auto">
                                <span className="flex items-center justify-center relative z-10">
                                    Download CV
                                    <Download className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                                </span>

                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>

                        {/* Enhanced Social Links */}
                        <div className="flex items-center justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <div className="flex items-center space-x-3">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-amber-400/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-transparent hover:border-yellow-400/30"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-amber-400/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-transparent hover:border-yellow-400/30"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="mailto:your.email@example.com"
                                    className="p-3 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-amber-400/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-transparent hover:border-yellow-400/30"
                                >
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout (Original two-column) */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column - Text Content */}
                    <div className="text-left lg:pr-8">
                        {/* Enhanced Main Heading */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up leading-tight">
                            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-4xl md:text-5xl text-transparent animate-pulse">
                                I am
                            </span>
                            <br />
                            <span className="text-white relative">
                                Ashwani Kumar
                                {/* Subtle glow effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent blur-xl -z-10"></span>
                            </span>
                        </h1>

                        {/* Enhanced Subtitle with Yellow Accents */}
                        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up max-w-2xl" style={{ animationDelay: '0.2s' }}>
                            I craft beautiful digital experiences that combine
                            <span className="text-yellow-400 font-semibold"> innovative design </span>
                            with
                            <span className="text-amber-400 font-semibold"> cutting-edge technology</span>
                        </p>

                        {/* Enhanced Typing Animation */}
                        <div className="text-base mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <span className="inline-block text-yellow-200">Specializing in: </span>
                            <span className="text-white font-mono">
                                <span className="animate-pulse text-yellow-400">|</span>
                                <span className="animate-typing"> React • Node.js • UI/UX • Mobile Apps</span>
                            </span>
                        </div>

                        {/* Enhanced CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-start gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-yellow-500/30 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                                <span className="relative z-10 flex items-center">
                                    Hire Me
                                    <Play className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                                {/* Animated gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Shimmer effect */}
                                <div className="absolute inset-0 -skew-x-12 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700"></div>
                            </button>

                            <button className="group px-8 py-4 border-2 border-yellow-400/40 text-white font-semibold rounded-full hover:bg-yellow-400/10 hover:border-yellow-400/60 hover:shadow-lg hover:shadow-yellow-400/20 transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                                <span className="flex items-center relative z-10">
                                    Download CV
                                    <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                                </span>

                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>

                        {/* Enhanced Social Links */}
                        <div className="flex items-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                            <div className="flex items-center space-x-3">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-amber-400/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-transparent hover:border-yellow-400/30"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-amber-400/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-transparent hover:border-yellow-400/30"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="mailto:your.email@example.com"
                                    className="p-3 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-amber-400/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-transparent hover:border-yellow-400/30"
                                >
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Enhanced Profile Image */}
                    <div className="relative flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        {/* Enhanced Glowing Background Elements */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Main glow effect with yellow accents */}
                            <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-gradient-to-r from-yellow-500/15 via-amber-500/15 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>

                            {/* Secondary glow */}
                            <div className="absolute w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-yellow-400/10 to-amber-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                            {/* Enhanced Accent rings */}
                            <div className="absolute w-96 h-96 md:w-[28rem] md:h-[28rem] border border-yellow-400/10 rounded-full animate-spin-slow"></div>
                            <div className="absolute w-[26rem] h-[26rem] md:w-[30rem] md:h-[30rem] border border-amber-400/8 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
                        </div>

                        {/* Enhanced Profile Image Container */}
                        <div className="relative z-10 group mb-25">
                            <div className="relative overflow-hidden rounded-3xl md:rounded-[2rem] transform group-hover:scale-105 transition-all duration-500 ease-out">
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 rounded-3xl md:rounded-[2rem] blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 rounded-3xl md:rounded-[2rem] blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>

                                {/* Image */}
                                <div className="relative m-1 overflow-hidden rounded-3xl md:rounded-[2rem]">
                                    <img
                                        src={profile}
                                        alt="Sabbir Ansari - Professional Profile"
                                        className="w-80 h-96 md:w-96 md:h-[28rem] object-cover filter brightness-110 contrast-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-yellow-400/5"></div>
                                </div>
                            </div>

                            {/* Enhanced floating accent elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-bounce shadow-lg shadow-yellow-400/50" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse shadow-lg shadow-amber-400/50"></div>
                            <div className="absolute top-1/4 -left-8 w-4 h-4 border-2 border-yellow-400/40 rotate-45 animate-spin-slow"></div>
                            <div className="absolute top-1/3 -right-10 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ArrowDown className="w-6 h-6 text-yellow-400/80 mx-auto filter drop-shadow-lg" />
                <p className="text-sm text-yellow-300/70 mt-2 font-medium">Scroll to explore</p>
            </div>

            {/* Enhanced Floating Elements with Yellow Accents */}
            <div className="absolute top-1/4 left-10 w-20 h-20 border border-yellow-400/20 animate-spin-slow"></div>
            <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-amber-400/25 animate-pulse"></div>
            <div className="absolute top-1/2 right-20 w-12 h-12 border border-yellow-400/15 rotate-45 animate-bounce"></div>

            {/* Additional decorative elements */}
            <div className="absolute top-20 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes fade-in-up {
                    from { 
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes typing {
                    from { width: 0; }
                    to { width: 100%; }
                }

                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes sparkle {
                    0% { 
                        opacity: 1;
                        transform: scale(0) rotate(0deg);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1) rotate(180deg);
                    }
                    100% { 
                        opacity: 0;
                        transform: scale(0.5) rotate(360deg);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out;
                }

                .animate-typing {
                    overflow: hidden;
                    white-space: nowrap;
                    animation: typing 3s steps(40, end) infinite;
                }

                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }

                .animate-sparkle {
                    animation: sparkle 1s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default Hero;