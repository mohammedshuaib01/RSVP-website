import React from 'react';
import './Footer.css';
import floralCorner from '../../assets/floral_corner.png';

const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer-section">
            <div className="footer-content reveal reveal-up">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src="/ganeeshlogo.png" alt="Ganesha" className="footer-ganesha" />
                        <div className="footer-monogram">
                            <span className="monogram-text">A & V</span>
                        </div>
                    </div>

                    <h2 className="footer-headline">We can't wait to celebrate with you!</h2>

                    <div className="footer-nav">
                        <button onClick={() => scrollToSection('story')} className="footer-link">Our Story</button>
                        <button onClick={() => scrollToSection('celebrations')} className="footer-link">Celebrations</button>
                        <button onClick={() => scrollToSection('rsvp')} className="footer-link">RSVP</button>
                        {/* <a href="/Akanksha & Vineet’s Wedding Invite.pdf" download className="footer-link download-invitation">Download Invitation</a> */}
                    </div>
                </div>

                <div className="footer-divider">
                    <span className="decoration-line"></span>
                    <span className="decoration-symbol">❦</span>
                    <span className="decoration-line"></span>
                </div>

                <div className="footer-bottom">
                    <div className="footer-socials">

                    </div>
                    <div className="footer-info">
                        <p>© 2026 Akanksha & Vineet Wedding</p>
                        <p className="made-with-love">Made with Love </p>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
