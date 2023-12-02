import React, { useState } from 'react';
import { Typography, Box, Paper, Divider } from '@mui/material';

const RestaurantMenu = () => {
const [hoveredItem, setHoveredItem] = useState(null);
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
	{
      title: "Alla carta",
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
	{
      title: "I classici easy",
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
	{
      title: "Lab 23",
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
      {menuSections.map((section, sectionIndex) => (
        <Paper key={sectionIndex} elevation={3} sx={{ my: 2, py: 3, px: 2 }}>
          <Typography variant="h2" component="h3" gutterBottom align="center">
            {section.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom align="center" >
            {section.description}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom align="center">
            {section.note}
          </Typography>
          <Divider sx={{ my: 1 }} />
          {section.items.map((item, itemIndex) => (
            <Box key={itemIndex} sx={{ mt: 2 }}>
              <Typography 
                variant="body1" 
                style={{ fontSize: '20px', color: hoveredItem === `${sectionIndex}-${itemIndex}` ? '#718872' : 'inherit' }}
                onMouseEnter={() => setHoveredItem(`${sectionIndex}-${itemIndex}`)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.name}
              </Typography>
              {/* ... dettagli dell'elemento ... */}
              {itemIndex !== section.items.length - 1 && <Divider sx={{ my: 1 }} />}
            </Box>
          ))}
        </Paper>
      ))}
    </Box>
  );
};


export default RestaurantMenu;