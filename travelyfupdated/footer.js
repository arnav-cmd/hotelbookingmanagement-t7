import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGooglePlusG, faVimeoV } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section id="contact" className="footer_wrapper mt-3 mt-md-0 pb-0">
            <div className="container pb-3">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <h5>Head Quarters</h5>
                        <p className="ps-0">A-17 & 18, Guindy Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032</p>
                        <div className="contact-info">
                            <ul className="list-unstyled">
                                <li><a href="#"><FontAwesomeIcon icon={faHome} className="me-3" /> Perficient, Chennai, India</a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faPhone} className="me-3" /> +91 7094787742</a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faEnvelope} className="me-3" /> arnav1472@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 text-center">
                       <h1><p className="all-rights-reserved">All Rights Reserved &copy; 2023</p></h1> 
                    </div>
                    <div className="col-lg-3 col-md-6 text-end">
                        <h5>Stay Connected</h5>
                        <ul className="social-network d-flex align-items-center p-0">
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faVimeoV} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
