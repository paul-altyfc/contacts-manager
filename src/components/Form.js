import React from 'react';
import './Form.css';

class Form extends React.Component {
  state = { searchCriteria: '' };

  handleSearchChange = event => {
    this.setState({ searchCriteria: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state.searchCriteria, 'handleSubmit');
    this.props.onSubmit(this.state.searchCriteria);
    this.setState({ searchCriteria: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Render the input entered */}

        {/* <label>Search Entered: {this.state.searchCriteria} </label> */}
        <input
          type="text"
          value={this.state.searchCriteria}
          onChange={this.handleSearchChange}
          placeholder="Enter search criteria"
        />

        <button>Search</button>
      </form>
    );
  }
}
export default Form;
