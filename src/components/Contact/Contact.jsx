import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Feel free to reach out through any of these platforms!</p>
          
          <div className="contact__content">
            <div className="contact__items">
              <div className="contact__item">
                <i className="icon-envelope"></i>
                <span className="contact__item-desc">daphnenicole.fernandez05@gmail.com</span>
              </div>

              <div className="contact__item">
                <i className="icon-phone"></i>
                <span className="contact__item-desc">+69 614 744 335</span>
              </div>

              <div className="contact__item">
                <i className="icon-location-pin"></i>
                <span className="contact__item-desc">Available for Remote Work</span>
              </div>
            </div>

            <div className="contact__socials">
              <a href="https://github.com/dnfernandez05" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <i className="icon-social-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/daphne-nicole-fernandez-32592932a/" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <i className="icon-social-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/Hneeeee/" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <i className="icon-social-facebook"></i>
              </a>
              <a href="https://www.instagram.com/pinqloe/" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <i className="icon-social-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
