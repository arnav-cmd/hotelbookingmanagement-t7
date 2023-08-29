import React from 'react';
import AdminNavbar from './adminnavbar';
import sliderImage1 from './images/slider/slider1.webp';
export default function AdminHome(){
    return(
        <>
        <AdminNavbar/>
        <section id="home" className="banner-wrapper p-0">
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide" style={{ backgroundImage: `url(${sliderImage1})` }}>
                        <div className="slide-caption text-center">
                            <div>
                                <h1 className='admincaption'>Welcome to Travelyf</h1><br/><br/>
                                <p>"A platform, where innovation meets excellence. Explore a world of possibilities as we redefine the way you experience technology."</p>   
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <div className="swiper-pagination"></div>
            </div>
          
        </section>
        </>
    )
}