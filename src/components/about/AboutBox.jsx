import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon i icon-fire"></i>
        <div>
          <h3 className="about__title">4</h3>
          <span className="about__subtitle">Project Completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon i icon-energy"></i>
        <div>
          <h3 className="about__title">6830</h3>
          <span className="about__subtitle">Cup of Coffee</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon i icon-star"></i>
        <div>
          <h3 className="about__title">0</h3>
          <span className="about__subtitle">Satisfied Clients</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon i icon-layers"></i>
        <div>
          <h3 className="about__title">1</h3>
          <span className="about__subtitle">Ongoing Project</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
