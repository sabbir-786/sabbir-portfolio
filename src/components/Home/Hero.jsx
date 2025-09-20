import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Download, Play, Sparkles } from 'lucide-react';
import profile from '../../assets/profile.png';

const Hero = () => {
    // rAF-throttled pointer position (no excessive re-renders)
    const pointerRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Lightweight sparkles buffer using refs + minimal state flips
    const sparkleRef = useRef([]);
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const onMove = (e) => {
            pointerRef.current.x = e.clientX;
            pointerRef.current.y = e.clientY;
            if (rafRef.current == null) {
                rafRef.current = requestAnimationFrame(() => {
                    setMousePosition({ x: pointerRef.current.x, y: pointerRef.current.y });
                    // Sparkle: push one item and prune
                    const s = {
                        id: Date.now() + Math.random(),
                        x: pointerRef.current.x,
                        y: pointerRef.current.y,
                        size: Math.random() * 8 + 4,
                        rotation: Math.random() * 360,
                    };
                    sparkleRef.current = [...sparkleRef.current.slice(-18), s];
                    setSparkles(sparkleRef.current);
                    // schedule cleanup
                    setTimeout(() => {
                        sparkleRef.current = sparkleRef.current.filter((sp) => sp.id !== s.id);
                        setSparkles(sparkleRef.current);
                    }, 900);
                    rafRef.current = null;
                });
            }
        };

        window.addEventListener('pointermove', onMove, { passive: true });
        return () => {
            window.removeEventListener('pointermove', onMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const w = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const h = typeof window !== 'undefined' ? window.innerHeight : 1080;
    const gridShiftX = (mousePosition.x - w / 2) * 0.01;
    const gridShiftY = (mousePosition.y - h / 2) * 0.01;
    const gridShiftX2 = (mousePosition.x - w / 2) * -0.005;
    const gridShiftY2 = (mousePosition.y - h / 2) * -0.005;

    const gridSize = 50;
    const gridOpacity = 0.1;

    return (
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
            {/* Background glows */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-sky-900/5" />
                <div className="absolute top-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-400/10 to-sky-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-sky-400/8 to-blue-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Sparkles (pointer) */}
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
                            className="text-blue-400 animate-pulse"
                            style={{ filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.9))' }}
                        />
                    </div>
                ))}
            </div>

            {/* Grid pattern parallax */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
                linear-gradient(rgba(255,255,255,${gridOpacity}) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,${gridOpacity}) 1px, transparent 1px)
            `,
                    backgroundSize: `${gridSize}px ${gridSize}px`,
                    transform: `translate(${gridShiftX}px, ${gridShiftY}px)`,
                    transition: 'transform 0.12s ease-out',
                }}
            />
            <div
                className="absolute inset-0 opacity-15 animate-pulse"
                style={{
                    backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
                    backgroundSize: `${gridSize * 2}px ${gridSize * 2}px`,
                    transform: `translate(${gridShiftX2}px, ${gridShiftY2}px)`,
                    transition: 'transform 0.2s ease-out',
                }}
            />

            {/* Dark gradient top overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Content container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto mt-14 sm:mt-20 px-4 sm:px-6 lg:px-8">
                {/* One layout that adapts: stack on mobile, 2-col on lg */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Text column */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up">
                            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-sky-500 bg-clip-text text-transparent">
                                I am
                            </span>
                            <br />
                            <span className="text-white relative">
                                Ashwani Kumar
                                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent blur-xl -z-10" />
                            </span>
                        </h1>

                        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed animate-fade-in-up max-w-2xl mx-auto lg:mx-0">
                            I craft beautiful digital experiences that combine
                            <span className="text-blue-400 font-semibold"> innovative design </span>
                            with
                            <span className="text-sky-400 font-semibold"> cutting-edge technology</span>
                        </p>

                        <div className="mt-4 sm:mt-6 text-sm sm:text-base animate-fade-in-up">
                            <span className="inline-block text-blue-300">Specializing in: </span>
                            <span className="text-white font-mono">
                                <span className="animate-pulse text-blue-400">|</span>
                                <span className="animate-typing"> React • Node.js • UI/UX • Mobile Apps</span>
                            </span>
                        </div>

                        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
                            <button className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-400 to-sky-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                                <span className="relative z-10 flex items-center justify-center">
                                    Hire Me
                                    <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 -skew-x-12 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                            </button>

                            <button className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-blue-400/40 text-white font-semibold rounded-full hover:bg-blue-400/10 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-400/20 transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                                <span className="flex items-center justify-center relative z-10">
                                    Download CV
                                    <Download className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-sky-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </div>
                    </div>

                    {/* Image column */}
                    <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-r from-blue-500/15 via-sky-500/15 to-cyan-400/10 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-br from-blue-400/10 to-sky-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
                            <div className="absolute w-72 h-72 md:w-[26rem] md:h-[26rem] border border-blue-400/10 rounded-full animate-spin-slow" />
                            <div className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] border border-sky-400/8 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
                        </div>

                        <div className="relative z-10 group">
                            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl transform group-hover:scale-105 transition-all duration-500 ease-out">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 rounded-2xl md:rounded-3xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-2xl md:rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                                <div className="relative m-1 overflow-hidden rounded-2xl md:rounded-3xl">
                                    <img
                                        src={profile}
                                        alt="Profile"
                                        className="w-72 h-80 sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] object-cover filter brightness-110 contrast-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-blue-400/5" />
                                </div>
                            </div>
                            {/* Trim extra accents on very small screens */}
                            <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-sky-500 rounded-full animate-bounce shadow-lg shadow-blue-400/50" style={{ animationDelay: '0.5s' }} />
                            <div className="absolute -bottom-5 -left-5 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-sky-400 to-cyan-500 rounded-full animate-pulse shadow-lg shadow-sky-400/50" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400/80 mx-auto drop-shadow-lg" />
                <p className="text-xs sm:text-sm text-blue-300/70 mt-2 font-medium">Scroll to explore</p>
            </div>

            {/* Minimal extra accents hidden on xs */}
            <div className="absolute top-1/4 left-6 sm:left-10 w-14 h-14 sm:w-20 sm:h-20 border border-blue-400/20 animate-spin-slow hidden sm:block" />
            <div className="absolute bottom-1/4 right-6 sm:right-10 w-10 h-10 sm:w-16 sm:h-16 border border-sky-400/25 animate-pulse hidden sm:block" />
            <div className="absolute top-1/2 right-8 sm:right-20 w-8 h-8 sm:w-12 sm:h-12 border border-blue-400/15 rotate-45 animate-bounce hidden md:block" />
            <div className="absolute top-20 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping hidden sm:block" />
            <div className="absolute bottom-24 sm:bottom-32 left-1/4 w-3 h-3 bg-sky-400 rounded-full animate-pulse hidden sm:block" />

            <style jsx>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes typing { from { width: 0; } to { width: 100%; } }
                @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes sparkle {
                    0% { opacity: 1; transform: scale(0) rotate(0deg); }
                    50% { opacity: 1; transform: scale(1) rotate(180deg); }
                    100% { opacity: 0; transform: scale(0.5) rotate(360deg); }
                }
                .animate-fade-in { animation: fade-in 1s ease-out; }
                .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
                .animate-typing { overflow: hidden; white-space: nowrap; animation: typing 3s steps(40, end) infinite; }
                .animate-spin-slow { animation: spin-slow 20s linear infinite; }
                .animate-sparkle { animation: sparkle 0.9s ease-out forwards; }
            `}</style>
        </section>
    );
};

export default Hero;
