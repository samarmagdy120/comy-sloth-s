import React from "react";
import FeaturedProduct from "../components/FeaturedProduct";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div className="section-center">
      <Hero />
      <FeaturedProduct />
      <Services />
      <Contact />
    </div>
  );
};

export default HomePage;
