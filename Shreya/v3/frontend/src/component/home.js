import React,{Component,useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
export default function Home(){
        return(
            <div className='homediv'>
                <div>
                
                    <navbar className="homenav">
                        <nav><Link  to='./aboutus' style={{textDecoration: 'none',color:'black'}} onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>AboutUs</Link></nav>
                        <nav><Link  to='./signup' style={{textDecoration: 'none',color:'black'}}onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>User</Link></nav>
                        <nav><Link  to='./adminlogin' style={{textDecoration: 'none',color:'black'}}onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>admin</Link></nav>
                    </navbar>
                    
                    <h1 className='brandname'>TraveLyf</h1>
                    <div className='footer1'>
                        <navbar className='footernav'>
                            <nav><Link className='hov-li' style={{textDecoration: 'none',color:'white'}}onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>Help</Link></nav>
                            <nav><Link className='hov-li' style={{textDecoration: 'none',color:'white'}}onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>Contact Us</Link></nav>
                        </navbar>
                    </div>
                    <div className='footer2'>
                        Made with <span className='heart'>&hearts;</span> at Perficient
                    </div>
                </div>
            </div>
        );
}