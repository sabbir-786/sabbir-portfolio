import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Eye, Code, Star, ArrowRight, LucideProjector, Sparkles } from 'lucide-react';

const Project = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [sparkles, setSparkles] = useState([]);
    const sectionRef = useRef(null);

    const filterTabs = [
        { id: 'All', label: 'All Projects', count: 9 },
        { id: 'UI', label: 'UI/UX', count: 2 },
        { id: 'Website Design', label: 'Web Design', count: 2 },
        { id: 'App Mobile Design', label: 'Mobile', count: 2 },
        { id: 'App Desktop', label: 'Desktop', count: 2 },
        { id: 'Branding', label: 'Branding', count: 1 }
    ];

    const projects = [
        {
            id: 1,
            title: 'Neural Dashboard',
            category: 'UI',
            description: 'AI-powered analytics dashboard with real-time data visualization and machine learning insights.',
            tech: ['React', 'TensorFlow.js', 'D3.js', 'WebGL'],
            link: 'https://neural-dashboard.com',
            github: 'https://github.com/neural-dashboard',
            featured: true,
            color: 'from-yellow-400 to-amber-500',
            status: 'Live'
        },
        {
            id: 2,
            title: 'Quantum Commerce',
            category: 'Website Design',
            description: 'Next-gen e-commerce platform with AR product visualization and blockchain payments.',
            tech: ['Next.js', 'Three.js', 'Stripe', 'Web3'],
            link: 'https://quantum-commerce.com',
            github: 'https://github.com/quantum-commerce',
            featured: true,
            color: 'from-amber-400 to-orange-500',
            status: 'Beta'
        },
        {
            id: 3,
            title: 'Zenith Bank',
            category: 'App Mobile Design',
            description: 'Revolutionary mobile banking app with biometric security and crypto integration.',
            tech: ['React Native', 'Web3', 'Biometrics', 'GraphQL'],
            link: 'https://zenith-bank.app',
            github: 'https://github.com/zenith-bank',
            featured: false,
            color: 'from-yellow-500 to-amber-400',
            status: 'Live'
        },
        {
            id: 4,
            title: 'Photon Editor',
            category: 'App Desktop',
            description: 'Professional photo editor with AI-powered enhancements and cloud synchronization.',
            tech: ['Electron', 'WebAssembly', 'OpenCV', 'AWS'],
            link: 'https://photon-editor.com',
            github: 'https://github.com/photon-editor',
            featured: false,
            color: 'from-orange-500 to-yellow-500',
            status: 'Development'
        },
        {
            id: 5,
            title: 'Apex Brand Studio',
            category: 'Branding',
            description: 'Complete brand identity system with AI-generated assets and style guides.',
            tech: ['Figma', 'AI Tools', 'Brand Guidelines', 'Asset Library'],
            link: 'https://apex-brand.studio',
            github: 'https://github.com/apex-brand',
            featured: true,
            color: 'from-amber-500 to-yellow-600',
            status: 'Live'
        },
        {
            id: 6,
            title: 'Cosmos Portfolio',
            category: 'UI',
            description: '3D interactive portfolio with particle systems and immersive navigation.',
            tech: ['Three.js', 'React Fiber', 'GSAP', 'Shaders'],
            link: 'https://cosmos-portfolio.com',
            github: 'https://github.com/cosmos-portfolio',
            featured: false,
            color: 'from-yellow-600 to-orange-400',
            status: 'Live'
        },
        {
            id: 7,
            title: 'Velocity SaaS',
            category: 'Website Design',
            description: 'High-performance SaaS platform with micro-interactions and seamless UX.',
            tech: ['Vue.js', 'Nuxt', 'Supabase', 'Tailwind'],
            link: 'https://velocity-saas.com',
            github: 'https://github.com/velocity-saas',
            featured: false,
            color: 'from-amber-600 to-yellow-500',
            status: 'Live'
        },
        {
            id: 8,
            title: 'FitSync Pro',
            category: 'App Mobile Design',
            description: 'AI-powered fitness companion with personalized workouts and nutrition tracking.',
            tech: ['Flutter', 'TensorFlow', 'HealthKit', 'Firebase'],
            link: 'https://fitsync-pro.app',
            github: 'https://github.com/fitsync-pro',
            featured: true,
            color: 'from-yellow-500 to-orange-500',
            status: 'Beta'
        },
        {
            id: 9,
            title: 'Render Studio',
            category: 'App Desktop',
            description: 'Professional 3D rendering suite with GPU acceleration and cloud rendering.',
            tech: ['Electron', 'WebGL', 'CUDA', 'Cloud Computing'],
            link: 'https://render-studio.com',
            github: 'https://github.com/render-studio',
            featured: false,
            color: 'from-orange-400 to-amber-500',
            status: 'Development'
        }
    ];

    const filteredProjects = projects.filter(project =>
        activeFilter === 'All' || project.category === activeFilter
    );

    // Mouse movement for sparkle effects
    useEffect(() => {
        const handleMouseMove = (e) => {
            const newPosition = {
                x: e.clientX,
                y: e.clientY
            };

            setMousePosition(newPosition);

            // Create sparkle effect with yellow/amber colors
            if (Math.random() > 0.8) { // Reduce frequency
                const newSparkle = {
                    id: Date.now() + Math.random(),
                    x: newPosition.x,
                    y: newPosition.y,
                    size: Math.random() * 6 + 3,
                    opacity: 1,
                    rotation: Math.random() * 360
                };

                setSparkles(prev => [...prev.slice(-10), newSparkle]);

                setTimeout(() => {
                    setSparkles(prev => prev.filter(sparkle => sparkle.id !== newSparkle.id));
                }, 1000);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const ProjectCard = ({ project }) => {
        return (
            <div className="group relative animate-fadeInUp">
                <div className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden group-hover:border-yellow-500/50 hover:bg-yellow-400/5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10">

                    {/* Animated Border with yellow gradient */}
                    <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-r ${project.color} p-[1px] transition-opacity duration-300`}>
                        <div className="bg-gray-900/90 rounded-3xl w-full h-full" />
                    </div>

                    <div className="relative z-10">
                        {/* Status Badge */}
                        <div className="absolute top-4 right-4 z-20">
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${project.status === 'Live' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                                project.status === 'Beta' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                                    'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                }`}>
                                {project.status}
                            </div>
                        </div>

                        {/* Featured Badge with header styling */}
                        {project.featured && (
                            <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs px-3 py-1 rounded-full font-bold flex items-center shadow-lg">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                            </div>
                        )}

                        {/* Project Visual */}
                        <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
                            <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                            <div className="absolute inset-0 bg-gray-900/40" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className={`w-20 h-20 bg-gradient-to-br ${project.color} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                                        <Code className="w-10 h-10 text-white relative z-10" />
                                        {/* Shimmer effect */}
                                        <div className="absolute inset-0 -skew-x-12 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700"></div>
                                    </div>
                                    <h4 className="text-white text-lg font-bold">{project.title}</h4>
                                    <p className="text-yellow-400/80 text-sm mt-1 font-medium">{project.category}</p>
                                </div>
                            </div>

                            {/* Hover Overlay with yellow theme */}
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex space-x-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200 relative overflow-hidden group/btn`}
                                    >
                                        <ExternalLink className="w-6 h-6 relative z-10" />
                                        <div className="absolute inset-0 -skew-x-12 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:translate-x-full transition-transform duration-500"></div>
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 bg-gray-800 border border-yellow-400/30 rounded-2xl flex items-center justify-center text-yellow-400 hover:bg-yellow-400/10 hover:scale-110 transition-all duration-200"
                                    >
                                        <Github className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-6 space-y-4">
                            <div>
                                <h3 className={`text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:${project.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-sm">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={tech}
                                        className="text-xs bg-gray-800/80 text-gray-300 rounded-xl px-3 py-2 font-mono border border-gray-700/50 hover:border-yellow-400/50 hover:bg-yellow-400/5 hover:text-yellow-300 hover:scale-105 transition-all duration-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section ref={sectionRef} className="relative min-h-screen bg-black overflow-hidden">
            {/* Enhanced Background with Header Style */}
            <div className="absolute inset-0">
                {/* Sparkle Effect */}
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
                                    filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.8))'
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Header-style radial gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]" />

                {/* Grid pattern with yellow tint */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(251, 191, 36, 0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(251, 191, 36, 0.2) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                        transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
                        transition: 'transform 0.1s ease-out'
                    }}
                />

                {/* Additional floating elements */}
                <div className="absolute top-1/4 left-10 w-16 h-16 border border-yellow-400/20 animate-spin-slow rounded-xl"></div>
                <div className="absolute bottom-1/3 right-20 w-12 h-12 border border-amber-400/15 animate-pulse rotate-45"></div>

                {/* Header-style gradient border at top */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"></div>
            </div>

            <div className="relative z-10 py-20 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    {/* Header with Header styling */}
                    <div
                        className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        {/* Header-style section badge */}
                        <div className="inline-flex items-center gap-3 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-2 mb-8 hover:bg-yellow-400/20 transition-all duration-300">
                            <LucideProjector className="w-5 h-5 text-yellow-400 animate-pulse" />
                            <span className="text-sm font-medium bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">Featured Projects</span>
                        </div>

                        {/* Header-style gradient line */}
                        <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto mb-8 shadow-lg shadow-yellow-500/25" />

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent mb-6">
                            My Projects
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Discover my latest work and creative solutions
                        </p>
                    </div>

                    {/* Filter Tabs with Header styling */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {filterTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveFilter(tab.id)}
                                className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${activeFilter === tab.id
                                    ? 'text-black shadow-lg shadow-yellow-500/25'
                                    : 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10'
                                    }`}
                            >
                                {activeFilter === tab.id && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl" />
                                )}
                                <span className="relative z-10 flex items-center">
                                    {tab.label}
                                    <span className={`ml-2 text-xs px-2 py-1 rounded-full ${activeFilter === tab.id
                                        ? 'bg-black/20 text-black'
                                        : 'bg-gray-800 text-gray-400'
                                        }`}>
                                        {tab.count}
                                    </span>
                                </span>
                                {/* Shimmer effect for active tab */}
                                {activeFilter === tab.id && (
                                    <div className="absolute inset-0 -skew-x-12 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="animate-fadeIn"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>

                    {/* View More Button with Header styling */}
                    <div className="text-center mt-16">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300">
                            <span className="relative z-10 flex items-center">
                                View All Projects
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                            </span>
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 -skew-x-12 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700"></div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
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
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }

                .animate-sparkle {
                    animation: sparkle 1s ease-out forwards;
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out forwards;
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default Project;