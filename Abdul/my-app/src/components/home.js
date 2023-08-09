import React,{Component} from 'react';

import { Link } from 'react-router-dom';
import './home.css';

 

export default class Home extends React.Component{

    render(){

        return(

            <div className='bgs'>

                <div>

                    {/* <navbar className="homenav">

                        <nav><Link>About</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</nav>

                        <nav><Link>User</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</nav>

                        <nav><Link>admin</Link></nav>

                    </navbar> */}

                    <h1 className='brandname'>Travelyf</h1>

                    <h2 className='slogan'>Travel the world with us</h2>

                    <div className='footer1'>

                        <navbar className='footernav'>

                            <nav>Help&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</nav>

                            <nav>Contact Us</nav>

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