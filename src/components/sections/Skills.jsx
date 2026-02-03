import React from 'react';
import SkillCard from '../ui/SkillCard';

const Skills = () => {
    const skillCategories = [
        {
            category: 'Programming Languages',
            skills: [
                { name: 'Java', level: 75, icon: '☕' },
                { name: 'C++', level: 50, icon: '⚙️' },
                { name: 'Python', level: 50, icon: '🐍' },
                { name: 'JavaScript (ES6+)', level: 85, icon: '🟨' },
            ],
        },
        {
            category: 'Frontend Technologies',
            skills: [
                { name: 'React.js', level: 85, icon: '⚛️' },
                { name: 'HTML5', level: 90, icon: '📄' },
                { name: 'CSS3', level: 90, icon: '🎨' },
                { name: 'Bootstrap', level: 80, icon: '🅱️' },
                { name: 'Tailwind', level: 85, icon: '💨' },
                { name: 'Redux', level: 75, icon: '🔄' },
                { name: 'React Router', level: 85, icon: '🛣️' },
            ],
        },
        {
            category: 'Backend Technologies',
            skills: [
                { name: 'Node.js', level: 80, icon: '🟢' },
                { name: 'SpringBoot', level: 75, icon: '🍃' },
                { name: 'RESTful APIs', level: 85, icon: '🔌' },
            ],
        },
        {
            category: 'Databases',
            skills: [
                { name: 'SQL', level: 80, icon: '💾' },
                { name: 'MySQL', level: 80, icon: '🗄️' },
                { name: 'MS Access', level: 60, icon: '📊' },
            ],
        },
        {
            category: 'Tools & Platforms',
            skills: [
                { name: 'Git', level: 85, icon: '📦' },
                { name: 'GitHub', level: 85, icon: '🐙' },
                { name: 'Postman', level: 80, icon: '📮' },
                { name: 'Jira', level: 70, icon: '📋' },
                { name: 'VS Code', level: 90, icon: '💻' },
            ],
        },
        {
            category: 'Operating Systems',
            skills: [
                { name: 'Microsoft Windows', level: 90, icon: '🪟' },
                { name: 'Linux', level: 60, icon: '🐧' },
            ],
        },
        {
            category: 'Development Concepts',
            skills: [
                { name: 'RESTful APIs', level: 85, icon: '🔌' },
                { name: 'JWT Authentication', level: 80, icon: '🔐' },
                { name: 'Responsive Design', level: 90, icon: '📱' },
                { name: 'MVC Architecture', level: 80, icon: '🏗️' },
            ],
        },
        {
            category: 'Soft Skills',
            skills: [
                { name: 'Problem Solving', level: 90, icon: '🧩' },
                { name: 'Debugging', level: 85, icon: '🐛' },
                { name: 'Team Collaboration', level: 85, icon: '🤝' },
                { name: 'Communication', level: 85, icon: '💬' },
            ],
        },
    ];

    return (
        <section id="skills" className="section-container bg-dark-900/30">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-dark-400 text-lg max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="space-y-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            <h3 className="text-2xl font-bold text-dark-50 mb-6 flex items-center gap-3">
                                <span className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
                                {category.category}
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <SkillCard
                                        key={skillIndex}
                                        name={skill.name}
                                        level={skill.level}
                                        icon={skill.icon}
                                        category={category.category}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
