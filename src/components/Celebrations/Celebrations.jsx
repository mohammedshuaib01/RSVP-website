import React from 'react';
import './Celebrations.css';
import dividerImg from '../../assets/celebration-divider.png';

const events = [
    {
        title: "Tropical Paradise",

        date: "February 19, 2026",
        eventName: "Welcome Lunch & Mehendi",
        time: "1:00 pm onwards",
        venue: "Rythm Kumarakom",
        dressCode: "Camouflage with the Nature! Think shades of green",
        theme: "tropical"
    },
    {
        title: "Cocktails & Couture",

        date: "February 19, 2026",
        eventName: "Ring Ceremony & Cocktail",
        time: "6:30 pm onwards",
        venue: "Rythm Kumarakom",
        dressCode: "Bring on the bling! Think sequins & pearls",
        theme: "cocktail"
    },
    {
        title: "Turmeric Tales",

        date: "February 20, 2026",
        eventName: "Haldi",
        time: "10:30 am onwards",
        venue: "Rythm Kumarakom",
        dressCode: "Step into the sunshine! Think shades of yellow & orange",
        theme: "haldi"
    },
    {
        title: "Sunset & Vows",

        date: "February 20, 2026",
        eventName: "Wedding Ceremony",
        time: "5:30 pm onwards",
        venue: "Backwater Ripples Kumarakom",
        dressCode: "Go classic with traditionals & bring on the best accessory, your smile!",
        theme: "wedding"
    }
];


const Celebrations = () => {
    return (
        <div id="celebrations" className="celebrations-section fade-in">
            <div className="celebrations-header-content reveal reveal-up">
                <div className="celebration-logo">
                    <img src="/ganeeshlogo.png" alt="Ganesha" />
                </div>
                <h1 className="celebrations-title">The Celebrations</h1>
                <div className="celebrations-divider-container">
                    <img src={dividerImg} alt="Decorative Divider" className="celebrations-divider-img" />
                </div>
            </div>

            <div className="celebration-cards-container">
                {events.map((event, index) => (
                    <div key={index} className={`celebration-card reveal reveal-up reveal-stagger-${index + 1} theme-${event.theme}`}>
                        <div className="celebration-card-inner">
                            <h4 className="event-tagline">{event.tagline}</h4>
                            <h2 className="event-title">{event.title}</h2>
                            <div className="event-date-main">{event.date}</div>
                            <div className="event-details-row">
                                <span className="event-name">{event.eventName}</span>
                                <span className="event-time">{event.time}</span>
                            </div>
                            {event.venue && (
                                <div className="event-venue">
                                    <span className="venue-label">Venue:</span> {event.venue}
                                </div>
                            )}
                            <div className="event-dress-code">
                                <span className="dress-code-label">Dress Code:</span> {event.dressCode}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Celebrations;
