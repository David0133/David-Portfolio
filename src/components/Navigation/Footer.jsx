import React from 'react';
import { faGithub,faLinkedin,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        
            <div className="container-fluid fixed-bottom bg-gray-700 py-0 w-full">
                <footer className="d-flex flex-wrap justify-between items-center py-3  w-full">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            
                        </a>
                        <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="https://github.com/David0133" target='_blank'><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/david-charles-9a3b51241" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li className="ms-3"><a className="text-muted" href="https://whatsapp.com/channel/0029VaZNaiaEVccITgRzz10H" target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                    </ul>
                </footer>
            </div>
        
    );
};

export default Footer;