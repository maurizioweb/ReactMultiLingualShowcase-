import React from 'react';

const WhatsAppIcon = () => {
  const whatsappNumber = "1234567890"; // Sostituisci con il tuo numero di WhatsApp

  return (
    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" style={styles.whatsappIcon}>
      <img src="/app.png" alt="WhatsApp" style={{ width: '50px', height: '50px' }} />
    </a>
  );
};

const styles = {
  whatsappIcon: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
  },
};

export default WhatsAppIcon;