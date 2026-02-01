import React from 'react';
import Appbar from '../shared/Appbar';
import Footer from '../shared/Footer';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Appbar />
      <main className="relative">
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
