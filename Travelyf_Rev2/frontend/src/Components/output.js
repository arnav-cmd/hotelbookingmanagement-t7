import React,{useEffect, useState} from "react";

import { useLocation ,Link} from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { hotels } from "../store/BookSlice";
import UserNavbar from "./usernavbar";

const Outputa = () => {
  const location = useLocation();
  const matchedRoutes = location.state?.matchedRoutes || [];
  const dispatch=useDispatch();
  
  const [isHovered, setIsHovered] = useState([
    false,

    false,

    false,

    false,

    false,

    false,
  ]);

  // console.log(matchedRoutes);

  // const [hotels, setHotels] = useState([]);

  const [totalCount, setTotalCount] = useState(0);

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
  const handleBookHotel = (hotelName, city,cost,area,image) => {
    dispatch(hotels({ hotelname: hotelName, city: city,cost:cost,area:area ,image:image}));
  };
  const renderHotelCards = () => {
    const hotelCardSections = [];
    const step = 3; // Number of cards per section

    for (let i = 0; i < matchedRoutes.length; i += step) {
      const sectionHotels = matchedRoutes.slice(i, i + step);

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
                  {hotel.Area},{hotel.City}
                </Typography>
              </CardContent>
              <CardActions>
              ₹{hotel.Cost}/Night
                <Button
                  size="small"
                  sx={{ marginLeft: "auto" }}
                  onClick={()=>handleBookHotel(hotel.HotelName,hotel.City,hotel.Cost,hotel.Area,hotel.Imageurl)}
                >
                  <Link to="/bookingform" style={{textDecoration:"none"}}>Book Hotel</Link>
                </Button>
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
    <UserNavbar/>
    <div style={{padding:"20px"}}>
    {matchedRoutes.length>0 ?(
      renderHotelCards()
      ) : 
    (<p>No Hotels Found</p>)
    }
    </div>
    </>
  );
};

export default Outputa;
