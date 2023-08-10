import React,{Component} from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaUser, FaLuggageCart, FaInfoCircle, FaSignInAlt } from 'react-icons/fa';
import { FaIconYouWantToUse } from 'react-icons/fa';

export default class Aboutus extends React.Component{
  render(){
    return(
      <div className="aboutusdiv">
          <h1 style={{color:'azure'}}>About Us</h1>
          <p style={{color:'azure'}}>
            Welcome to our hotel booking platform! 
            We're here to provide you with the best travel experience.
            Whether you're planning a relaxing vacation, a business trip, 
            or an adventurous getaway, we have the perfect accommodations for you.
          </p>
        <br/>
        <div className='card'>
          <div className='cardcontainer'>
            <h2>Our Team</h2>
            <p>
              Meet our dedicated team of professionals who are passionate about making your stay unforgettable.
              From customer support to finding the best deals, our team is here to assist you every step of the way.
            </p>
          </div>
        </div>
    <br/>
    <div className='card-2'>
      <div className='cardcontainer'>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide you with the best hotel booking experience possible. We're committed to offering a wide range of accommodations, competitive prices,
          and exceptional customer service. Your satisfaction is our top priority.
        </p>
      </div>
    </div>
    <div className='card-3'>
      <div className='cardcontainer'>
      <h2>Why Choose Us</h2>
      <ul>
        <li>Extensive selection of hotels and accommodations</li>
        <li>Best price guarantee</li>
        <li>User-friendly interface for easy booking</li>
        <li>24/7 customer support</li>
        <li>Secure payment options</li>
      </ul>
      </div>
    </div>
    <br/>
    <div className='card-4'>
      <div className='cardcontainer'>
      <h2>Join Our Community</h2>
      <p>
        Stay updated with the latest travel news, deals, and promotions by subscribing to our newsletter.
        Join our social media channels to connect with fellow travelers and share your experiences.
      </p>
      </div>
    </div>
    <button>Back to home</button>
    </div>
    );
  }
}
