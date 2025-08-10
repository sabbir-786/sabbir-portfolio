import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar, Heart, Users, Briefcase, GraduationCap, ChevronRight, Building, Award } from 'lucide-react';

const About = () => {
    const [activeTab, setActiveTab] = useState('about');

    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
        { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
        { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
        { icon: Mail, href: '#', label: 'Email', color: 'hover:text-red-400' },
    ];

    const experiences = [
        {
            title: "Senior Full Stack Developer",
            company: "Tech Solutions Inc.",
            duration: "2023 - Present",
            description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for enterprise clients.",
            technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"]
        },
        {
            title: "Full Stack Developer",
            company: "Digital Innovations Ltd.",
            duration: "2022 - 2023",
            description: "Developed and maintained multiple client projects, focusing on responsive design and performance optimization. Collaborated with design teams to implement pixel-perfect UIs.",
            technologies: ["React", "Express.js", "MySQL", "Docker", "Redux"]
        },
        {
            title: "Frontend Developer",
            company: "StartupHub",
            duration: "2021 - 2022",
            description: "Built modern, responsive web applications from scratch. Implemented complex animations and interactions to enhance user experience.",
            technologies: ["Vue.js", "JavaScript", "SASS", "Figma", "Git"]
        }
    ];

    const education = [
        {
            degree: "Bachelor of Technology",
            field: "Computer Science & Engineering",
            institution: "Indian Institute of Technology (IIT)",
            duration: "2017 - 2021",
            grade: "CGPA: 8.5/10",
            description: "Specialized in Software Engineering and Data Structures. Active member of coding club and hackathon participant."
        },
        {
            degree: "Higher Secondary Education",
            field: "Science (PCM)",
            institution: "DAV Public School",
            duration: "2015 - 2017",
            grade: "Percentage: 92%",
            description: "Mathematics, Physics, and Chemistry with Computer Science. School topper in Computer Science."
        }
    ];

    const TabButton = ({ id, label, icon: Icon, isActive }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`relative flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${isActive
                ? 'text-black bg-gradient-to-r from-yellow-400 to-amber-500 shadow-lg shadow-yellow-400/30'
                : 'text-gray-400 hover:text-yellow-300 hover:bg-yellow-400/10 border border-gray-600/50 hover:border-yellow-400/30'
                }`}
        >
            <Icon className="w-4 h-4 mr-2" />
            {label}
            {isActive && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-300/20 to-amber-400/20 blur opacity-50"></div>
            )}
        </button>
    );

    const ExperienceCard = ({ experience, index }) => (
        <div
            className="relative border border-gray-600/50 bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 hover:border-yellow-300/50 transition-all duration-500 group hover:scale-[1.02] hover:-translate-y-1"
            style={{
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                transform: 'translateY(20px)'
            }}
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-300/10 via-amber-400/10 to-yellow-300/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-amber-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 flex items-center justify-center shadow-lg shadow-yellow-400/20 group-hover:shadow-yellow-400/40 transition-shadow duration-300">
                            <Building className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">{experience.title}</h3>
                            <p className="text-yellow-400 font-semibold">{experience.company}</p>
                        </div>
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">{experience.duration}</span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>

                <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-sm rounded-full hover:bg-yellow-400/20 transition-colors duration-300"
                            style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );

    const EducationCard = ({ education, index }) => (
        <div
            className="relative border border-gray-600/50 bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 hover:border-yellow-300/50 transition-all duration-500 group hover:scale-[1.02] hover:-translate-y-1"
            style={{
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                transform: 'translateY(20px)'
            }}
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-300/10 via-amber-400/10 to-yellow-300/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-amber-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 flex items-center justify-center shadow-lg shadow-yellow-400/20 group-hover:shadow-yellow-400/40 transition-shadow duration-300">
                            <GraduationCap className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">{education.degree}</h3>
                            <p className="text-yellow-400 font-semibold">{education.field}</p>
                            <p className="text-gray-300">{education.institution}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full block mb-2">{education.duration}</span>
                        <div className="flex items-center text-green-400 text-sm">
                            <Award className="w-4 h-4 mr-1" />
                            {education.grade}
                        </div>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed">{education.description}</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-4 md:p-8 relative overflow-hidden">
            <style jsx>{`
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>

            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}
                />
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(251, 191, 36, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(251, 191, 36, 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '100px 100px'
                    }}
                />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-400/8 to-yellow-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 mt-20 ">
                {/* Section Header with Animation - Centered */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex items-center px-6 py-3 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium shadow-lg shadow-yellow-400/10 hover:shadow-yellow-400/20 transition-all duration-300">
                        <Users className="w-4 h-4 mr-2 animate-pulse" />
                        About Me
                    </div>
                </div>

                <div className="grid xl:grid-cols-3 gap-12 items-start ">
                    {/* Profile Card - Left Side */}
                    <div className="flex flex-col items-center text-center space-y-8">
                        {/* Enhanced Profile Image with Multiple Effects */}
                        <div className="relative group">
                            <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-orange-400/10 rounded-full blur-2xl animate-pulse opacity-60"></div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-300/30 to-amber-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute -inset-3 border-2 border-yellow-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                            <div className="absolute -inset-6 border border-amber-400/15 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>

                            <div className="relative w-48 h-48 group-hover:scale-105 transition-transform duration-500">
                                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                                    alt="Ashwani Kumar - Full Stack Developer"
                                    className="relative w-full h-full object-cover rounded-full border-3 border-yellow-300/50 shadow-2xl shadow-yellow-400/20 filter brightness-110"
                                />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-yellow-400/10"></div>
                            </div>

                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
                        </div>

                        {/* Enhanced Name & Title */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold relative">
                                <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent drop-shadow-lg">
                                    Ashwani Kumar
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent blur-xl -z-10"></div>
                            </h1>

                            <div className="space-y-3">
                                <p className="text-xl text-gray-300 font-medium">Full Stack Developer & Designer</p>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 text-gray-400 text-sm">
                                    <div className="flex items-center justify-center">
                                        <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                                        Bokaro Steel City, Jharkhand
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Calendar className="w-4 h-4 mr-2 text-green-400" />
                                        Available for opportunities
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Social Media Icons */}
                        <div className="flex justify-center space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="relative p-4 border border-gray-600/50 hover:border-yellow-300/60 rounded-xl transition-all duration-300 text-gray-400 hover:text-yellow-300 group hover:scale-110 hover:-translate-y-1"
                                    title={social.label}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-300/20 to-amber-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <social.icon className="relative w-6 h-6 transition-transform group-hover:scale-110" />
                                </a>
                            ))}
                        </div>

                        {/* Enhanced Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                            {[
                                { number: '3+', label: 'Years Exp', delay: '0s' },
                                { number: '10+', label: 'Projects', delay: '0.1s' },
                                { number: '50+', label: 'Clients', delay: '0.2s' }
                            ].map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className="relative border border-gray-600/50 bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 text-center hover:border-yellow-300/50 transition-all duration-300 group hover:scale-105 hover:-translate-y-1"
                                    style={{ animationDelay: stat.delay }}
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-t-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative">
                                        <div className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors duration-300">{stat.number}</div>
                                        <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Content Area - Right Side */}
                    <div className="xl:col-span-2">
                        {/* Tab Navigation */}
                        <div className="flex flex-wrap gap-4 mb-8 justify-center xl:justify-start">
                            <TabButton id="about" label="About" icon={Heart} isActive={activeTab === 'about'} />
                            <TabButton id="experience" label="Experience" icon={Briefcase} isActive={activeTab === 'experience'} />
                            <TabButton id="education" label="Education" icon={GraduationCap} isActive={activeTab === 'education'} />
                        </div>

                        {/* Tab Content with Animations */}
                        <div className="relative">
                            {/* About Tab */}
                            {activeTab === 'about' && (
                                <div
                                    className="space-y-8"
                                    style={{
                                        animation: 'slideIn 0.5s ease-out forwards',
                                    }}
                                >
                                    <div className="relative border border-gray-600/50 bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 hover:border-yellow-300/30 transition-all duration-500 group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-300/20 via-amber-400/20 to-yellow-300/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-amber-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="relative">
                                            <div className="flex items-center mb-8">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 flex items-center justify-center mr-4 shadow-lg shadow-yellow-400/30">
                                                    <Heart className="w-5 h-5 text-black animate-pulse" />
                                                </div>
                                                <h2 className="text-3xl font-bold">
                                                    <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                                                        About Me
                                                    </span>
                                                </h2>
                                            </div>

                                            <div className="space-y-6 text-gray-300 leading-relaxed">
                                                <p className="text-lg first-letter:text-3xl first-letter:font-bold first-letter:text-yellow-400 first-letter:mr-1 first-letter:float-left">
                                                    I'm a passionate full-stack developer with over 3 years of experience creating digital experiences
                                                    that combine beautiful design with powerful functionality. My journey began with a curiosity for
                                                    how things work, which led me into the world of web development.
                                                </p>
                                                <p className="text-base">
                                                    I specialize in modern web technologies and have a keen eye for user experience design.
                                                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                                                    projects, or capturing moments through photography.
                                                </p>
                                                <p className="text-base">
                                                    I believe in writing clean, maintainable code and creating solutions that not only work well
                                                    but also provide exceptional user experiences.
                                                    <span className="text-yellow-300 font-semibold ml-2 relative">
                                                        Let's build something amazing together!
                                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                                    </span>
                                                </p>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                                <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-xl hover:shadow-xl hover:shadow-yellow-400/30 transform hover:scale-105 transition-all duration-300 hover:-translate-y-1">
                                                    Get In Touch
                                                </button>
                                                <button className="px-6 py-3 border border-yellow-400/40 text-yellow-300 font-semibold rounded-xl hover:bg-yellow-400/10 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105">
                                                    Download CV
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Experience Tab */}
                            {activeTab === 'experience' && (
                                <div className="space-y-6">
                                    <div className="flex items-center mb-8">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 flex items-center justify-center mr-4 shadow-lg shadow-yellow-400/30">
                                            <Briefcase className="w-5 h-5 text-black" />
                                        </div>
                                        <h2 className="text-3xl font-bold">
                                            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                                                Professional Experience
                                            </span>
                                        </h2>
                                    </div>
                                    {experiences.map((experience, index) => (
                                        <ExperienceCard key={index} experience={experience} index={index} />
                                    ))}
                                </div>
                            )}

                            {/* Education Tab */}
                            {activeTab === 'education' && (
                                <div className="space-y-6">
                                    <div className="flex items-center mb-8">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 flex items-center justify-center mr-4 shadow-lg shadow-yellow-400/30">
                                            <GraduationCap className="w-5 h-5 text-black" />
                                        </div>
                                        <h2 className="text-3xl font-bold">
                                            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                                                Education
                                            </span>
                                        </h2>
                                    </div>
                                    {education.map((edu, index) => (
                                        <EducationCard key={index} education={edu} index={index} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;