import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: 'Full Stack Developer Intern (React + REST API)',
            company: 'Mak INFOTECH solution',
            period: '2025 - 2026 (6 Months)',
            description: 'Developed a responsive Algo Trading dashboard UI using React.js, Tailwind CSS, and React Router for smooth navigation across trading modules. Implemented Redux state management to handle live market data, user interactions, and trading UI updates efficiently. Integrated REST APIs using Fetch/Axios to display real-time trading data (prices, orders, strategies) with optimized loading and error handling.',
            achievements: [
                'Built responsive Algo Trading dashboard with React.js and Tailwind CSS',
                'Implemented Redux for efficient state management of live market data',
                'Integrated REST APIs for real-time trading data display',
                'Optimized loading and error handling for better user experience',
            ],
        },
    ];

    return (
        <section id="experience" className="section-container bg-dark-900/30">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-dark-400 text-lg max-w-2xl mx-auto">
                        My professional journey and career milestones
                    </p>
                </div>

                {/* Timeline */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="timeline-item animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="glass glass-hover rounded-xl p-6 md:p-8">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-dark-50 mb-2">
                                            {exp.title}
                                        </h3>
                                        <p className="text-primary-400 font-semibold">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 text-primary-400 rounded-lg text-sm font-medium border border-primary-500/20">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {exp.period}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-dark-300 leading-relaxed mb-4">
                                    {exp.description}
                                </p>

                                {/* Achievements */}
                                <div>
                                    <h4 className="text-sm font-semibold text-dark-400 uppercase tracking-wider mb-3">
                                        Key Achievements
                                    </h4>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-3 text-dark-300">
                                                <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
