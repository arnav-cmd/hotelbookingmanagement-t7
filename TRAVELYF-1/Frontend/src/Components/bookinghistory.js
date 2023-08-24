import React from 'react';
import './bookinghistory.css';

const EventCard = ({ imageUrl, tagText, socialImages }) => (
  <div className="card-media">
    {/* media container */}
    <div className="card-media-object-container">
      <div className="card-media-object" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <span className="card-media-object-tag subtle">{tagText}</span>
      <ul className="card-media-object-social-list">
        {socialImages.map((image, index) => (
          <li key={index}>
            <img src={image} className="" alt={`Profile ${index}`} />
          </li>
        ))}
        <li className="card-media-object-social-list-item-additional">
          <span>+{socialImages.length - 2}</span>
        </li>
      </ul>
    </div>
    {/* body container */}
    <div className="card-media-body">
      <div className="card-media-body-top">
        <span className="subtle"></span>
        <div className="card-media-body-top-icons u-float-right">
          <svg fill="#888888" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            {/* ... (SVG path data) ... */}
          </svg>
          {/* ... (Second SVG path data) ... */}
        </div>
      </div>
      <span className="card-media-body-heading">HOTEL NAME:</span>
      <div className="card-media-body-supporting-bottom">
        <span className="card-media-body-supporting-bottom-text subtle">Price Paid:</span>
        <span className="card-media-body-supporting-bottom-text subtle u-float-right">Booked On</span>
      </div>
      <div className="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
        <span className="card-media-body-supporting-bottom-text subtle"></span>
        <a href="#/" className="card-media-body-supporting-bottom-text card-media-link u-float-right">VIEW BOOKING</a>
      </div>
    </div>
  </div>
);

const EventCardList = () => {
  return (
    <div className="container-bookinghistory">
      <EventCard
        imageUrl="https://s9.postimg.cc/y0sfm95gv/prince_f.jpg"
        tagText="Selling Fast"
        socialImages={[
          "https://s10.postimg.cc/3rjjbzcvd/profile_f.jpg",
          "https://s16.postimg.cc/b0j0djh79/profile_0_f.jpg",
          "https://s13.postimg.cc/c5aoiq1w7/stock3_f.jpg"
        ]}
      />

      <EventCard
        imageUrl="https://s16.postimg.cc/x8m99xtgl/tyco_f.jpg"
        tagText=""
        socialImages={[
          "https://s13.postimg.cc/c5aoiq1w7/stock3_f.jpg"
        ]}
      />
    </div>
  );
};

export default EventCardList;
