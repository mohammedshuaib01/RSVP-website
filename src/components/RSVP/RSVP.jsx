import React, { useState } from "react";
import "./RSVP.css";
import floralCorner from "../../assets/floral_corner.png";
import ganeshLogo from "../../assets/ganesh_logo_new.png";

const ALLOWED_PICKUP_DATES = ["2026-02-19", "2026-02-20"];

const RSVP = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [willAttend, setWillAttend] = useState("");
  const [requirePickup, setRequirePickup] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupError, setPickupError] = useState("");

  // Time handling (NO UI change)
  const [timeValue, setTimeValue] = useState("");
  const [ampmValue, setAmpmValue] = useState("");

  const handlePickupDateChange = (value) => {
    setPickupDate(value);
    if (!ALLOWED_PICKUP_DATES.includes(value)) {
      setPickupError("Pickup is available only on 19th & 20th February.");
    } else {
      setPickupError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pickupError) return;

    const formData = new FormData(e.target);

    /* ---------------- DATE FIX (Google Form expects split fields) ---------------- */
    const dateValue =
      requirePickup === "Yes"
        ? pickupDate
        : formData.get("entry.2100354446");

    if (dateValue) {
      const [year, month, day] = dateValue.split("-");
      formData.append("entry.2100354446_year", year);
      formData.append("entry.2100354446_month", month);
      formData.append("entry.2100354446_day", day);
    }

    /* ---------------- TIME FIX (Google Form expects split fields) ---------------- */
    if (timeValue) {
      const [hour, minute] = timeValue.split(":");
      formData.append("entry.1731934251_hour", hour);
      formData.append("entry.1731934251_minute", minute);
    }

    if (ampmValue) {
      formData.append("entry.1449965367", ampmValue);
    }

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
    } catch {
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
            <p className="rsvp-deadline">Kindly respond by January 22, 2026</p>
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

              {/* PHONE */}
              <div className="rsvp-form-row">
                <div className="rsvp-input-group full-width">
                  <label>Phone Number (WhatsApp)</label>
                  <input
                    type="text"
                    name="entry.687396174"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              {/* WILL ATTEND */}
              <div className="rsvp-form-row">
                <div className="rsvp-input-group full-width">
                  <label>Will You Attend?</label>
                  <select
                    name="entry.155488855"
                    value={willAttend}
                    onChange={(e) => setWillAttend(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              {/* GUEST FROM */}
              <div className="rsvp-form-row">
                <div className="rsvp-input-group full-width">
                  <label>Guest From</label>
                  <select name="entry.1810317391" required>
                    <option value="" disabled>Select</option>
                    <option value="Bride's Side">Bride's Side</option>
                    <option value="Groom's Side">Groom's Side</option>
                  </select>
                </div>
              </div>

              {willAttend === "Yes" && (
                <>
                  {/* EMAIL */}
                  <div className="rsvp-form-row">
                    <div className="rsvp-input-group full-width">
                      <label>Email (Optional)</label>
                      <input
                        type="email"
                        name="entry.1119394779"
                        placeholder="yourname@email.com"
                      />
                    </div>
                  </div>

                  {/* NUMBER OF GUESTS */}
                  <div className="rsvp-form-row">
                    <div className="rsvp-input-group full-width">
                      <label>Number of Guests</label>
                      <select name="entry.1044289067" required>
                        <option value="" disabled>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>

                  {/* PICKUP REQUIRED */}
                  <div className="rsvp-form-row">
                    <div className="rsvp-input-group full-width">
                      <label>Do you require pickup?</label>
                      <select
                        name="entry.195854687"
                        value={requirePickup}
                        onChange={(e) => setRequirePickup(e.target.value)}
                        required
                      >
                        <option value="" disabled>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>

                  {/* ARRIVAL (NO PICKUP) */}
                  {requirePickup === "No" && (
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
                          type="text"
                          name="entry.1731934251"
                          placeholder="05:45"
                          pattern="^(0?[1-9]|1[0-2]):[0-5][0-9]$"
                          onChange={(e) => setTimeValue(e.target.value)}
                          required
                        />
                      </div>

                      <div className="rsvp-input-group">
                        <label>AM / PM</label>
                        <select
                          name="entry.1449965367"
                          onChange={(e) => setAmpmValue(e.target.value)}
                          required
                        >
                          <option value="" disabled>Select</option>
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* PICKUP YES */}
                  {requirePickup === "Yes" && (
                    <>
                      <div className="rsvp-form-row">
                        <div className="rsvp-input-group full-width">
                          <label>Pickup Location</label>
                          <select
                            name="entry.1763751369"
                            value={pickupLocation}
                            onChange={(e) => setPickupLocation(e.target.value)}
                            required
                          >
                            <option value="" disabled>Select</option>
                            <option value="Kochi International Airport">Kochi International Airport</option>
                            <option value="Ernakulam Railway Station">Ernakulam Railway Station</option>
                            <option value="Kottayam Railway Station">Kottayam Railway Station</option>
                            <option value="Hotel in Kochi">Hotel in Kochi</option>
                          </select>
                        </div>
                      </div>

                      <div className="rsvp-form-row">
                        <div className="rsvp-input-group">
                          <label>Pickup Date</label>
                          <input
                            type="date"
                            name="entry.2100354446"
                            value={pickupDate}
                            onChange={(e) => handlePickupDateChange(e.target.value)}
                            required
                          />
                          {pickupError && (
                            <p className="rsvp-info-note" style={{ color: "red" }}>
                              {pickupError}
                            </p>
                          )}
                        </div>

                        <div className="rsvp-input-group">
                          <label>Pickup Time</label>
                          <input
                            type="text"
                            name="entry.1731934251"
                            placeholder="05:45"
                            pattern="^(0?[1-9]|1[0-2]):[0-5][0-9]$"
                            onChange={(e) => setTimeValue(e.target.value)}
                            required
                          />
                        </div>

                        <div className="rsvp-input-group">
                          <label>AM / PM</label>
                          <select
                            name="entry.1449965367"
                            onChange={(e) => setAmpmValue(e.target.value)}
                            required
                          >
                            <option value="" disabled>Select</option>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </select>
                        </div>
                      </div>

                      {(pickupLocation === "Ernakulam Railway Station" ||
                        pickupLocation === "Kottayam Railway Station") && (
                        <div className="rsvp-form-row">
                          <div className="rsvp-input-group full-width">
                            <label>Train Number</label>
                            <input
                              type="text"
                              name="entry.856932416"
                              placeholder="12624 / Malabar Express"
                              required
                            />
                          </div>
                        </div>
                      )}

                      {pickupLocation === "Kochi International Airport" && (
                        <div className="rsvp-form-row">
                          <div className="rsvp-input-group full-width">
                            <label>Flight Number</label>
                            <input
                              type="text"
                              name="entry.1033933510"
                              placeholder="AI-101"
                              required
                            />
                          </div>
                        </div>
                      )}

                      {pickupLocation === "Hotel in Kochi" && (
                        <div className="rsvp-form-row">
                          <div className="rsvp-input-group full-width">
                            <label>Hotel Name</label>
                            <input
                              type="text"
                              name="entry.1907632273"
                              placeholder="Taj Gateway, Kochi"
                              required
                            />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}

              <button type="submit" className="rsvp-button">
                Send RSVP
              </button>
            </form>
          ) : (
            <div className="rsvp-success-message fade-in">
              <h3>Thank You!</h3>
              <p>Your RSVP has been successfully received.</p>
            </div>
          )}
        </div>

        <img src={floralCorner} alt="" className="rsvp-floral-left" />
        <img src={floralCorner} alt="" className="rsvp-floral-right" />
      </div>
    </div>
  );
};

export default RSVP;
