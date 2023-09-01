import React from 'react';
import './contactus.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './navbar';
import { useState } from 'react';

const ContactPage = () => {
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
  const mobileRegex = /^[6-9]\d{9}$/;
  const [Email, setEmail] = useState("");
  const [Mobile,setMobile]=useState("");
 
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!emailRegex.test(Email)) {
      // setSignupError("Invalid email address.");
      toast.error('Enter valid Email Address',{
        position:toast.POSITION.BOTTOM_RIGHT,
        autoClose:1000
      })
    }
    else if (!mobileRegex.test(Mobile)) {
      // setSignupError("Invalid mobile number.");
      toast.error('Enter valid Mobile Number',{
        position:toast.POSITION.BOTTOM_RIGHT,
        autoClose:1000
      })
    }
    else{
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        subject: e.target.subject.value,
        message: e.target.message.value
      };
  
      try {
        await axios.post('http://localhost:4000/contact/submit', formData);
        // alert('Message submitted successfully!');
        toast.success('Query Submitted',{
          position:toast.POSITION.BOTTOM_RIGHT,
          autoClose:1000
        })

      } catch (error) {
        // alert('An error occurred while submitting the message.');
        toast.error('Query Not Sent',{
          position:toast.POSITION.BOTTOM_RIGHT,
          autoClose:1000
        })
      }
    }
    
  };

  return (
    <>
    <Navbar/>
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
                                    <span>Booking.Travelyf@gmail.com</span>
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
                                    <span>Mon - Fri 9:00 am - 4.00 pm</span>
                                    <span>Sat - Sun 10.00 am - 5.00 pm</span>
                                </div>
                            </div>
            </div>
          </div>
          
          {/* Office Time */}
          <div className="col-md-4">
            {/* ... */}
          </div>
        </div>
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-8">
            <div className="contact-page-form">
              <div className="row">
                <div className="contact-page-form">
                  <div className="contact-form-header">
                    <h2>Get in Touch</h2>
                  </div>
                  <form onSubmit={handleFormSubmit}>
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        {/* Your Name */}
                        <div className="single-input-field">
                          <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            required
                            pattern="[A-Za-z ]+"
                            title="Please enter only alphabetic characters"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        {/* Your Email */}
                        <div className="single-input-field">
                          <input
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            onChange={(e)=>{
                              setEmail(e.target.value)
                            }}

                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        {/* Your Phone Number */}
                        <div className="single-input-field">
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            name="phone"
                            required
                            maxLength={10}
                            onChange={(e)=>{
                              setMobile(e.target.value)
                            }}
                          />  
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        {/* Subject */}
                        <div className="single-input-field">
                          <input
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            required
                            pattern="[A-Za-z ]+"
                            title="Please enter only alphabetic characters"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 message-input">
                        {/* Message */}
                        <div className="single-input-field">
                          <textarea
                            placeholder="Place your Query"
                            name="message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="single-input-fieldsbtn">
                        {/* Submit Button */}
                        <input type="submit" value="Send Now" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Google Map */}
          <div className="col-md-4">
            <div className="contact-page-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
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
    </>
    
  );
};

export default ContactPage;
