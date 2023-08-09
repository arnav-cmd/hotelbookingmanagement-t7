import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component{
    render(){
        return(
            <div className='homediv'>
                <div>
                    <navbar className="homenav">
                        <nav><Link to='./aboutus' style={{textDecoration: 'none',color:'white'}}>About Us</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</nav>
                        <nav><Link to='./userhome' style={{textDecoration: 'none',color:'white'}}>User</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</nav>
                        <nav><Link to='./adminhome' style={{textDecoration: 'none',color:'white'}}>admin</Link></nav>
                    </navbar>
                    <hr></hr>
                    <h1 className='brandname'>TraveLyf</h1>
                    <h2 className='slogan'>Travel the world with us...</h2>
                    <div className='footer1'>
                        <navbar className='footernav'>
                            <nav><Link style={{textDecoration: 'none',color:'white'}}>Help</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</nav>
                            <nav><Link style={{textDecoration: 'none',color:'white'}}>Contact Us</Link></nav>
                        </navbar>
                    </div>
                    <div className='footer2'>
                        Made with <span className='heart'>&hearts;</span> at Perficient
                    </div>
                </div>
            </div>
        );
    }
}