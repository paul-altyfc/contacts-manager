import React from 'react';
import './Contact.css';

// Displays a single contact details

function Contact(props) {
  return (
    <div className="contact">
      <span>{props.name}</span>
    </div>
  );
}

export default Contact;
