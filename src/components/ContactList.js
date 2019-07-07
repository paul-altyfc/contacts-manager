import React from 'react';

import Contact from './Contact.js';

function ContactList(props) {
  // console.log(props.search, 'in ContactList');
  return (
    <div>
      {/* Uses map function on the props in this case the array of contacts each time calling the Contacts function to display each individual record */}
      {/* The line below shows all records */}
      {/* {props.contacts.map(c => (
        <Contact key={c.id} name={c.name} email={c.email} />
      ))} */}
      {/* Use reduce to limit response to just those that match the search criteria */}
      {props.contacts.reduce((acc, currContact) => {
        if (currContact.name.includes(props.search)) {
          //console.log(currContact.name);
          //console.log(currContact.name.includes(props.search));
          // <Contact key={currContact.id} name={currContact.name} email={currContact.email}

          acc.push(
            <Contact
              key={currContact.id}
              name={currContact.name}
              email={currContact.email}
            />
          );
        }
        return acc;
      }, [])}
    </div>
  );
}

export default ContactList;
