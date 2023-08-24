import React from 'react';
import './contactus.css';
import { FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <section className="contact-page-sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="contact-info equal-card-height">
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fas fa-map-marked"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h2>address</h2>
                                    <span>A-17 & 18, Guindy Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032</span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-info equal-card-height">
                            <div className="contact-info-item">
                                
                    
                                <div className="contact-info-text">
                                    <h2>E-mail</h2>
                                    <span>info@travelfy.com</span>
                                    <span>travelfyperf@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-info equal-card-height">
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    
                                </div>
                                <div className="contact-info-text">
                                    <h2>office time</h2>
                                    <span>Mon - Thu 9:00 am - 4.00 pm</span>
                                    <span>Thu - Mon 10.00 pm - 5.00 pm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="contact-page-form">
                        <div className="row">
                <div className="contact-page-form">
                <div className="contact-form-header">
                            <h2>Get in Touch</h2>
                        </div>
                        
                            <form action="contact-mail.php" method="post">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="single-input-field">
                                            <input type="text" placeholder="Your Name" name="name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="single-input-field">
                                            <input type="email" placeholder="E-mail" name="email" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="single-input-field">
                                            <input type="text" placeholder="Phone Number" name="phone" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="single-input-field">
                                            <input type="text" placeholder="Subject" name="subject" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 message-input">
                                        <div className="single-input-field">
                                            <textarea placeholder="Place your Query" name="message"></textarea>
                                        </div>
                                    </div>
                                    <div className="single-input-fieldsbtn">
                                        <input type="submit" value="Send Now" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-page-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.682262838128!2d80.23695831433815!3d13.013614890839736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f6863c736e79%3A0x8f1f3e2d7ad84911!2sPerficient%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1631289739370!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ContactPage;