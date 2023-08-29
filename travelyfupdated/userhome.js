import React from "react";
import AboutSection from './aboutsection';
import RoomsSection from './bestdeals';
import BannerSection from './bannersection';
import PriceSection from './mostbookedcities';
import UserNavbar from "./usernavbar";

export default function UserHome() {
    return(
        <div>
            <UserNavbar/>
              <BannerSection/>
      <AboutSection/>
      <RoomsSection/>
    <PriceSection/>
        </div>

    )
}