import React from 'react';

const Card = ({
    children,
    className = '',
    hover = true,
    glow = false,
    ...props
}) => {
    const baseStyles = 'glass rounded-xl p-6';
    const hoverStyles = hover ? 'card-hover' : '';
    const glowStyles = glow ? 'glow-effect' : '';

    return (
        <div
            className={`${baseStyles} ${hoverStyles} ${glowStyles} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
