import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Folder, Lightbulb } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => setIsVisible(true), []);

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A modern e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "#",
            live: "#"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            tech: ["React", "Firebase", "Material-UI", "Socket.io"],
            github: "#",
            live: "#"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
            tech: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
            github: "#",
            live: "#"
        }
    ];

    return (
        <div className="py-16 px-4 md:px-8 bg-black relative">
            {/* Grid BG */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
          `,
                    backgroundSize: '44px 44px',
                    zIndex: 0
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-8">
                        <Folder className="w-4 h-4 mr-2" />
                        Featured Work
                    </div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Here are some of my recent projects that showcase my skills and experience in creating exceptional digital solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        // Animation direction: odd left, even right
                        const dir = index % 2 === 0 ? 120 : -120;
                        const ref = useRef(null);
                        const inView = useInView(ref, { once: true, margin: "-80px" });
                        const controls = useAnimation();

                        useEffect(() => {
                            if (inView) {
                                controls.start({ x: 0, opacity: 1, scale: 1 });
                            }
                        }, [inView, controls]);

                        return (
                            <motion.div
                                ref={ref}
                                key={project.id}
                                initial={{ x: dir, opacity: 0, scale: 0.95 }}
                                animate={controls}
                                transition={{
                                    duration: 0.76,
                                    type: "spring",
                                    stiffness: 320,
                                    delay: index * 0.14
                                }}
                                className={`group relative bg-gradient-to-br from-gray-900/70 to-black/80 backdrop-blur-xl border border-yellow-300/20 rounded-3xl overflow-hidden shadow-2xl hover:border-yellow-400/70 transform`}
                                style={{ zIndex: 100 - index }}
                            >
                                {/* Floating gradients */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500 pointer-events-none"></div>

                                {/* Project Image */}
                                <motion.div
                                    className="relative overflow-hidden rounded-t-3xl"
                                    whileHover={{ scale: 1.08, y: -6 }}
                                    transition={{ type: "spring", stiffness: 400, duration: 0.42 }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                                </motion.div>

                                <div className="relative p-5 md:p-6">
                                    <motion.h3
                                        initial={{ y: 18, opacity: 0 }}
                                        animate={inView ? { y: 0, opacity: 1 } : {}}
                                        transition={{ delay: index * 0.13, duration: 0.45, type: "spring", stiffness: 380 }}
                                        className="text-xl font-bold text-yellow-300 drop-shadow mb-3"
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : {}}
                                        transition={{ delay: 0.38 + index * 0.18, duration: 0.5 }}
                                        className="text-gray-300 mb-4 leading-relaxed"
                                    >
                                        {project.description}
                                    </motion.p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-xs text-yellow-200 shadow hover:bg-yellow-400/20 transition"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.github}
                                            className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-yellow-400/50 rounded-lg text-gray-300 hover:text-yellow-300 text-sm shadow-md transition"
                                        >
                                            <Github className="w-4 h-4 mr-2" /> Code
                                        </a>
                                        <a
                                            href={project.live}
                                            className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 rounded-lg text-black font-medium text-sm shadow-lg transition"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                        </a>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-300 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ y: 22, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 border border-yellow-400/20 rounded-full text-yellow-300 text-sm">
                        <span className="mr-2">💡</span>
                        More projects available on my GitHub
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
