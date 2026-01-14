import React from 'react';
import './Preloader.css';
import coupleLogo from '/AVlogo.png'; // Using the public path for consistency with Hero

const Preloader = ({ fadeOut }) => {
    return (
        <div className={`preloader-overlay ${fadeOut ? 'fade-out' : ''}`}>
            <div className="preloader-content">
                <div className="preloader-logo-wrapper">
                    <img src={coupleLogo} alt="Akansha & Vineet" className="preloader-logo" />
                </div>
                <div className="preloader-text">
                    <p className="loading-text">Welcome to Akanksha & Vineet's Wedding</p>
                    <div className="loading-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
