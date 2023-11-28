// GalleriaEng.js

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const GalleriaEng = () => {
  const elements = [
    "/restaurant.jpg", // Path to the real image
    "/restaurant2.jpg", // Path to the real image
    "/restaurant.jpg", // Path to the real image
    "/restaurant2.jpg", // Path to the real image
    // Add as many placeholders as you want
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Box id="gallery" sx={{ padding: '4rem 0', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          The Restaurant
        </Typography>
        <Typography variant="h2" style={{ color: '#EDE0D6' }} align="center" gutterBottom>
          Where Taste Meets Tradition
        </Typography>

        <Slider {...settings}>
          {elements.map((element, index) => (
            <div key={index}>
              {element ? (
                <img src={element} alt={`Image ${index}`} style={{ width: '100%', height: 'auto' }} />
              ) : (
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 200,
                  backgroundColor: '#e0e0e0',
                  border: '1px solid #ccc'
                }}>
                  {/* Insert an icon or a static image here as a placeholder */}
                </Box>
              )}
            </div>
          ))}
        </Slider>

        {/* Descriptive paragraph */}
        <Typography variant="body1" color="textPrimary" align="center" sx={{ marginTop: 4 }}>
          Welcome to our restaurant, where each dish tells a story of flavors and traditions.
          Our passion for authentic cooking and attention to detail is reflected in every creation.
          We hope to offer you an unforgettable culinary experience.
        </Typography>
      </Container>
    </Box>
  );
};

export default GalleriaEng;