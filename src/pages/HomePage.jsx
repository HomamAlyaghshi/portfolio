import React from "react";
import "../style.css";
import HeroSections from "../components/HeroSections";
import SocialMedia from "../components/SocialMedia";
import Footer from "../shared/Footer";
import Appbar from "../shared/Appbar";
const HomePage = () => {
  return (
    <div className="h-full ">
      <Appbar />
      <HeroSections />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default HomePage;
