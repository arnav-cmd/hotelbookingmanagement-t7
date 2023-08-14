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
export default function ImgMediaCard(searchCity) {
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

  return (
    <div className="userhomediv">
                <navbar onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'} className=' user-homenav homenav'>
                    <nav><Link  to='/booking' style={{textDecoration: 'none',color:'white'}} onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>Home</Link></nav>
                    <nav><Link  to='/booking' style={{textDecoration: 'none',color:'white'}} onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>Book</Link></nav>
                    <nav><Link style={{textDecoration: 'none',color:'white'}} onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>Booking History</Link></nav>
                    <nav><Link style={{textDecoration: 'none',color:'white'}} onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>Profile</Link></nav>
                </navbar>
    <div
      // className="container"
      style={{  padding: "20px" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {hotels.slice(0,3).map((hotel, index) => (
          <Card
            key={index}
            sx={{
              width: "30%",
              transition: "transform 0.2s",
              transform: isHovered[index] ? "scale(1.05)" : "scale(1)",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <CardMedia
              component="img"
              alt={`Hotel ${index + 1}`}
              height="200"
              image={hotel.Imageurl}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hotel.HotelName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hello
              </Typography>
            </CardContent>
            <CardActions>
              {hotel.Cost}
              <Button size="small" sx={{ marginLeft: 'auto' }}><Link to='/userbooking'>Book Hotel</Link></Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        {hotels.slice(3, 6).map((hotel, index) => (
          <Card
            key={index + 3}
            sx={{
              width: "30%",
              transition: "transform 0.2s",
              transform: isHovered[index + 3] ? "scale(1.05)" : "scale(1)",
            }}
            onMouseEnter={() => handleMouseEnter(index + 3)}
            onMouseLeave={() => handleMouseLeave(index + 3)}
          >
            <CardMedia
              component="img"
              alt={`Hotel ${index + 4}`}
              height="200"
              image={hotel.Imageurl}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hotel.HotelName}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            <CardActions>
            {hotel.Cost}
              <Button size="small" sx={{ marginLeft: 'auto' }}><Link to='/userbooking'>Book Hotel</Link></Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
}
