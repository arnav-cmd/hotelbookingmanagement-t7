import React,{useState} from "react";

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
  const handleBookHotel = (hotelName, city,cost) => {
    dispatch(hotels({ hotelname: hotelName, city: city,cost:cost }));
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
            justifyContent: "space-between",
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
                {hotel.Cost}
                <Button
                  size="small"
                  sx={{ marginLeft: "auto" }}
                  onClick={handleBookHotel(hotel.HotelName,hotel.City,hotel.Cost)}
                >
                  <Link to="/bookingform">Book Hotel</Link>
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
//     <div className="hotel-cards-container">
//       <h2>Available Hotels</h2>
// <div className="hotel-cards">
//       {matchedRoutes.length > 0 ? (
//   matchedRoutes.map((hotel, index) => (
//     <Card
//       key={index}
//       sx={{
//         marginLeft:"16px",
//         transition:"transform 0.2s",
//       }}
//       className="  card col-md-3 mb-4 col-sm-4 "
//       onMouseEnter={() => handleMouseEnter(index)}
//       onMouseLeave={() => handleMouseLeave(index)}
//     >
//       <CardMedia
//         component="img"
//         alt={`Hotel ${index + 1}`}
//         height="200"
//         image={hotel.Imageurl}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {hotel.HotelName}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {hotel.City}
//         </Typography>
//       </CardContent>
//             <CardActions>
//               {hotel.Cost}
//               <Button size="small" sx={{ marginLeft: 'auto' }} onClick={() => handleBookHotel(hotel.HotelName, hotel.City,hotel.Cost)}><Link to='/bookingform'>Book Hotel</Link></Button>
//             </CardActions>
//           </Card>
//           ))) : (
//         <p>No matching hotels found.</p>
//       )}
//       </div>
//     </div>
  );
};

export default Outputa;
