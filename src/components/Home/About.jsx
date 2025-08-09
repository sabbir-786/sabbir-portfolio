import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar, Heart } from 'lucide-react';

const About = () => {
    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
        { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
        { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
        { icon: Mail, href: '#', label: 'Email', color: 'hover:text-red-400' },
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8 relative">
            {/* White Grid Pattern Background */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                }}
            ></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Profile Card - Left Side */}
                    <div className="flex flex-col items-center text-center">
                        {/* Profile Image with Yellow Gradient Border */}
                        <div className="w-48 h-48 mb-6 relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 rounded-full blur opacity-75"></div>
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                                alt="Profile"
                                className="relative w-full h-full object-cover rounded-full border-2 border-yellow-300 shadow-lg"
                            />
                        </div>

                        {/* Name & Title with Gradient */}
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                                    Alex Johnson
                                </span>
                            </h1>
                            <p className="text-lg text-gray-400 mb-4">Full Stack Developer & Designer</p>
                            <div className="flex items-center justify-center text-gray-500 text-sm mb-2">
                                <MapPin className="w-4 h-4 mr-2" />
                                San Francisco, CA
                            </div>
                            <div className="flex items-center justify-center text-gray-500 text-sm">
                                <Calendar className="w-4 h-4 mr-2" />
                                Available for opportunities
                            </div>
                        </div>

                        {/* Social Media Icons with Yellow Gradient Hover */}
                        <div className="flex justify-center space-x-4 mb-8">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="relative p-3 border border-gray-700 hover:border-yellow-300 rounded-lg transition-all duration-300 text-gray-400 hover:text-yellow-300 group"
                                    title={social.label}
                                >
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                                    <social.icon className="relative w-5 h-5" />
                                </a>
                            ))}
                        </div>

                        {/* Quick Stats with Yellow Gradient Accents */}
                        <div className="grid grid-cols-3 gap-4 w-full">
                            <div className="relative border border-gray-700 bg-gray-900/50 rounded-lg p-4 text-center hover:border-yellow-300/50 transition-all duration-300">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-t-lg opacity-50"></div>
                                <div className="text-2xl font-bold text-white">5+</div>
                                <div className="text-sm text-gray-400">Years Exp</div>
                            </div>
                            <div className="relative border border-gray-700 bg-gray-900/50 rounded-lg p-4 text-center hover:border-yellow-300/50 transition-all duration-300">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-t-lg opacity-50"></div>
                                <div className="text-2xl font-bold text-white">50+</div>
                                <div className="text-sm text-gray-400">Projects</div>
                            </div>
                            <div className="relative border border-gray-700 bg-gray-900/50 rounded-lg p-4 text-center hover:border-yellow-300/50 transition-all duration-300">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-t-lg opacity-50"></div>
                                <div className="text-2xl font-bold text-white">100+</div>
                                <div className="text-sm text-gray-400">Clients</div>
                            </div>
                        </div>
                    </div>

                    {/* About Content - Right Side */}
                    <div className="flex flex-col justify-center">
                        <div className="relative border border-gray-700 bg-gray-900/50 rounded-lg p-8">
                            {/* Yellow Gradient Border Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 rounded-lg blur opacity-20"></div>

                            {/* Content */}
                            <div className="relative">
                                <div className="flex items-center mb-6">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 flex items-center justify-center mr-3">
                                        <Heart className="w-4 h-4 text-black" />
                                    </div>
                                    <h2 className="text-2xl font-bold">
                                        <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                                            About Me
                                        </span>
                                    </h2>
                                </div>

                                <div className="space-y-4 text-gray-300 leading-relaxed">
                                    <p>
                                        I'm a passionate full-stack developer with over 5 years of experience creating digital experiences
                                        that combine beautiful design with powerful functionality. My journey began with a curiosity for
                                        how things work, which led me into the world of web development.
                                    </p>
                                    <p>
                                        I specialize in modern web technologies and have a keen eye for user experience design.
                                        When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                                        projects, or capturing moments through photography.
                                    </p>
                                    <p>
                                        I believe in writing clean, maintainable code and creating solutions that not only work well
                                        but also provide exceptional user experiences.
                                        <span className="text-yellow-300 font-semibold"> Let's build something amazing together!</span>
                                    </p>
                                </div>

                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;