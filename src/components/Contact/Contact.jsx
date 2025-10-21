import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Send me an email or give me a call to get in touch.</p>
          
          <div className="contact__items">
            <div className="contact__item">
              <i className="icon-envelope"></i>
              <span className="contact__item-desc">  daphnenicole.fernandez05@gmail.com</span>
            </div>

            <div className="contact__item">
              <i className="icon-phone"></i>
              <span className="contact__item-desc"> +69 614 744 335</span>
            </div>

            <div className="contact__item">
              <i className="icon-location-pin"></i>
              <span className="contact__item-desc"> Available for Remote Work</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              className="contact__form-input"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
    