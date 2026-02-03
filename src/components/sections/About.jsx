import React from 'react';
import Card from '../ui/Card';

const About = () => {
    const stats = [
        { label: 'Months Experience', value: '6' },
        { label: 'Projects Completed', value: '2+' },
        { label: 'Technologies', value: '15+' },
        { label: 'Code Commits', value: '300+' },
    ];

    return (
        <section id="about" className="section-container">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-dark-400 text-lg max-w-2xl mx-auto">
                        Passionate developer with a love for creating elegant solutions to complex problems
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image/Avatar Section */}
                    <div className="animate-fade-in-left">
                        <Card className="aspect-square overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-6xl">
                                        👨‍💻
                                    </div>
                                    
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6 animate-fade-in-right">
                        <div>
                            <h3 className="text-2xl font-bold text-dark-50 mb-4">
                                Full Stack Developer
                            </h3>
                            <div className="space-y-4 text-dark-300 leading-relaxed">
                                <p>
                                    Motivated Full Stack Developer with 6 months of internship experience in web development.
                                    Proficient in front-end and back-end technologies including HTML, CSS, JavaScript, React.js,
                                    Node.js, and MySQL.
                                </p>
                                <p>
                                    Demonstrated ability to build user-friendly and scalable web applications with strong
                                    problem-solving skills. Passionate about creating efficient solutions and enhancing user
                                    experiences through modern web technologies.
                                </p>
                                <p>
                                    Currently focused on full-stack web development, RESTful API design, and continuous
                                    learning of emerging technologies to deliver high-quality solutions.
                                </p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            {stats.map((stat, index) => (
                                <Card
                                    key={index}
                                    className="text-center p-6"
                                    hover={true}
                                >
                                    <div className="text-3xl font-bold gradient-text mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-dark-400">
                                        {stat.label}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
