import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  handleAdoptButton = () => {
    this.props.onAdoptPet(this.props.currentPet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.currentPet.name} (gender: {this.props.currentPet.gender === 'male' ? '♂' : '♀'})</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.currentPet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.currentPet.age}</p>
            <p>Weight: {this.props.currentPet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.handleAdoptButton}>Adopt pet</button>}
        </div>
      </div>
    );
  }
}

export default Pet;
