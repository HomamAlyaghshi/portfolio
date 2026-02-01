import React from 'react';
import Appbar from './../shared/Appbar';
import Footer from './../shared/Footer';
import Card from '../components/Card';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Appbar />
      <main className="relative">
        <Card />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
