import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";

const App = () => {
  useEffect(() => {
    document.title = "Daphne Nicole Fernandez Portfolio";
  }, []);
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <ScrollToTop />
      </main>
    </>
  );
};

export default App;
