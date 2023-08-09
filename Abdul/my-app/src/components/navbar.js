import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLuggageCart, FaInfoCircle, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <Link to="/" className="navbar-brand text-white">
        Hotel Booking
      </Link>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/about" className="nav-link text-white">
              <FaInfoCircle className="mr-1" /> About Us
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/Signup" className="nav-link text-white">
              <FaUser className="mr-1" /> Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/manage-booking" className="nav-link text-white">
              <FaLuggageCart className="mr-1" /> Manage Booking
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/SignupPage" className="nav-link text-white">
              <FaSignInAlt className="mr-1" /> Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
