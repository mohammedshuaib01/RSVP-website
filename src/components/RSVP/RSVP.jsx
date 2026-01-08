import React, { useState } from "react";
import "./RSVP.css";
import floralCorner from "../../assets/floral_corner.png";
import ganeshLogo from "../../assets/ganesh_logo_new.png";

const RSVP = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [requirePickup, setRequirePickup] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSeKTXc7CtZjjnqAuUwog1BVRPVsmWOo2lqrZ6GnE1Ai53aqnQ/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="rsvp" className="wedding-section rsvp-section fade-in">
      <div className="rsvp-container">
        <div className="rsvp-card reveal reveal-up">

          {/* HEADER */}
          <div className="rsvp-header">
            <div className="ganesha-icon">
              <img src="/ganeeshlogo.png" alt="Ganesha" />
            </div>

            <h2 className="rsvp-title">Please RSVP</h2>
            <p className="rsvp-deadline">
              Kindly respond by January 22, 2026
            </p>
          </div>

          {!isSubmitted ? (
            <form className="rsvp-form" onSubmit={handleSubmit}>

              {/* FULL NAME */}
              <div className="rsvp-form-row">
                <div className="rsvp-input-group full-width">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="entry.782305259"
                    placeholder="Ex: Rahul Sharma"
                    required
                  />
                </div>
              </div>

              {/* PHONE & EMAIL */}
              <div className="rsvp-form-row">
                <div className="rsvp-input-group">
                  <label>Phone Number (WhatsApp)</label>
                  <input
                    type="text"
                    name="entry.687396174"
                    placeholder="+91 XXXXXXXXXX"
                    required
                  />
                </div>

                <div className="rsvp-input-group">
                  <label>Email (Optional)</label>
                  <input
                    type="email"
                    name="entry.1119394779"
                    placeholder="mail@domain.com"
                  />
                </div>
              </div>

              {/* ATTENDANCE & GUEST COUNT */}
              <div className="rsvp-form-row">
                <div className="rsvp-input-group">
                  <label>Will You Attend?</label>
                  <select
                    name="entry.155488855"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="Yes, I will attend">
                      Yes, I will attend
                    </option>
                    <option value="No, I cannot attend">
                      No, I cannot attend
                    </option>
                  </select>
                </div>

                <div className="rsvp-input-group">
                  <label>Number of Guests</label>
                  <select
                    name="entry.1044289067"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>

                  </select>
                </div>
              </div>

              {/* ARRIVAL DATE & TIME */}
              <div className="rsvp-form-row">
                <div className="rsvp-input-group">
                  <label>Arrival Date</label>
                  <input
                    type="date"
                    name="entry.2100354446"
                    required
                  />
                </div>

                <div className="rsvp-input-group">
                  <label>Arrival Time</label>
                  <input
                    type="time"
                    name="entry.1731934251"
                    required
                  />
                </div>
              </div>

              {/* PICKUP REQUIREMENT */}
              <div className="rsvp-form-row">
                <div className="rsvp-input-group full-width">
                  <label>Do you require pickup?</label>
                  <select
                    name="entry.PICKUP_REQUIREMENT"
                    value={requirePickup}
                    onChange={(e) => setRequirePickup(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="Yes, I need pickup">
                      Yes, I need pickup
                    </option>
                    <option value="No, I will reach the destination directly">
                      No, I will reach the destination directly
                    </option>
                  </select>
                  <p className="rsvp-info-note">
                    Pickup will be available on 19th and 20th January from Kochi Airport and Railway Stations.
                  </p>
                </div>
              </div>

              {requirePickup === "Yes, I need pickup" && (
                <>
                  {/* PICKUP LOCATION */}
                  <div className="rsvp-form-row">
                    <div className="rsvp-input-group full-width">
                      <label>Pickup Location</label>
                      <select
                        name="entry.PICKUP_LOCATION"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Select a location
                        </option>
                        <option value="Kochi International Airport">
                          Kochi International Airport
                        </option>
                        <option value="Ernakulam Railway Station">
                          Ernakulam Railway Station
                        </option>
                        <option value="Kottayam Railway Station">
                          Kottayam Railway Station
                        </option>
                        <option value="Hotel in Kochi">
                          Hotel in Kochi
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* HOTEL NAME (Conditional) */}
                  {pickupLocation === "Hotel in Kochi" && (
                    <div className="rsvp-form-row">
                      <div className="rsvp-input-group full-width">
                        <label>Hotel Name</label>
                        <input
                          type="text"
                          name="entry.HOTEL_NAME"
                          placeholder="Enter your hotel name"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* FLIGHT NUMBER (Conditional) */}
                  {pickupLocation === "Kochi International Airport" && (
                    <div className="rsvp-form-row">
                      <div className="rsvp-input-group full-width">
                        <label>Flight Number (Optional)</label>
                        <input
                          type="text"
                          name="entry.1637869251"
                          placeholder="Ex: AI-101"
                        />
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* MESSAGE */}
              {/* <div className="rsvp-form-row">
                <div className="rsvp-input-group full-width">
                  <label>Blessings / Message (Optional)</label>
                  <textarea
                    name="entry.1560362314"
                    placeholder="Your warm wishes..."
                    rows="3"
                  ></textarea>
                </div>
              </div> */}

              {/* SUBMIT */}
              <button type="submit" className="rsvp-button">
                Send RSVP
              </button>
            </form>
          ) : (
            <div className="rsvp-success-message fade-in">
              <h3>Thank You!</h3>
              <p>Your RSVP has been successfully received.</p>
              <p>We look forward to celebrating with you.</p>
            </div>
          )}
        </div>

        {/* FLORAL DECOR */}
        <img src={floralCorner} alt="" className="rsvp-floral-left" />
        <img src={floralCorner} alt="" className="rsvp-floral-right" />

        {/* BOTTOM DECOR */}
        <div className="rsvp-bottom-decoration">
          <span className="decoration-line"></span>
          <span className="decoration-symbol">❦</span>
          <span className="decoration-line"></span>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
