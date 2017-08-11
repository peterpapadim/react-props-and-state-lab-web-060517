import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();
  }

  handleDropdown = (event) => {
    this.props.onChangeType(event.target.value)
  }

  handleClick = (event) => {
    this.props.onFindPetsClick(this.props.type)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleDropdown}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
