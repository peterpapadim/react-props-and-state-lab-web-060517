import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onAdoptPet = (petId) => {
    // add the pet ID to the the adoptedPets array in the state
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    })
  }

  onChangeType = (selected) => {
    this.setState({
      filters: {
        type: selected
      }
    })
  }

  onFindPetsClick = (selectedPet) => {
    let url = '/api/pets'
    selectedPet !== 'all' ? url += `?type=${selectedPet}` : null
    return fetch(url)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        pets: json
      })
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} type={this.state.filters.type}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser petArray={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
