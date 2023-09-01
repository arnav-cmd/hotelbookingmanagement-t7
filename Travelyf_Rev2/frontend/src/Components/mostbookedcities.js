import React from 'react';
import './responsive-style.css';
import './style.css';

const PriceSection = () => {
  return (
    <section id="price" className="price_wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 section-title text-center mb-5">
            <h6>Operating in more than 5+ cities</h6>
            <h3>Our top four most booked cities</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-8 mb-4">
            <div className="card p-4 text-center rounded-3 h-100">
              <h5 className="text-decoration-underline mb-4">Hyderabad</h5>
              <img
                src="https://imgs.search.brave.com/GWqrep8hXdflOOya7GZW7wuO9-RnRUdFydn1FeOeXKM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NzI5MzE5L3Bob3Rv/L2NoYXJtaW5hci1o/eWRlcmFiYWQtaW5k/aWEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWVXTk5pQWgy/LXhKZEVHSFduSHV6/RHhfQ2F5RUJvaWVJ/SFZiWTdjRXNfOUE9"
                className="img-fluid rounded-3"
                alt="Hyderabad"
              />
              <ul className="list-unstyled">
                {/* Add relevant list items here */}
              </ul>
              <hr />
              <h3>
                15000<sub className="fs-6 fw-normal">/NIGHT</sub>
              </h3>
              <a href="#" className="main-btn">
                Sign Up
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 mb-4">
            <div className="card p-4 text-center rounded-3 h-100">
              <h5 className="text-decoration-underline mb-4">Bengaluru</h5>
              <img
                src="https://www.savaari.com/blog/wp-content/uploads/2018/04/Vidhana_Souda__Bangalore.jpg"
                className="img-fluid rounded-3"
                alt="Bengaluru"
              />
              <ul className="list-unstyled">
              </ul>
              <hr />
              <h3>
                35000<sub className="fs-6 fw-normal">/NIGHT</sub>
              </h3>
              <a href="#" className="main-btn">
                Sign Up
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 mb-4">
            <div className="card p-4 text-center rounded-3 h-100">
              <h5 className="text-decoration-underline mb-4">New Delhi</h5>
              <img
                src="https://imgs.search.brave.com/q1cq2R0Pu4wv8_B6rG_I8qp4zrDozkxOh_a0anCJ5W4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tZW1v/cmlhbC1tb251bWVu/dC1uZXctZGVsaGkt/aW5kaWEtZ2F0ZS13/YXItMTM3NTg4OTEx/LmpwZw"
                className="img-fluid rounded-3"
                alt="New Delhi"
              />
              <ul className="list-unstyled">
                {/* Add relevant list items here */}
              </ul>
              <hr />
              <h3>
                25000<sub className="fs-6 fw-normal">/NIGHT</sub>
              </h3>
              <a href="#" className="main-btn">
                Sign Up
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 mb-4">
            <div className="card p-4 text-center rounded-3 h-100">
              <h5 className="text-decoration-underline mb-4">Mumbai</h5>
              <img
                src="https://imgs.search.brave.com/rOtk5p7EKJg7xXdaBMQefpU7oT_TWgY7GhZDOBzHwIY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjIw/OTIyMjgzL25sL2Zv/dG8vaW5kaWEtbWFo/YXJhc2h0cmEtbXVt/YmFpLWNoaGF0cmFw/YXRpLXNoaXZhamkt/dGVybWludXMtYXQt/bmlnaHQtdHJhZmZp/Yy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9QzFvZGNwbHZ3/VWNoaThPREJvRVNw/dEZySEJGRFd2bVJC/VjF0RWxscTI3ST0"
                className="img-fluid rounded-3"
                alt="Mumbai"
              />
              <ul className="list-unstyled">
                {/* Add relevant list items here */}
              </ul>
              <hr />
              <h3>
                8500<sub className="fs-6 fw-normal">/NIGHT</sub>
              </h3>
              <a href="#" className="main-btn">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
