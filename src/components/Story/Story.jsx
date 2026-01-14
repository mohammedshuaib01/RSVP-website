// import React from 'react';
import './Story.css';

import React from 'react';
import './Story.css';
import storyPainting from '../../assets/story_painting.png';
import floralCorner from '../../assets/floral_corner.png';

const Story = () => {
    return (
        <div id="story" className="story-section">
            <div className="story-header reveal reveal-up">
                <h1 className="story-title">Our Story</h1>
                <div className="story-divider">
                    <span className="divider-line"></span>
                    <span className="divider-ornament">~ ❧ ~</span>
                    <span className="divider-line"></span>
                </div>
                {/* <p className="story-intro">
                   With love, tradition, and the blessings of our families, our journey begins.
                </p> */}
            </div>

            <div className="story-card reveal reveal-up">
                <div className="story-image-side reveal reveal-right">
                    <img src={storyPainting} alt="Kerala Backwaters" className="story-main-img" />
                </div>
                <div className="story-text-side reveal reveal-left">
                    <p className="story-para">
                        <span>It started with a conversation.</span>
                        <span>It continued because neither of us wanted it to end.</span>
                        <span>
                            Somewhere along the way, we became best friends—and it felt obvious this was
                            worth choosing, every day.
                        </span>
                    </p>


                    <div className="story-actions">
                        <a href="#rsvp" className="story-rsvp-button">RSVP NOW</a>
                        {/* <a href="/Akanksha & Vineet’s Wedding Invite.pdf" download className="story-download-link">INVITATION</a> */}
                    </div>
                    <img src={floralCorner} alt="" className="story-floral-corner" />
                </div>
            </div>
        </div>
    );
};

export default Story;
