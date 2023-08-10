import React, { useState,useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import {useParams,useNavigate} from 'react-router-dom';
const UpdateAdminForm = () => {
  const {id}=useParams();
  const navigate=useNavigate();
  const[hotel,setHotel]=useState({
    Imageurl:"",
    City:"",
    HotelName:"",
    Rating:"",
    Area:"",
    Cost:"",
    Rooms:"",
  });
  useEffect(()=>{
    axios.get(`http://localhost:4000/Hotels/get-hotel/${id}`)
    .then((res)=>{
      setHotel({
        Imageurl:res.data.Imageurl,
        City:res.data.City,
        HotelName:res.data.HotelName,
        Rating:res.data.Rating,
        Area:res.data.Area,
        Cost:res.data.Cost,
        Rooms:res.data.Rooms,
      });
    })
    .catch((error)=>{
      console.log(error);
    });

  },[id]);
  const onChangeHotelField=(e,field)=>{
    setHotel({...hotel,[field]:e.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      axios.put(`http://localhost:4000/Hotels/update-hotel/${id}`,hotel)
      .then((res)=>{
        console.log(res.data);
        alert("Hotel details updated");
        navigate("/hotellist");
      })
      .catch((error)=>{
        console.log(error);
      });
    }
  


  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Admin Form</h2>

              <form onSubmit={handleSubmit}>
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
                    value={hotel.Imageurl}
                    onChange={(e)=>onChangeHotelField(e,"Imageurl")}
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
                    value={hotel.City}
                    onChange={(e)=>onChangeHotelField(e,"City")}
                    required
                  />
                </div>

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
                    value={hotel.HotelName}
                    onChange={(e)=>onChangeHotelField(e,"HotelName")}
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
                    value={hotel.Area}
                    onChange={(e)=>onChangeHotelField(e,"Area")}
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
                    value={hotel.Cost}
                    onChange={(e)=>onChangeHotelField(e,"Cost")}
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
                    value={hotel.Rooms}
                    onChange={(e)=>onChangeHotelField(e,"Rooms")}
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
  );
};

export default UpdateAdminForm;
