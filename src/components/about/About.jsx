import React from "react";
import "./About.css";
import Image from "../../asset/aqna.jpg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Aspiring junior front-end developer excited to apply my skills,
              passion, and creativity in a real-world team setting.
            </p>
            <a href="/resume.pdf" className="btn">
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Separate Skills Section */}
      <div className="about__skills-section">
        <h3 className="skills__section-title">Technical Skills</h3>
        
        <div className="skills__container">
          <div className="skill__card">
            <div className="skill__icon">
              <i className="icon-code"></i>
            </div>
            <div className="skill__content">
              <h4 className="skill__title">Frontend Development</h4>
              <p className="skill__description">React, JavaScript, HTML5, CSS3</p>
              <div className="skill__level advanced">Advanced</div>
            </div>
          </div>

          <div className="skill__card">
            <div className="skill__icon">
              <i className="icon-magic-wand"></i>
            </div>
            <div className="skill__content">
              <h4 className="skill__title">UI/UX Design</h4>
              <p className="skill__description">Figma, Adobe XD, Responsive Design</p>
              <div className="skill__level expert">Advanced</div>
            </div>
          </div>

          <div className="skill__card">
            <div className="skill__icon">
              <i className="icon-organization"></i>
            </div>
            <div className="skill__content">
              <h4 className="skill__title">Database & Backend</h4>
              <p className="skill__description">MySQL, MongoDB, Node.js</p>
              <div className="skill__level intermediate">Intermediate</div>
            </div>
          </div>

          <div className="skill__card">
            <div className="skill__icon">
              <i className="icon-rocket"></i>
            </div>
            <div className="skill__content">
              <h4 className="skill__title">Tools & Workflow</h4>
              <p className="skill__description">Git, VS Code, Webpack, NPM</p>
              <div className="skill__level advanced">Advanced</div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
