import React from 'react';
import './ParkCard.css';
import Carousel from './Carousel';

export const ContactCard = ({
  contact
}) => {
  return (
    <div>
      <div><h3>{contact.visitorCenter}</h3></div>
    </div>
  );
};

const ContactsCard = ({
  park
  }) => {
  return (
    <Carousel>
      {park.flora.map((f, i) => (
        <ContactCard key={i} contact={f} />
      ))}
    </Carousel>
  );
};

export default ContactsCard;
