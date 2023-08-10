import React,{useState} from "react";
import { Link } from "react-router-dom";

export default function Adminlogin(){
    return(
        <div className="adminlogindiv">  
          <div >
          <form>
            <div><input type="text" placeholder="Username" required className="username"/></div><br/>
            <div><input type="text" placeholder="Password" required className="password"/></div><br/>
            <button type="submit"><Link to='/adminhome'>login</Link></button>
          </form>
          </div>     
        </div>
      );
}