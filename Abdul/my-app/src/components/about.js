import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const AboutUsPage = () => {
  return (
    <div className="container mt-5">
      <h1>About Us</h1>
      <p>
        Welcome to our hotel booking platform! We're here to provide you with the best travel experience.
        Whether you're planning a relaxing vacation, a business trip, or an adventurous getaway, we have the perfect accommodations for you.
      </p>
      
      <h2>Our Team</h2>
      <p>
        Meet our dedicated team of professionals who are passionate about making your stay unforgettable.
        From customer support to finding the best deals, our team is here to assist you every step of the way.
      </p>
      
      <h2>Contact Us</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5>Customer Support</h5>
              <FaPhone size={40} />
              <p>Call us: +1-123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5>Email</h5>
              <FaEnvelope size={40} />
              <p>Email us: support@example.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5>Visit Us</h5>
              <FaMapMarkerAlt size={40} />
              <p>1234 Main Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>
      
      <h2>Our Mission</h2>
      <p>
        Our mission is to provide you with the best hotel booking experience possible. We're committed to offering a wide range of accommodations, competitive prices,
        and exceptional customer service. Your satisfaction is our top priority.
      </p>
      
      <h2>Why Choose Us</h2>
      <ul>
        <li>Extensive selection of hotels and accommodations</li>
        <li>Best price guarantee</li>
        <li>User-friendly interface for easy booking</li>
        <li>24/7 customer support</li>
        <li>Secure payment options</li>
      </ul>
      
      <h2>Join Our Community</h2>
      <p>
        Stay updated with the latest travel news, deals, and promotions by subscribing to our newsletter.
        Join our social media channels to connect with fellow travelers and share your experiences.
      </p>
      
      {/* Add more content and functionalities as needed */}
    </div>
  );
};

export default AboutUsPage;
