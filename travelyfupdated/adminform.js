import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import AdminNavbar from "./adminnavbar";
const AdminForm = () => {
  const [adminImageurl, setadminImageurl] = useState("");
  const [admincity, setadmincity] = useState("");
  const [adminhotel, setadminhotel] = useState("");
  const [adminarea, setadminarea] = useState("");
  const [admincost, setadmincost] = useState("");
  const [adminrooms, setadminrooms] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!adminImageurl||!admincity||!adminhotel||!adminarea||!admincost||!adminrooms){
        alert("Fill all the fields");
    }
    else{

        axios.post("http://localhost:4000/Hotels/createhotel",{Imageurl:adminImageurl,
        City:admincity
        ,HotelName:adminhotel,
        Area:adminarea,
        Cost:admincost,
        Rooms:adminrooms
    })
    .then((response)=>{
        console.log(response.data);
        if(response.data.HotelName==="exist"){
            alert("Hotel already exists");
        }
        else{
            alert("Hotel Details Added");
        }
    })
    }
    
  };
  return (
    <>
    <AdminNavbar/>
    <div className="addhotel">
    <div className="container mt-6">
      <div className="row justify-content-center">
        <div className="col-12">
          <div >
            <div className="card-body">
              <form onSubmit={handleSubmit} className="transparent-formadmin">
                <h3 className="h3head">Hotel Entry</h3>
                <div className="mb-3">
                  <label htmlFor="hotelName" className="form-label">
                    Hotel Name:
                  </label>
                  <input
                    type="text"
                    id="hotelName"
                    name="hotelName"
                    className="form-control"
                    placeholder="Enter Hotel Name"
                    value={adminhotel}
                    onChange={(e)=>setadminhotel(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City:
                  </label>

                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="form-control"
                    placeholder="Enter City"
                    value={admincity}
                    onChange={(e)=>setadmincity(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="area" className="form-label">
                    Area/Region:
                  </label>

                  <input
                    type="text"
                    id="area"
                    name="area"
                    className="form-control"
                    placeholder="Enter Area/Region"
                    value={adminarea}
                    onChange={(e)=>setadminarea(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="farePrice" className="form-label">
                    Fare Price:
                  </label>

                  <input
                    type="number"
                    id="farePrice"
                    name="farePrice"
                    className="form-control"
                    placeholder="Enter Fare Price"
                    value={admincost}
                    onChange={(e)=>setadmincost(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="room" className="form-label">
                    Rooms:
                  </label>

                  <input
                    type="number"
                    id="room"
                    name="room"
                    className="form-control"
                    placeholder="Total Rooms"
                    value={adminrooms}
                    onChange={(e)=>setadminrooms(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="imageUrl" className="form-label">
                    Image URL:
                  </label>
                  <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    className="form-control"
                    placeholder="Enter Image URL"
                    value={adminImageurl}
                    onChange={(e)=>setadminImageurl(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default AdminForm;