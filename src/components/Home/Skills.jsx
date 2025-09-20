import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Smartphone, Wrench, Monitor, Server, Cpu, Star, Zap, Globe } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

import htmlIcon from '../../assets/skills/HTML5.png';
import cssIcon from '../../assets/skills/CSS3.png';
import jsIcon from '../../assets/skills/JavaScript.png';
import tailIcon from '../../assets/skills/Tailwind CSS.png';
import angularIcon from '../../assets/skills/AngularJS.png';
import reactIcon from '../../assets/skills/React.png';
import wordIcon from '../../assets/skills/wordpress.png';
import LaravelIcon from '../../assets/skills/Laravel.png';

import nodeIcon from '../../assets/skills/Node.js.png';
import phpIcon from '../../assets/skills/php.png';
import exIcon from '../../assets/skills/Express.png';
import mongoIcon from '../../assets/skills/MongoDB.png';
import sqlIcon from '../../assets/skills/mysql.png';

import rnIcon from '../../assets/skills/physics.png';
import androidIcon from '../../assets/skills/Android Studio.png';
import appleIcon from '../../assets/skills/Apple.png';
import firebaseIcon from '../../assets/skills/Firebase.png';

import gitIcon from '../../assets/skills/Git.png';
import dockIcon from '../../assets/skills/Docker.png';
import awsIcon from '../../assets/skills/AWS.png';
import figmaIcon from '../../assets/skills/Figma.png';

