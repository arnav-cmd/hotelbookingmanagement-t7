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
                    <div className="col-lg-3 col-md-6">
                        <h5>More Links</h5>
                        <ul className="link-widget p-0">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Office</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Our Store</a></li>
                            <li><a href="#">Guarantee</a></li>
                            <li><a href="#">Buy Gift Card</a></li>
                            <li><a href="#">Return Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5>Demo Links</h5>
                        <ul className="link-widget p-0">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Office</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Our Store</a></li>
                            <li><a href="#">Guarantee</a></li>
                            <li><a href="#">Buy Gift Card</a></li>
                            <li><a href="#">Return Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5>Newsletter</h5>
                        <div className="form-group mb-4">
                            <input type="email" className="form-control bg-transparent" placeholder="enter your email here" />
                            <button type="submit" className="main-btn rounded-2 mt-3 border-white text-white">Subscribe</button>
                        </div>
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
