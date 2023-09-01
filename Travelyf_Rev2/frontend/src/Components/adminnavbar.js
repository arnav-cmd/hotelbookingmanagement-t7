import React, { useEffect, useState } from "react";
import "./responsive-style.css";
import "./style.css";
import travelyfLogo from "./images/travelyf.png";
import "font-awesome/css/font-awesome.min.css";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();
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
    navigate("/");
  };
  

  return (

    <header className="header-wrapper">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="/adminhome">
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
                  style={{textDecoration:"none"}}
                  className="nav-link"
                  href="/adminform"
                  onClick={handleNavClick}
                >
                  AddHotels
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{textDecoration:"none"}}
                  className="nav-link"
                  href="/adminbookinglist"
                  onClick={handleNavClick}
                >
                  UserBookingHistory
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{textDecoration:"none"}}
                  className="nav-link"
                  href="/hotellist"
                  onClick={handleNavClick}
                >
                  HotelsList
                </a>
              </li>
              <li className="nav-item">
                <a  style={{textDecoration:"none"}} className="nav-link" href="/adminuserquery" onClick={handleNavClick}>
                  UserQueries
                </a>
              </li>
              <li className="nav-item mt-3 mt-lg-0 dropdown">
                <a
                  style={{textDecoration:"none"}}
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
                      Hi Admin
                    </p>
                  
                </a>
                <div
                  className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                >
                  <a className="dropdown-item" href="/">
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AdminNavbar;
