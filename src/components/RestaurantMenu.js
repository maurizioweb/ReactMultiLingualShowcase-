import React from 'react';
import { Typography, Box, Paper, Divider } from '@mui/material';

const RestaurantMenu = () => {
  const menuSections = [
    {
      title: "I classici '23",
      description: "Menu degustazione. €250. Bevande escluse.",
      note: "I menù degustazione per la loro complessità si intendono possibilmente per tutto il tavolo.",
      items: [
        { name: "LOAKER DI FEGATO GRASSO E SHOT DI KIR ROYALE", detail: "" },
        { name: "RICCI GHIACCIATI, MANDARINO, ZAFFERANELLA", detail: "" },
        { name: "GAMBERO ROSSO, BUCCIA DI ARANCIO, ZENZERO, CERVELLA DI GAMBERO E CANNELLA", detail: "" },
        // Aggiungi qui altri piatti...
      ],
    },
    // Aggiungi qui altre sezioni...
  ];

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', my: 4 }}>
      {menuSections.map((section, index) => (
        <Paper key={index} elevation={3} sx={{ my: 2, py: 3, px: 2 }}>
          <Typography variant="h5" component="h3" gutterBottom>
            {section.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {section.description}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {section.note}
          </Typography>
          <Divider sx={{ my: 1 }} />
          {section.items.map((item, itemIndex) => (
            <Box key={itemIndex} sx={{ mt: 2 }}>
              <Typography variant="body1">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.detail}
              </Typography>
            </Box>
          ))}
        </Paper>
      ))}
    </Box>
  );
};

export default RestaurantMenu;