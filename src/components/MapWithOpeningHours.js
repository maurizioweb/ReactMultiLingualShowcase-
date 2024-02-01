// MapWithOpeningHours.jsx
import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Typography, Box } from '@mui/material';
import './MapWithOpeningHours.css';
import L from 'leaflet';

const PopupMarker = ({ location }) => {
  const map = useMap();

  React.useEffect(() => {
    L.popup()
      .setLatLng(location)
      .setContent(`<b>Siamo qui!</b> Via Plinio, 15, 80045 Pompei NA`)
      .openOn(map);
  }, [map, location]);

  return null; // Non c'è bisogno di restituire un elemento JSX, poiché il popup è gestito direttamente tramite Leaflet
};

const MapWithOpeningHours = () => {
  const location = [40.749031057696506, 14.494536939267185];

  return (
    <Box id="dove-siamo">
      <Box sx={{ textAlign: 'center', my: 2 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }} className="animated-text">
          Dove Siamo
        </Typography>
        <Typography variant="h3" sx={{ color: '#EDE0D6', fontFamily: 'Montserrat, sans-serif' }} align="center" gutterBottom className="animated-text">
          Vivi l'Esperienza
        </Typography>
      </Box>

      <MapContainer center={location} zoom={13} style={{ height: '400px', width: '100%', maxWidth: '1500px', margin: '0 auto' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <PopupMarker location={location} />
      </MapContainer>
    </Box>
  );
};

export default MapWithOpeningHours;