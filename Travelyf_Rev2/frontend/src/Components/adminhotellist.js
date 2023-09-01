import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import {Link} from "react-router-dom";
import { PiStarDuotone } from "react-icons/pi";
import AdminNavbar from "./adminnavbar";
export default function ImgMediaCard() {
  const [isHovered, setIsHovered] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [hotels, setHotels] = useState([]);
  const[totalCount,setTotalCount]=useState(0);
  const handleMouseEnter = (index) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = true;
    setIsHovered(updatedHoverState);
  };

  const handleMouseLeave = (index) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = false;
    setIsHovered(updatedHoverState);
  };
  useEffect(() => {
    fetchItems();
    fetchTotalCount();
  });
  const fetchTotalCount=async ()=>{
    try{
      const response1=await axios.get("http://localhost:4000/Hotels/count");
      setTotalCount(response1.data.count);
    }
    catch(error){
      console.error('Error fetching total count',error)
    }
  }
  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:4000/Hotels");
      setHotels(response.data);
      // console.log(response.data);
      
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  const renderHotelCards = () => {
    const hotelCardSections = [];
    const step = 3; // Number of cards per section

    for (let i = 0; i < totalCount; i += step) {
      const sectionHotels = hotels.slice(i, i + step);

      const cardSection = (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "20px",
          }}
        >
          {sectionHotels.map((hotel, index) => (
            <Card
              key={i + index}
              sx={{
                width: "30%",
                transition: "transform 0.2s",
                transform: isHovered[i + index]
                  ? "scale(1.05)"
                  : "scale(1)",
              }}
              onMouseEnter={() => handleMouseEnter(i + index)}
              onMouseLeave={() => handleMouseLeave(i + index)}
            >
              <CardMedia
                component="img"
                alt={`Hotel ${i + index + 1}`}
                height="200"
                image={hotel.Imageurl}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {hotel.HotelName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {hotel.City}
                </Typography>
              </CardContent>
              <CardActions>
              ₹{hotel.Cost}/Night
               
              </CardActions>
            </Card>
          ))}
        </div>
      );

      hotelCardSections.push(cardSection);
    }
    return hotelCardSections;
  };

  return (
    <>
    <AdminNavbar/>
    <div style={{ padding: "20px" }}>
        {renderHotelCards()}
      </div>
    </>
  );
}