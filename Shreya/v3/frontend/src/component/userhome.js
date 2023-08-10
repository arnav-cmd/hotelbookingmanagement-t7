import React,{Component,useState, useEffect} from "react";
import {Link} from "react-router-dom";
import '../App.css';
import './userhome.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import DemoCarousel from "./statusbar";

export default function Userhome(){
        
    return(
            <div className="userhomediv">
                <navbar onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'} className=' user-homenav homenav'>
                    <nav><Link  to='/booking'style={{textDecoration: 'none',color:'black'}} onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>Book</Link></nav>
                    <nav><Link style={{textDecoration: 'none',color:'black'}} onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>Booking History</Link></nav>
                    <nav><Link style={{textDecoration: 'none',color:'black'}} onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>Profile</Link></nav>
                </navbar>
                < DemoCarousel />
                <div className=' user-footer1 footer1'>
                    <navbar className='user-footernav '>
                        <nav style={{textDecoration: 'none',color:'black'}} onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>Help</nav>
                        <nav style={{textDecoration: 'none',color:'black'}} onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>Contact Us</nav>
                    </navbar>
                </div>
                    <div className='user-footer2 footer2'>
                        Made with <span className='heart'>&hearts;</span> at Perficient
                    </div>
            </div>
        );
    }