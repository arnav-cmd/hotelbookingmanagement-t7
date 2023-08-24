import React, { useState } from 'react';
// Import other necessary imports if required
import './responsive-style.css';
import './style.css';
import sliderImage1 from './images/slider/slider1.webp';
import sliderImage2 from './images/slider/slider2.webp';

const BannerSection = () => {
    const [guests, setGuests] = useState('');

    const handleGuestsChange = (event) => {
        const inputGuests = event.target.value;
        if (/^\d*$/.test(inputGuests)) {
            setGuests(inputGuests);
        }
    };

    return (
        <section id="home" className="banner-wrapper p-0">
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide" style={{ backgroundImage: `url(${sliderImage1})` }}>
                        <div className="slide-caption text-center">
                            <div>
                                <h1>Welcome to Travelyf</h1>
                                <p>"A platform, where innovation meets excellence. Explore a world of possibilities as we redefine the way you experience technology."</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="swiper-pagination"></div>
            </div>
            <div className="container booking-area">
                <form className="row">
                    <div className="col-lg mb-3 mb-lg-0">
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Date"
                        />
                    </div>
                    <div className="col-lg mb-3 mb-lg-0">
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Date"
                        />
                    </div>
                    <div className="col-lg mb-3 mb-lg-0">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                        />
                    </div>
                    <div className="col-lg mb-3 mb-lg-0">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Guests"
                            value={guests}
                            onChange={handleGuestsChange}
                        />
                    </div>
                    <div className="col-lg mb-3 mb-lg-0">
                        <button type="submit" className="main-btn rounded-2 px-sm-2">Check Availability</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default BannerSection;
