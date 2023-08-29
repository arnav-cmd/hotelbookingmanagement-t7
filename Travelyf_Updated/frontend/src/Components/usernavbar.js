import React, { useEffect, useState } from "react";
import "./responsive-style.css";
import "./style.css";
import travelyfLogo from "./images/travelyf.png";
import "font-awesome/css/font-awesome.min.css";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { faL } from "@fortawesome/free-solid-svg-icons";

const UserNavbar = ({ setAuthenticated }) => {
  const navigate = useNavigate();
  const [myprofile,setMyprofile] = useState(false);
    const [logouts,setLogouts] = useState(false);
    useEffect(()=>{
        const token = sessionStorage.getItem("token");
        if(token){
            setMyprofile(true);
            setLogouts(true);
        }
        else{
            setLogouts(false);
            setMyprofile(false);
        }
    },[])
  useEffect(() => {
    const nav = document.querySelector(".navbar");
    

    

    const handleScroll = () => {
      if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
      } else {
        nav.classList.remove("header-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavClick = () => {
    const navCollapse = document.querySelector(".navbar-collapse.collapse");
    if (navCollapse.classList.contains("show")) {
      navCollapse.classList.remove("show");
    }
  };
  const handleLogout = () => {
    sessionStorage.clear();
    // setAuthenticated(false);
    navigate("/");
  };
//   const getNameFromEmail = (email) => {
// //     const atIndex = email.indexOf("@");
// //     if (atIndex !== -1) {
// //       const name = email.substring(0, atIndex);
// //       // Use a regex to match only alphabetic characters
// //       const alphabeticName = name.replace(/[^a-zA-Z]/g, "");
// //       return alphabeticName;
// //     }
// //     return email;
// //   };
  

  return (
    <header className="header-wrapper">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="/userhome">
            <img src={travelyfLogo} className="img-fluids" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-stream navbar-toggler-icon"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav menu-navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/bookinghistory"
                  onClick={handleNavClick}
                >
                  Booking History
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/contactus"
                  onClick={handleNavClick}
                >
                  Contact US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/FAQ" onClick={handleNavClick}>
                  FAQ
                </a>
              </li>
              <li className="nav-item mt-3 mt-lg-0 dropdown">
                <a
                  className={`nav-link circle-button ${
                    isDropdownOpen ? "active" : ""
                  }`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown();
                  }}
                >
                  
                    <p>
                      Hi {(sessionStorage.getItem("name"))}
                    </p>
                  
                </a>
                {myprofile && logouts?
                <div
                  className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                >
                  <a
                    className="dropdown-item"
                    href="/MyProfilePage"
                    onClick={handleNavClick}
                  >
                    My Profile
                  </a>
                  <a className="dropdown-item" href="/" onClick={handleLogout}>
                    Logout
                  </a>
                </div>:null}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default UserNavbar;
