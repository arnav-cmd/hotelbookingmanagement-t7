import React,{Component} from "react";
import { Link } from "react-router-dom";

export default class  Navbar extends React.Component{
    render(){
        return(
            <div className="navBar">
                <navbar className='homenav'>
                    <nav><Link to='/userhome' style={{textDecoration: 'none',color:'white'}}>Home</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</nav>
                    <nav><Link style={{textDecoration: 'none',color:'white'}}>Booking History</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</nav>
                    <nav><Link style={{textDecoration: 'none',color:'white'}}>Profile</Link></nav>
                </navbar>
            </div>
        );
    }
}