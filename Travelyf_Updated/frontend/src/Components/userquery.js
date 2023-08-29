import React, { useState, useEffect } from 'react';
import './userquery.css';
import axios from 'axios';

const Card = ({ queryname, querymail, querymessage, queryphone }) => (
  <div className={`card animate-slide-fade bg-white p-4 rounded shadow hover:bg-${queryname}-100 transition duration-300`}>
    <div className="flex items-center">
      <p className="quername1">Name:</p> <p className="font-semibold">{queryname}</p>
      <p className="queremail1"> Email:</p><p className=''>{querymail}</p>
      <p className="querphone1"> Phone:</p><p className=''>{queryphone}</p>
    </div>
    <p className="querquery1">Query:</p><p className="text-gray-600">{querymessage}</p>
  </div>
);

const CardGrid = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get('http://localhost:4000/contact/contactmessages')
      .then(response => {
        setCardData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-2">
        {cardData.map((card, index) => (
          <Card key={index} 
            queryname={card.name}
            querymail={card.email} 
            querymessage={card.message}
            queryphone={card.phone}  />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
