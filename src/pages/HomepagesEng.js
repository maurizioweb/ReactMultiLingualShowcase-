// HomepagesEng.js
import React from 'react';
import ResponsiveAppBarEng from '../components/HeaderEng';
import HeroSectionEng from '../components/HeroSectionEng';
import WhoWeAre from '../components/WhoWeAre';
import GalleryEng from '../components/GalleryEng';
import TestimonialSliderEng from '../components/TestimonialSliderEng';
import MapWithOpeningHoursEng from '../components/MapWithOpeningHoursEng';
import OpeningHoursAndContacts from '../components/OpeningHoursAndContacts';
import Footer from '../components/Footer';

const HomepagesEng = () => {
  return (
    <div>
      <ResponsiveAppBarEng />
      <HeroSectionEng />
      <WhoWeAre />
      <GalleryEng />
      <TestimonialSliderEng />
      <MapWithOpeningHoursEng location={{ lat: 42.3601, lng: -71.0589 }} />
      <OpeningHoursAndContacts />
      <Footer />
    </div>
  );
};

export default HomepagesEng;