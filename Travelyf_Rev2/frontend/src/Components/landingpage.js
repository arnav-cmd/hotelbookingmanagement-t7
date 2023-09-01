import React from "react";
import AboutSection from './aboutsection';
import RoomsSection from './bestdeals';
import BannerSection from './bannersection';
import PriceSection from './mostbookedcities';
import Navbar from "./navbar";


export default function LandingPage() {
    return(
        <div>
               <Navbar/>
              <BannerSection/>
      <AboutSection/>
      <RoomsSection/>
    <PriceSection/>
        </div>

    )
}