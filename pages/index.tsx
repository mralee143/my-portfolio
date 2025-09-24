import AboutMe from "@/components/AboutMe";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Price from "@/components/Price";
import Project from "@/components/Project";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  //animation setup
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  });

  return (
    <div className="overflow-hidden">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="price">
        <Price />
      </div>
      <div id="reviews">
        <Reviews />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
