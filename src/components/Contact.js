import React from 'react';
import './Contact.css';

// Displays a single contact details

function Contact(props) {
  return (
    <div className="contact">
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default Contact;
