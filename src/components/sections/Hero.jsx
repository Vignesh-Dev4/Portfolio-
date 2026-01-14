import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float animation-delay-400" />
            </div>

            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Greeting */}
                    <div className="animate-fade-in-down">
                        <p className="text-primary-400 text-lg md:text-xl font-medium mb-4">
                            Hi there! 👋 I'm
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                            <span className="gradient-text">Vignesh S</span>
                        </h1>
                    </div>

                    {/* Title */}
                    <div className="animate-fade-in-up animation-delay-200">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-dark-200 mb-6">
                            Full Stack Developer
                        </h2>
                        <p className="text-lg md:text-xl text-dark-400 max-w-2xl mx-auto leading-relaxed">
                            Motivated Full Stack Developer with 6 months of internship experience in web development.
                            Proficient in building user-friendly and scalable web applications with a passion for creating efficient solutions.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Get In Touch
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View My Work
                        </Button>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
                        <svg
                            className="w-6 h-6 text-dark-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
