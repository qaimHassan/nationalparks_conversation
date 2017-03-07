import React from 'react';
import './ParkCard.css';
import Carousel from './Carousel';

export const AttractionCard = ({
  attraction
}) => {
  return (
    <div>
      <div><h3>{attraction.name}</h3></div>
      <div><p>{attraction.description}</p></div>
      <div>
        <img className="park-image" src={attraction.images[0]} role="presentation"/>
      </div>
    </div>
  );
};

const AttractionsCard = ({
  park
  }) => {
  return (
    <Carousel>
      {park.attractions.map((f, i) => (
        <AttractionCard key={i} attraction={f} />
      ))}
    </Carousel>
  );
};

export default AttractionsCard;
