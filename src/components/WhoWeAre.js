import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  const textAnimation = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const imageAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <Box id="who-we-are" sx={{ padding: '4rem 0', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Column for titles and image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={imageAnimation}
            >
              <Typography variant="h4" color="textPrimary" gutterBottom align="left">
                Who We Are
              </Typography>
              <Typography variant="h2" style={{ color: '#EDE0D6' }} gutterBottom align="left">
                The Varnellis
              </Typography>
              <Box
                sx={{
                  height: '600px',
                  backgroundColor: 'grey',
                }}
              >
                {/* Insert your image here */}
                <img src="varnelli.jpg" alt="The Varnellis" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
              </Box>
            </motion.div>
          </Grid>
          {/* Column for the paragraph */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={textAnimation}
            >
              <Box sx={{ paddingTop: '9rem' }}>
                <Typography variant="body1" color="textSecondary">
                  "We are a team of passionate culinary professionals, united by the mission to offer exceptional and unforgettable gastronomic experiences. In our restaurant, quality is at the heart of everything we do, from the careful selection of ingredients to the care in preparing each dish. We are committed to innovation, constantly experimenting with new culinary techniques and flavor combinations to surprise and delight our guests.
                  
                  Our cuisine is based on the speed of serving delicious dishes, without ever compromising on quality. Each member of our team is dedicated to providing excellent service, ensuring that every experience at our restaurant is unique and memorable. We work closely with local suppliers to ensure that each ingredient reflects freshness and sustainability, strengthening our commitment to quality and the environment.
                  
                  We are dedicated to the continuous pursuit of excellence not only in the kitchen but also in the environment and service. Our strategy focuses on creating a welcoming and relaxing atmosphere, where every customer can feel at home. We work together to create personalized experiences, carefully responding to the preferences and needs of each of our guests.
                  
                  In our restaurant, every meal is a work of art, and every visit is an adventure in the world of flavors. We strive to maintain high standards of excellence and innovation to make every moment spent with us an unforgettable and enriching experience. Come and discover the passion and mastery that lie behind each of our dishes, and let yourself be transported on a culinary journey that will stimulate all your senses."
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhoWeAre;