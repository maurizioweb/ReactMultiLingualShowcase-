import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Galleria = () => {
  const elementi = [
    "/ristorante1.jpg",
    "/ristorante2.jpg",
    "/ristorante3.jpg",
    "/ristorante4.jpg",
    "/ristorante5.jpg",
    "/ristorante6.jpg",
    "/ristorante7.jpg",
    "/ristorante8.jpg",
    "/ristorante9.jpg",
    "/ristorante10.jpg",
    "/ristorante11.jpg",
    "/ristorante12.jpg",
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
    <>
     <style>
    {`
      .galleria-container * {
        font-family: 'Montserrat', sans-serif;
      }

      .slick-dots li button:before {
        font-size: 16px;
        color: #000;
      }

      .slick-dots li.slick-active button:before {
        color: #fff;
      }

      .slick-dots {
        margin-top: 10px; /* Riduci questo valore per diminuire lo spazio tra le immagini e i pallini */
      }

      .galleria-img {
        width: 95%; /* Imposta la larghezza delle immagini */
        max-height: 500px; /* Limita l'altezza delle immagini */
        object-fit: cover; /* Mantiene il rapporto di aspetto */
        margin: 0 auto; /* Centra le immagini */
        padding: 0; /* Riduci o rimuovi il padding per diminuire lo spazio attorno alle immagini */
      }
    `}
  </style>
      <Box id="galleria" sx={{ padding: '4rem 0', backgroundColor: '#f5f5f5' }} className="galleria-container">
        <Container maxWidth="xxl">
          <Typography variant="h4" align="center" gutterBottom>
            Il Ristorante
          </Typography>
          <Typography variant="h3" style={{ color: '#EDE0D6' }} align="center" gutterBottom>
            Dove il gusto è tradizione
          </Typography>

          <Slider {...settings}>
            {elementi.map((elemento, index) => (
              <div key={index}>
                <img src={elemento} alt={`Immagine ${index}`} className="galleria-img" />
              </div>
            ))}
          </Slider>

          <Typography variant="body1" color="textPrimary" align="left" sx={{ marginTop: 4, lineHeight: '1.6' }}>
            “La nostra cucina è più di un mestiere; è la manifestazione tangibile di anni di studio e di esperienza. Una storia raccontata attraverso sapori tradizionali e combinazioni innovative. Ci immergiamo con passione nell'arte della preparazione, usando solo ingredienti genuini e selezionati.

Ogni piatto è il risultato di ore di lavoro, dall'ispirazione creativa al piacere sensoriale che regala. Ogni boccone è un viaggio attraverso la nostra dedizione per eccellere, per offrirvi un'esperienza gastronomica che va al di là del semplice mangiare.

Siamo fieri di condividere con voi non solo il nostro cibo, ma anche il cuore e l'anima che abbiamo investito. Accetta l'invito a vivere la passione nei nostri piatti, dove ogni morso è un tributo alla bellezza di creare e condividere.”

”
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Galleria;