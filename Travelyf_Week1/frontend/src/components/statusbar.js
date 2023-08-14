import React, { useState, useEffect } from "react";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

function DemoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      legend: "Want to have a HOLIDAY with loved ones",

      imageUrl:
        "https://www.wallpapers13.com/wp-content/uploads/2016/08/Luxury-Bellagio-Hotel-and-Casino-Las-Vegas-Nevada-North-America-Beautiful-HD-Desktop-Wallpaper-2880x1800.jpg",
    },

    {
      imageUrl:
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/07/02/thumbs/1200x600/44180.jpg",

      legend: "Book With Us",
    },

    {
      imageUrl:
        "https://storage.googleapis.com/gtspirit/uploads/2015/12/St-Regis-Dubai-Luxury-Hotel-in-Dubai-Exterior-Shot.jpg",

      legend: "Affordable Hotels in Available Locations",
    },

    {
      imageUrl:
        "https://th.bing.com/th/id/R.6d6cf6590040a74f6e36873e0b924fdc?rik=wyIqRW1JvdBs3w&riu=http%3a%2f%2f2.bp.blogspot.com%2f-W1Fqv0qqwgU%2fUmNoVaNYg8I%2fAAAAAAAAQPc%2f2sbgD49UfS8%2fs1600%2fhotel%2bin%2bsingapore.jpg&ehk=3RRHUO6J%2fCbn6tnT9epbba9jwZDiC544P5iqE8aDL6I%3d&risl=&pid=ImgRaw&r=0",

      legend: "Room of Your Choice",
    },

    {
      imageUrl:
        "https://cache.marriott.com/marriottassets/marriott/BKKLA/bkkla-swimming-pool-1850-hor-feat.jpg",

      legend: "Login Now to Plan your Holiday",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      selectedItem={currentSlide}
      onChange={(index, item) => setCurrentSlide(index)}
    >
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.imageUrl} alt={`Slide ${index + 1}`} height={340} />

          <p className="legend">{slide.legend}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default DemoCarousel;