import vercelIcon from '../../assets/skills/Vercel.png';
import socketIcon from '../../assets/skills/Socket.io.png';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('frontend');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const categories = {
        frontend: {
            title: 'Frontend Development',
            icon: <Monitor className="w-6 h-6" />,
            color: 'from-yellow-300 to-yellow-500',
            skills: [
                { name: 'HTML', level: 95, icon: <img src={htmlIcon} alt="HTML" className="w-8 h-8" />, years: '3+', desc: 'HTML 5' },
                { name: 'CSS', level: 95, icon: <img src={cssIcon} alt="CSS" className="w-8 h-8" />, years: '3+', desc: 'CSS 3' },
                { name: 'JavaScript ES6+', level: 95, icon: <img src={jsIcon} alt="JavaScript" className="m-3 w-8 h-8" />, years: '3+', desc: 'Modern JavaScript' },
                { name: 'Tailwind CSS', level: 92, icon: <img src={tailIcon} alt="Tailwind CSS" className="w-8 h-8" />, years: '2+', desc: 'Utility-first CSS' },
                { name: 'React', level: 95, icon: <img src={reactIcon} alt="React" className="w-8 h-8" />, years: '3+', desc: 'Modern React development' },
                { name: 'Angular.js', level: 85, icon: <img src={angularIcon} alt="Angular.js" className="w-8 h-8" />, years: '2+', desc: 'Progressive framework' },
                { name: 'WordPress', level: 85, icon: <img src={wordIcon} alt="WordPress" className="w-8 h-8" />, years: '2+', desc: 'Content management' },
                { name: 'Laravel', level: 85, icon: <img src={LaravelIcon} alt="Laravel" className="w-8 h-8" />, years: '2+', desc: 'PHP framework' },
            ]
        },
        backend: {
            title: 'Backend Development',
            icon: <Server className="w-6 h-6" />,
            color: 'from-yellow-300 to-yellow-500',
            skills: [
                { name: 'Node.js', level: 90, icon: <img src={nodeIcon} alt="Node.js" className="w-8 h-8" />, years: '3+', desc: 'JavaScript runtime' },
                { name: 'Php', level: 85, icon: <img src={phpIcon} alt="PHP" className="w-8 h-8" />, years: '2+', desc: 'Versatile language' },
                { name: 'Express.js', level: 88, icon: <img src={exIcon} alt="Express.js" className="w-8 h-8" />, years: '3+', desc: 'Fast web framework' },
                { name: 'MongoDB', level: 82, icon: <img src={mongoIcon} alt="MongoDB" className="w-8 h-8" />, years: '2+', desc: 'NoSQL database' },
                { name: 'MySql', level: 80, icon: <img src={sqlIcon} alt="MySQL" className="w-8 h-8" />, years: '2+', desc: 'Relational database' },
            ]
        },
        mobile: {
            title: 'Mobile Development',
            icon: <Smartphone className="w-6 h-6" />,
            color: 'from-yellow-300 to-yellow-500',
            skills: [
                { name: 'React Native', level: 88, icon: <img src={rnIcon} alt="React Native" className="w-8 h-8" />, years: '2+', desc: 'Cross-platform apps' },
                { name: 'iOS Development', level: 75, icon: <img src={appleIcon} alt="iOS" className="w-8 h-8" />, years: '1+', desc: 'Native iOS apps' },
                { name: 'Android Development', level: 78, icon: <img src={androidIcon} alt="Android" className="w-8 h-8" />, years: '1+', desc: 'Native Android apps' },
                { name: 'Firebase', level: 85, icon: <img src={firebaseIcon} alt="Firebase" className="w-8 h-8" />, years: '2+', desc: 'Backend services' },
            ]
        },
        tools: {
            title: 'Tools & DevOps',
            icon: <Wrench className="w-6 h-6" />,
            color: 'from-yellow-300 to-yellow-500',
            skills: [
                { name: 'Git/GitHub', level: 92, icon: <img src={gitIcon} alt="Git" className="w-8 h-8" />, years: '3+', desc: 'Version control' },
                { name: 'Docker', level: 85, icon: <img src={dockIcon} alt="Docker" className="w-8 h-8" />, years: '2+', desc: 'Containerization' },
                { name: 'AWS', level: 80, icon: <img src={awsIcon} alt="AWS" className="w-8 h-8" />, years: '2+', desc: 'Cloud services' },
                { name: 'Vercel', level: 88, icon: <img src={vercelIcon} alt="Vercel" className="w-8 h-8" />, years: '2+', desc: 'Deployment platform' },
                { name: 'Figma', level: 88, icon: <img src={figmaIcon} alt="Figma" className="w-8 h-8" />, years: '2+', desc: 'UI/UX Design' },
                { name: 'Socket.io', level: 78, icon: <img src={socketIcon} alt="Socket.io" className="w-8 h-8" />, years: '1+', desc: 'Connection service' },
            ]
        }
    };

    // Circular skill card with scroll slide-in animation
    const CircularSkillCard = ({ skill, index }) => {
        const controls = useAnimation();
        const ref = useRef(null);
        const inView = useInView(ref, { once: true, margin: '-80px' });

        useEffect(() => {
            if (inView) {
                controls.start({
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: { duration: 0.6, type: 'spring', stiffness: 200, delay: index * 0.12 }
                });
            }
        }, [inView, controls, index]);

        const initialX = index % 2 === 0 ? -120 : 120;

        return (
            <motion.div
                ref={ref}
                className="skill-card group cursor-pointer relative"
                style={{ animationDelay: `${index * 0.15}s` }}
                initial={{ opacity: 0, x: initialX, scale: 0.8, rotate: index % 2 === 0 ? -8 : 8 }}
                animate={controls}
            >
                {/* Outer glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-300/20 to-yellow-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>

                {/* Progress ring background */}
                <div className="absolute inset-0 rounded-full">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                        <circle
                            cx="60"
                            cy="60"
                            r="54"
                            fill="none"
                            stroke="rgba(55, 65, 81, 0.3)"
                            strokeWidth="4"
                        />
                        <circle
                            cx="60"
                            cy="60"
                            r="54"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray={`${skill.level * 3.39} 339`}
                            className="transition-all duration-1000 ease-out"
                            style={{ strokeDasharray: `${skill.level * 3.39} 339`, opacity: 0.8 }}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#fcd34d" />
                                <stop offset="100%" stopColor="#f59e0b" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Circular card body */}
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-yellow-300/50 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl shadow-yellow-300/20 flex flex-col items-center justify-center p-4 backdrop-blur-sm">

                    {/* Animated background particles */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="absolute w-2 h-2 bg-yellow-300/30 rounded-full animate-ping" style={{ top: '20%', left: '80%', animationDelay: '0s' }}></div>
                        <div className="absolute w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse" style={{ top: '70%', left: '20%', animationDelay: '1s' }}></div>
                        <div className="absolute w-1.5 h-1.5 bg-yellow-200/20 rounded-full animate-bounce" style={{ top: '80%', left: '70%', animationDelay: '2s' }}></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                        <div className="mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative">
                            <div className="skill-icon-wrapper group-hover:drop-shadow-lg">
                                {skill.icon}
                            </div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm">
                                {skill.icon}
                            </div>
                        </div>
                        <h4 className="text-white font-semibold text-xs mb-1 leading-tight group-hover:text-yellow-300 transition-colors duration-300">
                            {skill.name}
                        </h4>
                        <span className="text-xs text-gray-400 group-hover:text-yellow-200 transition-colors duration-300">
                            {skill.years}
                        </span>
                    </div>

                    {/* Floating glow elements */}
                    <div className="absolute -inset-6 opacity-0 group-hover:opacity-100 transition-all duration-700">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                            <div className="bg-yellow-300/20 backdrop-blur-md rounded-full p-1 border border-yellow-300/30">
                                <Star className="w-3 h-3 text-yellow-300" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                    <div className="bg-gray-900/95 backdrop-blur-md px-4 py-3 rounded-xl border border-yellow-300/30 shadow-2xl min-w-max relative">
                        <div className="text-center">
                            <div className="text-yellow-300 font-bold text-lg mb-1">{skill.level}%</div>
                            <div className="text-gray-300 text-xs">{skill.desc}</div>
                        </div>
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45 border-l border-t border-yellow-300/30"></div>
                    </div>
                </div>

                {/* Pulsing ring */}
                <div className="absolute inset-0 rounded-full border-2 border-yellow-300/30 opacity-0 group-hover:opacity-100 animate-pulse"></div>
            </motion.div>
        );
    };

    return (
        <section className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Grid pattern */}
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
                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-yellow-300/20 rounded-full animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 4}s`
                            }}
                        />
                    ))}
                </div>
                {/* Gradient overlays */}
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-yellow-300/5 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-300/5 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center px-6 py-3 bg-yellow-300/10 border border-yellow-300/30 rounded-full text-yellow-300 text-sm font-medium mb-8 backdrop-blur-sm hover:bg-yellow-300/20 transition-all duration-300">
                        <Cpu className="w-4 h-4 mr-2 animate-spin-slow" />
                        Technical Skills
                        <div className="ml-2 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Technologies and frameworks I use to build exceptional digital experiences.
                        <span className="text-yellow-300 font-semibold"> Hover over any skill</span> to see proficiency level.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {Object.entries(categories).map(([key, category]) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${activeCategory === key
                                ? `text-black bg-gradient-to-r ${category.color} shadow-lg shadow-yellow-300/30`
                                : 'text-gray-400 hover:text-white border border-gray-600 hover:border-yellow-300/50 hover:bg-yellow-300/5'
                                }`}
                        >
                            <div className="flex items-center space-x-2">
                                <span className={activeCategory === key ? 'animate-bounce' : ''}>{category.icon}</span>
                                <span className="hidden sm:inline">{category.title}</span>
                                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                            </div>
                            {activeCategory === key && (
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Skills Grid with scroll slide animation */}
                <div className="mb-12 flex flex-wrap justify-center gap-12 lg:gap-16">
                    {categories[activeCategory].skills.map((skill, index) => (
                        <CircularSkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
            </div>

            {/* Styles */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default Skills;
