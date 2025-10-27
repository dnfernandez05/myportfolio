import React from "react";
import "./Home.css";
import Me from "../../asset/aqna.jpg"; // or wherever your avatar image is located
import HeaderSocials from "./HeaderSocials";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <div className="home__img-wrapper">
          <img src={Me} alt="" className="home__img" />
          <div className="img-border-effect"></div>
        </div>
        <h1 className="home__name"> Daphne Fernandez</h1>
        <span className="home__education">Front-End Developer / Graphic Designer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Hire Me!
        </a>
      </div>
    </section>
  );
};

export default Home;



