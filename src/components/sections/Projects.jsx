import React from 'react';
import ProjectCard from '../ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform (MERN Stack)',
            description: 'Built a Full-Stack E-commerce web app using React.js, Node.js/Express.js, MongoDB with Redux for cart, auth, and product state management. Developed REST APIs (CRUD, orders, authentication) with JWT-based role access, responsive UI, and reusable React components (product, cart, checkout, dashboard). Added Search + Filters + Pagination + Sorting, Stripe payment simulation, admin panel, and improved performance using MongoDB indexing (40% faster responses).',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
            tags: ['React.js', 'Node.js', 'MongoDB', 'Redux', 'Express.js', 'JWT', 'Stripe'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true,
            duration: '2 Months',
        },
        {
            title: 'Task Manager Application (MERN Stack)',
            description: 'Built a full-stack Task Management System using React.js, Express.js REST API, MongoDB, and Redux Toolkit for task state, filters, and preferences. Implemented JWT authentication, user-based task isolation, drag-and-drop task reordering (React DnD), and responsive UI with Material-UI. Added Search + Filter with debouncing, deadline alerts using Node Cron, and a dashboard with task stats and progress metrics.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
            tags: ['React.js', 'Node.js', 'MongoDB', 'Redux Toolkit', 'Material-UI', 'JWT'],
            liveUrl: '#',
            githubUrl: '#',
            duration: '1.5 Months',
        },
        {
            title: 'Weather App',
            description: 'Built a responsive Weather Application using React.js and Tailwind CSS with real-time weather data integration. Implemented OpenWeather API to fetch current weather conditions, 5-day forecasts, and location-based weather updates. Features include dynamic weather icons, temperature unit conversion (Celsius/Fahrenheit), city search functionality, and responsive design optimized for all devices.',
            image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
            tags: ['React.js', 'Tailwind CSS', 'OpenWeather API', 'Fetch API'],
            liveUrl: '#',
            githubUrl: '#',
            duration: '1 Month',
        },
    ];

    return (
        <section id="projects" className="section-container">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-dark-400 text-lg max-w-2xl mx-auto">
                        A showcase of my recent work and personal projects
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                        />
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12 animate-fade-in-up">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 glass glass-hover rounded-lg text-dark-50 font-semibold transition-all duration-300 hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
