import React from "react";
import "../style.css";
import HeroSections from "../components/HeroSections";
import SocialMedia from "../components/SocialMedia";
import Footer from "../shared/Footer";
import Appbar from "../shared/Appbar";

const HomePage = () => {
  return (
    <div className="h-full min-h-screen bg-base-100">
      <Appbar />
      <main className="relative">
        <HeroSections />
        <SocialMedia />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
