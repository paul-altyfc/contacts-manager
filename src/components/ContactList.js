import React from 'react';

import Contact from './Contact.js';

function ContactList(props) {
  return (
    <div>
      {/* Uses map function on the props in this case the array of contacts each time calling the Contacts function to display each individual record */}
      {props.contacts.map(c => (
        <Contact key={c.id} name={c.name} />
      ))}
    </div>
  );
}

export default ContactList;
