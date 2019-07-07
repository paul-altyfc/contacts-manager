import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList';
import Form from './components/Form';
import Header from './components/Header';

import axios from 'axios';

// Based on tutorial from https://www.andreasreiterer.at/react-list-component/

// Static data used within the test
// const contacts = [
//   { id: 1, name: 'Leanne Graham' },
//   { id: 2, name: 'Ervin Howell' },
//   { id: 3, name: 'Clementine Bauch' },
//   { id: 4, name: 'Patricia Lebsack' }
// ];

class App extends React.Component {
  state = {
    // initial state
    search: '',
    contacts: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // create an array of contacts only with relevant data
        const newContacts = response.data.map(contact => {
          return {
            id: contact.id,
            name: contact.name,
            email: contact.email
          };
        });
        // create a new "State" object without mutating
        // the original State object.
        const newState = Object.assign({}, this.state, {
          contacts: newContacts
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  addSearch = searchCriteria => {
    this.setState(prevState => ({ search: searchCriteria }));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form onSubmit={this.addSearch} />
        <ContactList
          contacts={this.state.contacts}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default App;
