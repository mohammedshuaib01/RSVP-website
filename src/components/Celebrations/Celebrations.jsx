import React from 'react';
import './Celebrations.css';

const Celebrations = () => {
    return (
        <div id="celebrations" className="celebrations-section fade-in">
            <div className="celebrations-header-content reveal reveal-up">
                <div className="celebration-logo">
                    <img src="/ganeeshlogo.png" alt="Ganesha" />
                </div>
                <h1 className="celebrations-title">The Celebrations</h1>
                <div className="celebrations-divider"></div>
            </div>

            <div className="celebration-cards-container">
                <div className="celebration-card reveal reveal-up reveal-stagger-1">
                    <div className="celebration-card-icon">
                        {/* Placeholder for Lamp */}
                        <span className="icon-symbol">🪔</span>
                    </div>
                    <h3>Wedding Ceremony</h3>
                    <div className="celebration-card-details">
                        JAN 19, 2026 | 11:00 AM
                    </div>
                    <div className="celebration-card-subtext">Tradition Kerala Ritual</div>
                </div>

                <div className="celebration-card reveal reveal-up reveal-stagger-2">
                    <div className="celebration-card-icon">
                        {/* Placeholder for Garland */}
                        <span className="icon-symbol">🏵️</span>
                    </div>
                    <h3>Grand Reception</h3>
                    <div className="celebration-card-details">
                        JAN 20, 2026 | 6:00 PM
                    </div>
                    <div className="celebration-card-subtext">Evening Celebration</div>
                </div>
            </div>
            {/* Background elements will be handled via CSS to avoid clutter */}
        </div>
    );
};

export default Celebrations;
