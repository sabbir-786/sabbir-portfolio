import React, { useState } from 'react';
import { Code, Database, Smartphone, Wrench, Monitor, Server, Cpu } from 'lucide-react';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('frontend');
    const [clickedSkills, setClickedSkills] = useState(new Set());

    const categories = {
        frontend: {
            title: 'Frontend Development',
            icon: <Monitor className="w-6 h-6" />,
            color: 'from-yellow-400 to-amber-500',
            skills: [
                { name: 'React/Next.js', level: 95, icon: '⚛️', years: '3+' },
                { name: 'TypeScript', level: 90, icon: '🔷', years: '2+' },
                { name: 'Tailwind CSS', level: 92, icon: '🎨', years: '2+' },
                { name: 'Vue.js', level: 85, icon: '💚', years: '2+' },
                { name: 'JavaScript ES6+', level: 94, icon: '⚡', years: '3+' },
                { name: 'SASS/SCSS', level: 88, icon: '🎯', years: '3+' },
            ]
        },
        backend: {
            title: 'Backend Development',
            icon: <Server className="w-6 h-6" />,
            color: 'from-yellow-500 to-orange-500',
            skills: [
                { name: 'Node.js', level: 90, icon: '🟢', years: '3+' },
                { name: 'Python', level: 85, icon: '🐍', years: '2+' },
                { name: 'Express.js', level: 88, icon: '🚀', years: '3+' },
                { name: 'MongoDB', level: 82, icon: '🍃', years: '2+' },
                { name: 'PostgreSQL', level: 80, icon: '🐘', years: '2+' },
                { name: 'Redis', level: 75, icon: '🔴', years: '1+' },
            ]
        },
        mobile: {
            title: 'Mobile Development',
            icon: <Smartphone className="w-6 h-6" />,
            color: 'from-amber-500 to-yellow-600',
            skills: [
                { name: 'React Native', level: 88, icon: '📱', years: '2+' },
                { name: 'Flutter', level: 80, icon: '🦋', years: '1+' },
                { name: 'Expo', level: 85, icon: '⚫', years: '2+' },
                { name: 'iOS Development', level: 75, icon: '🍎', years: '1+' },
                { name: 'Android Development', level: 78, icon: '🤖', years: '1+' },
                { name: 'Progressive Web Apps', level: 90, icon: '🌐', years: '2+' },
            ]
        },
        tools: {
            title: 'Tools & DevOps',
            icon: <Wrench className="w-6 h-6" />,
            color: 'from-orange-400 to-yellow-500',
            skills: [
                { name: 'Git/GitHub', level: 92, icon: '🐙', years: '3+' },
                { name: 'Docker', level: 85, icon: '🐋', years: '2+' },
                { name: 'AWS', level: 80, icon: '☁️', years: '2+' },
                { name: 'Vercel', level: 88, icon: '▲', years: '2+' },
                { name: 'Firebase', level: 85, icon: '🔥', years: '2+' },
                { name: 'CI/CD', level: 78, icon: '🔄', years: '1+' },
            ]
        }
    };

    // Calculate average proficiency for active category
    const getAverageLevel = () => {
        const skills = categories[activeCategory].skills;
        return Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length);
    };

    // Handle skill card click
    const handleSkillClick = (skillName) => {
        const skillKey = `${activeCategory}-${skillName}`;
        const newClickedSkills = new Set(clickedSkills);

        if (newClickedSkills.has(skillKey)) {
            newClickedSkills.delete(skillKey);
        } else {
            newClickedSkills.add(skillKey);
        }

        setClickedSkills(newClickedSkills);
    };

    // Check if skill is clicked
    const isSkillClicked = (skillName) => {
        return clickedSkills.has(`${activeCategory}-${skillName}`);
    };

    return (
        <section className="min-h-screen bg-black text-white py-20 relative">
            {/* Simple Grid Background */}
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-8">
                        <Cpu className="w-4 h-4 mr-2" />
                        Technical Skills
                    </div>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        A comprehensive showcase of technologies, frameworks, and tools I use to build
                        exceptional digital experiences. Click on any skill card to reveal proficiency level.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {Object.entries(categories).map(([key, category]) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === key
                                ? 'text-white bg-gray-800 border-2 border-yellow-400'
                                : 'text-gray-400 hover:text-white border-2 border-gray-700 hover:border-yellow-400'
                                }`}
                        >
                            <div className="flex items-center space-x-2">
                                <span>{category.icon}</span>
                                <span className="hidden sm:inline">{category.title}</span>
                                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Skills Cards Grid */}
                    <div className="space-y-8">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center space-x-3">
                                <span className="text-yellow-400">{categories[activeCategory].icon}</span>
                                <span className="hidden sm:inline">{categories[activeCategory].title}</span>
                                <span className="sm:hidden">{categories[activeCategory].title.split(' ')[0]}</span>
                            </h3>
                            <div className={`h-1 w-20 bg-gradient-to-r ${categories[activeCategory].color} rounded-full`}></div>
                        </div>

                        {/* Skills Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {categories[activeCategory].skills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    onClick={() => handleSkillClick(skill.name)}
                                    className={`group cursor-pointer relative overflow-hidden rounded-2xl border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${isSkillClicked(skill.name)
                                        ? 'bg-gray-800 border-yellow-400 shadow-lg'
                                        : 'bg-gray-900 border-gray-700 hover:border-yellow-400/50'
                                        }`}
                                >
                                    {/* Card Content */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-3">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categories[activeCategory].color} flex items-center justify-center text-lg`}>
                                                    {skill.icon}
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-semibold text-lg">{skill.name}</h4>
                                                    <span className="text-xs text-gray-500">{skill.years} experience</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Percentage Display (shown when clicked) */}
                                        {isSkillClicked(skill.name) && (
                                            <div className="mt-4 pt-4 border-t border-gray-600 animate-fade-in">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-gray-300">Proficiency Level</span>
                                                    <span className={`text-2xl font-bold bg-gradient-to-r ${categories[activeCategory].color} bg-clip-text text-transparent`}>
                                                        {skill.level}%
                                                    </span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Click indicator */}
                                        <div className="absolute top-2 right-2">
                                            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isSkillClicked(skill.name)
                                                ? `bg-gradient-to-r ${categories[activeCategory].color}`
                                                : 'bg-gray-600 group-hover:bg-yellow-400'
                                                }`}></div>
                                        </div>
                                    </div>

                                    {/* Hover effect gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${categories[activeCategory].color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Summary Card */}
                    <div className="sticky top-8">
                        <div className="relative">
                            <div className={`absolute -inset-1 bg-gradient-to-r ${categories[activeCategory].color} rounded-3xl blur opacity-25`}></div>
                            <div className="relative bg-gray-900 border border-gray-700 rounded-3xl p-8">
                                <div className="text-center mb-8">
                                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${categories[activeCategory].color} rounded-2xl mb-4`}>
                                        <span className="text-2xl text-white">
                                            {categories[activeCategory].icon}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">
                                        {categories[activeCategory].title}
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        Professional experience in modern {categories[activeCategory].title.toLowerCase()}
                                    </p>
                                </div>

                                {/* Average Proficiency */}
                                <div className="text-center mb-8">
                                    <div className="text-4xl font-bold text-white mb-2">
                                        {getAverageLevel()}%
                                    </div>
                                    <div className="text-sm text-gray-400 mb-4">Average Proficiency</div>

                                    {/* Simple Progress Circle */}
                                    <div className="relative w-24 h-24 mx-auto">
                                        <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
                                        <div
                                            className={`absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r ${categories[activeCategory].color} border-t-4`}
                                            style={{
                                                transform: `rotate(${(getAverageLevel() / 100) * 360 - 90}deg)`,
                                                borderTopColor: 'transparent'
                                            }}
                                        ></div>
                                        <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                                            <span className="text-xs font-bold text-white">{getAverageLevel()}%</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Tech Stack Preview */}
                                <div>
                                    <h5 className="text-sm font-semibold text-gray-400 mb-4 text-center">Top Technologies</h5>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {categories[activeCategory].skills.slice(0, 4).map((skill) => (
                                            <span
                                                key={skill.name}
                                                className="inline-flex items-center px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-300"
                                            >
                                                <span className="mr-1">{skill.icon}</span>
                                                <span className="hidden sm:inline">{skill.name}</span>
                                                <span className="sm:hidden">{skill.name.split('/')[0]}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Instruction text */}
                                <div className="mt-6 text-center">
                                    <p className="text-xs text-gray-500">
                                        💡 Click on any skill card to reveal proficiency level
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default Skills;