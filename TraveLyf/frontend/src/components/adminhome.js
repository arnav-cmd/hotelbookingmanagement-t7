import React,{Component} from "react";
import {Link} from "react-router-dom"

export default class Adminhome extends React.Component{
    render(){
        return(
            <div className="adminhomediv">
                <navbar className='homenav'>
                    <nav><Link to='/addhotel' style={{textDecoration: 'none',color:'white'}}>Add hotel</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</nav>
                    <nav><Link style={{textDecoration: 'none',color:'white'}}>Hotel list</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</nav>
                    <nav><Link style={{textDecoration: 'none',color:'white'}}>Bookings</Link></nav>
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
}