import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  const [isHovered, setIsHovered] = useState([false, false, false, false, false, false]);

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

  const cardData = [
    {
      title: 'TAJ PALACE',
      image: 'https://www.tajhotels.com/content/dam/luxury/hotels/taj-palace-delhi/images/at_a_glance/16x7/Facade3.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
    },
    {
      title: 'RAMADA',
      image: 'https://www.wyndhamhotels.com/content/dam/property-images/en-us/ra/in/others/new-delhi/47921/47921_exterior_view_2.jpg',
    },
    {
      title: 'THE OBEROI',
      image: 'https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-gurgaon/overview/tinified-(1)/togn-exterieor-night.jpg?w=724&hash=e2e92222cf216b1cda09a9396d7e88dd'
    },
    {
      title: 'JW MARIOTT',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465668069.jpg?k=e9e32814db5c0a29713ae10e43bfa18faf0f5f2ae58ce08487bdf61b3a6e6d82&o=&hp=1'
    },
    {
      title: 'THE HILTON',
      image: 'https://www.een.com/wp-content/uploads/2020/12/hilton-bldg.jpg'
    },
    {
      title: 'HYATT REGENCY',
      image: 'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/09/06/1111/Hyatt-Regency-Mumbai-P244-Facade.jpg/Hyatt-Regency-Mumbai-P244-Facade.16x9.jpg'
    },


    

    
  ];

  return (
    <div className='container' style={{ backgroundColor: '#FCE4EC', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {cardData.slice(0, 3).map((data, index) => (
          <Card
            key={index}
            sx={{ width: '30%', transition: 'transform 0.2s', transform: isHovered[index] ? 'scale(1.05)' : 'scale(1)' }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <CardMedia
              component="img"
              alt={`Hotel ${index + 1}`}
              height="140"
              image={data.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">

              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Show Rating</Button>
              <Button size="small">Book Hotel</Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {cardData.slice(3, 6).map((data, index) => (
          <Card
            key={index + 3}
            sx={{ width: '30%', transition: 'transform 0.2s', transform: isHovered[index + 3] ? 'scale(1.05)' : 'scale(1)' }}
            onMouseEnter={() => handleMouseEnter(index + 3)}
            onMouseLeave={() => handleMouseLeave(index + 3)}
          >
            <CardMedia
              component="img"
              alt={`Hotel ${index + 4}`}
              height="140"
              image={data.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">

              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Show Rating</Button>
              <Button size="small">Book Hotel</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
