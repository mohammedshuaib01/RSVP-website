import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-section fade-in">
            {/* Hanging Bells Decoration */}

            <div className="hero-content">
                <div className="hero-logo-container reveal reveal-down">
                    <img src="/AVlogo.png" alt="AV Logo" />
                </div>

                <p className="intro-text reveal reveal-up reveal-stagger-1">
                    With love in our hearts and blessings all around,<br /> please
                 join us for the wedding celebration of
                </p>

                <h1 className="main-names reveal reveal-up reveal-stagger-2">
                    <span>Akanksha</span> <span>&</span> <span>Vineet</span>
                </h1>

                <div className="hero-divider reveal reveal-up reveal-stagger-3">
                    <span>❧</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
