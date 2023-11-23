import React from 'react';
import './Footer.css'; // Assicurati che il percorso del file CSS sia corretto

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Contatti</h4>
                    <p>Tel: 123-456-7890</p>
                    <p>Email: info@example.com</p>
                </div>
                <div className="footer-section">
                    <h4>Seguici</h4>
                    <a href="https://www.facebook.com">Facebook</a>
                    <a href="https://www.twitter.com">Twitter</a>
                    <a href="https://www.instagram.com">Instagram</a>
                </div>
                <div className="footer-section">
                    <p>&copy; 2023 Il Nome del Tuo Sito. Tutti i diritti riservati.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;