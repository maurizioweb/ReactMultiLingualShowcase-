import React from 'react';
import './Footer.css'; // Assicurati che il percorso del file CSS sia corretto
import facebookIcon from './icons/facebook.png'; // Aggiungi gli import per ogni icona
import instagramIcon from './icons/instagram.png';
import tiktokIcon from './icons/tiktok.png';
import tripadvisorIcon from './icons/tripadvisor.png';
import googleIcon from './icons/google.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-socials">
                    <a href="https://www.facebook.com"><img src={facebookIcon} alt="Facebook" /></a>
                    <a href="https://www.instagram.com"><img src={instagramIcon} alt="Instagram" /></a>
                    <a href="https://www.tiktok.com"><img src={tiktokIcon} alt="TikTok" /></a>
                    <a href="https://www.tripadvisor.com"><img src={tripadvisorIcon} alt="TripAdvisor" /></a>
                    <a href="https://www.google.com"><img src={googleIcon} alt="Google" /></a>
                </div>
                <div className="footer-copy">
                    <p>&copy; 2023 Il Nome del Tuo Sito. Tutti i diritti riservati.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;