import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Folder, Lightbulb } from 'lucide-react';

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

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
            {/* Grid Background Pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-8">
                        <Folder className="w-4 h-4 mr-2" />
                        Featured Work
                    </div>
                 
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Here are some of my recent projects that showcase my skills and experience in creating
                        exceptional digital solutions.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group relative bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:border-yellow-400/50 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Yellow Gradient Border Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* Yellow Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Project Icon */}
                                <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <Lightbulb className="w-5 h-5 text-black" />
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="relative p-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-sm text-yellow-300 hover:bg-yellow-400/20 transition-colors duration-200"
                                            style={{ animationDelay: `${techIndex * 0.1}s` }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-yellow-400/50 rounded-lg transition-all duration-300 text-gray-300 hover:text-yellow-300 text-sm group/btn"
                                    >
                                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                                        Code
                                    </a>
                                    <a
                                        href={project.live}
                                        className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 rounded-lg transition-all duration-300 text-black font-medium text-sm group/btn shadow-lg hover:shadow-yellow-400/25"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                                        Live Demo
                                    </a>
                                </div>

                                {/* Decorative Yellow Line */}
                                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-300 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 border border-yellow-400/20 rounded-full text-yellow-300 text-sm">
                        <span className="mr-2">💡</span>
                        More projects available on my GitHub
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;