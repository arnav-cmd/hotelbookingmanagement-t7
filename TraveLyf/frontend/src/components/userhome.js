import React,{Component} from "react";
import {Link} from "react-router-dom"

export default function UserHome(){
        return(
            <div className="userhomediv">
                <navbar className='homenav'>
                    <nav><Link  to='/booking'style={{textDecoration: 'none',color:'white'}}>Book</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</nav>
                    <nav><Link style={{textDecoration: 'none',color:'white'}}>Booking History</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</nav>
                    <nav><Link style={{textDecoration: 'none',color:'white'}}>Profile</Link></nav>
                </navbar>
                <div className='footer1'>
                    <navbar className='footernav'>
                        <nav style={{textDecoration: 'none',color:'white'}}>Help&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</nav>
                        <nav style={{textDecoration: 'none',color:'white'}}>Contact Us</nav>
                    </navbar>
                </div>
                    <div className='footer2'>
                        Made with <span className='heart'>&hearts;</span> at Perficient
                    </div>
            </div>
        );
    }
