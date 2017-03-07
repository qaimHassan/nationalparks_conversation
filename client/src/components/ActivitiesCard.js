import React from 'react';
import './ParkCard.css';
import Carousel from './Carousel';

export const ActivityCard = ({
  activity
}) => {
  return (
    <div>
      <div><h3>{activity.name}</h3></div>
      <div>
        <img className="park-image" src={activity.images[0]} role="presentation"/>
      </div>
    </div>
  );
};

const ActivitiesCard = ({
  park
  }) => {
  return (
    <Carousel>
      {park.activities.map((f, i) => (
        <ActivityCard key={i} activity={f} />
      ))}
    </Carousel>
  );
};

export default ActivitiesCard;
