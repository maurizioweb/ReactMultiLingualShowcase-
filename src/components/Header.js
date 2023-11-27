// Header.js
import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Button, Container, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const menuItems = ['Chi siamo', 'ristorante', 'MENU', 'dicono di noi', 'dove siamo', 'HOTEL'];

const ResponsiveAppBar = () => {
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const [headerStyle, setHeaderStyle] = useState({
    background: 'transparent',
    boxShadow: 'none',
  });
  const navigate = useNavigate(); // Crea un'istanza di useNavigate

  const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMenuItemClick = (menuItem) => {
    switch(menuItem.toLowerCase()) {
      case 'chi siamo':
        scrollToSection('chi-siamo');
        break;
      case 'ristorante':
        scrollToSection('galleria');
        break;
      case 'dicono di noi':
        scrollToSection('testimonianze');
        break;
      case 'dove siamo':
        scrollToSection('dove-siamo');
        break;
      case 'menu':
        navigate('/nuova-pagina'); // Aggiorna con il percorso della tua pagina interna
        break;
      case 'hotel':
        window.open('https://www.uliassi.com', '_blank'); // Sostituisci con il tuo URL esterno
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      if (window.scrollY > scrollThreshold) {
        setHeaderStyle({
          background: '#333',
          boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
        });
      } else {
        setHeaderStyle({
          background: 'transparent',
          boxShadow: 'none',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      PaperProps={{
        style: {
          maxHeight: '100vh',
          width: '100%',
          backgroundColor: '#333',
        },
      }}
    >
      {menuItems.map((menuItem, index) => (
        <MenuItem key={index} onClick={() => handleMenuItemClick(menuItem)} sx={{ color: 'white', backgroundColor: index === menuItems.length - 1 ? 'rgba(0, 0, 0, 0.2)' : 'inherit' }}>
          {menuItem}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <AppBar position="fixed" style={headerStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: '100px', justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: 'flex' }}>
            <img src="/Logotipo.png" alt="Logotipo" style={{ height: '64px' }} />
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((menuItem, index) => (
              <Button 
                key={index} 
                sx={{ 
                  my: 2, 
                  color: '#EDE0D6', 
                  display: 'block', 
                  textTransform: 'none', 
                  fontSize: '1.25rem',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: '-3px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#FFF',
                    transition: 'width 0.3s ease-in-out'
                  },
                  '&:hover::after': {
                    width: '100%'
                  }
                }}
                onClick={() => handleMenuItemClick(menuItem)}
              >
                {menuItem}
              </Button>
            ))}
          </Box>
          <IconButton 
            size="large" 
            aria-label="menu" 
            aria-controls="menu-appbar" 
            aria-haspopup="true" 
            onClick={handleMobileMenuOpen} 
            color="inherit" 
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      {renderMobileMenu}
    </AppBar>
  );
};

export default ResponsiveAppBar;