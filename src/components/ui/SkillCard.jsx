import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';

const SkillCard = ({ name, level, icon, category }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setProgress(level);
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [isVisible, level]);

    return (
        <Card
            ref={cardRef}
            className={`group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            hover={true}
        >
            <div className="flex items-start gap-4">
                {icon && (
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                )}
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-dark-50">{name}</h3>
                        <span className="text-sm font-medium text-primary-400">{level}%</span>
                    </div>
                    {category && (
                        <p className="text-sm text-dark-400 mb-3">{category}</p>
                    )}
                    <div className="skill-bar">
                        <div
                            className="skill-progress"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default SkillCard;
