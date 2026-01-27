import React, { useRef } from 'react';

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
}

const HolographicCard: React.FC<HolographicCardProps> = ({ children, className = '' }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
        card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        card.style.setProperty('--x', `50%`);
        card.style.setProperty('--y', `50%`);
        card.style.setProperty('--bg-x', '50%');
        card.style.setProperty('--bg-y', '50%');
    };

    return (
        <div 
            className={`component-card holographic-card relative overflow-hidden rounded-lg transition-all duration-300 ${className}`}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                '--x': '50%',
                '--y': '50%',
                '--bg-x': '50%',
                '--bg-y': '50%',
            } as React.CSSProperties}
        >
            <div className="holo-content relative z-10">
                {children}
            </div>
            <div 
                className="holo-glow absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at var(--bg-x, 50%) var(--bg-y, 50%), rgba(32, 39, 85, 0.6), rgba(0, 0, 0, 0.4) 70%)`,
                }}
            />
        </div>
    );
};

export default HolographicCard;
