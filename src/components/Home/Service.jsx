import React, { useState, useEffect } from 'react';
import {
    Smartphone,
    Monitor,
    Palette,
    Code,
    Globe,
    Search,
    Users,
    Layers,
    Eye
} from 'lucide-react';

const Service = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const services = [
        {
            icon: <Smartphone className="w-12 h-12" />,
            title: "App Design",
            description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur."
        },
        {
            icon: <Monitor className="w-12 h-12" />,
            title: "Web Design",
            description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur."
        },
        {
            icon: <Palette className="w-12 h-12" />,
            title: "UI/UX Design",
            description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur."
        },
        {
            icon: <Code className="w-12 h-12" />,
            title: "Development",
            description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur."
        },
        {
            icon: <Globe className="w-12 h-12" />,
            title: "Web Development",
            description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur."
        },
        {
            icon: <Search className="w-12 h-12" />,
            title: "SEO Optimization",
            description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur."
        }
    ];

    return (
        <section className="relative py-20 px-6 lg:px-20 bg-gray-900 overflow-hidden">
            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.002}px, ${(mousePosition.y - window.innerHeight / 2) * 0.002}px)`,
                    transition: 'transform 0.3s ease-out'
                }}
            />

            {/* Floating Accent Elements */}
            <div className="absolute top-20 left-10 w-16 h-16 border border-orange-500/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-12 h-12 bg-orange-500/10 rounded-lg rotate-45 animate-bounce" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Services
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Card Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                            {/* Icon */}
                            <div className="relative mb-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    {service.icon}
                                </div>
                                {/* Icon Glow Effect */}
                                <div className="absolute inset-0 bg-orange-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            {/* Corner Accents */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-4 left-4 w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300">
                        <span className="relative z-10 flex items-center justify-center">
                            View All Services
                            <Eye className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div>
            </div>

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

                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out;
                    animation-fill-mode: both;
                }
            `}</style>
        </section>
    );
};

export default Service;