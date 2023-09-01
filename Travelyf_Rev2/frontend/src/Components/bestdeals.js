import React from 'react';

import room1Image from './images/room/room1.webp'; 
import room2Image from './images/room/room2.webp'; 
import room3Image from './images/room/room3.webp'; 
import './responsive-style.css';
import './style.css';

const RoomsSection = () => {
    return (
        <section id="rooms" className="rooms_wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 section-title text-center mb-5">
                        
                        <h3>Exciting Deals on Travelyf</h3>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-md-4 mb-4 mb-lg-0">
                        <div className="room-items">
                            <img src={room1Image} className="img-fluid" alt="Room 1" />
                            <div class="room-item-wrap">
                            <div class="room-content">
                                <h5 class="text-white mb-lg-5 text-decoration-underline">Taj Banjara, Hyderabad</h5>
                                <p class="text-white">Discover five of our favourite dresses from our new collection
                                    that are destined to be worn and loved immediately</p>
                                <p class="text-white fw-bold mt-lg-4">12000 / Per Night</p>
                                <a class="main-btn border-white text-white mt-lg-5" href="#">Book now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 mb-lg-0">
                        <div className="room-items">
                            <img src={room2Image} className="img-fluid" alt="Room 2" />
                            <div class="room-item-wrap">
                            <div class="room-content">
                                <h5 class="text-white mb-lg-5 text-decoration-underline">The Oberoi, Mumbai</h5>
                                <p class="text-white">Discover five of our favourite dresses from our new collection
                                    that are destined to be worn and loved immediately</p>
                                <p class="text-white fw-bold mt-lg-4">22000 / Per Night</p>
                                <a class="main-btn border-white text-white mt-lg-5" href="#">Book now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 mb-lg-0">
                        <div className="room-items">
                            <img src={room3Image} className="img-fluid" alt="Room 3" />
                            <div class="room-item-wrap">
                            <div class="room-content">
                                <h5 class="text-white mb-lg-5 text-decoration-underline">The Leela Palace, New Delhi</h5>
                                <p class="text-white">Discover five of our favourite dresses from our new collection
                                    that are destined to be worn and loved immediately</p>
                                <p class="text-white fw-bold mt-lg-4">25000 / Per Night</p>
                                <a class="main-btn border-white text-white mt-lg-5" href="#">Book now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomsSection;