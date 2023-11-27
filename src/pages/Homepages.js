// Homepages.js
import React from 'react';
import ResponsiveAppBar from '../components/Header';
import HeroSection from '../components/HeroSection';
import ChiSiamo from '../components/ChiSiamo';
import Galleria from '../components/galleria';
import TestimonialSlider from '../components/testimonial';
import MapWithOpeningHours from '../components/MapWithOpeningHours';
import OrariEContatti from '../components/OrariEContatti';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <HeroSection />
      <ChiSiamo />
      <Galleria />
      <TestimonialSlider />
      <MapWithOpeningHours location={{ lat: 42.3601, lng: -71.0589 }} />
      <OrariEContatti />
      <Footer />
    </div>
  );
};

export default HomePage;
