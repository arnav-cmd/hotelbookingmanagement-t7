import React, { useState } from 'react';
// Import other necessary imports if required
import './responsive-style.css';
import './style.css';
import sliderImage1 from './images/slider/slider1.webp';
import sliderImage2 from './images/slider/slider2.webp';
import Search2 from './searchbar';

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
                            <div className='admincaption'>
                                <h1>Welcome to Travelyf</h1><br/><br/>
                                <div><Search2/></div> 
                                <p>"A platform, where innovation meets excellence. Explore a world of possibilities as we redefine the way you experience technology."</p>   
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <div className="swiper-pagination"></div>
            </div>
          
        </section>
    );
};

export default BannerSection;
