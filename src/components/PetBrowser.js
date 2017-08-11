import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  showPets = () => {
    const petArray = this.props.petArray

    return petArray.map((pet) => {
      let isAdopted = false
      this.props.adoptedPets.includes(pet.id) ? isAdopted = true : null
      return <Pet currentPet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={isAdopted}/>
    })
  }

  render() {

    return (
      <div className="ui cards">
        {this.showPets()}
      </div>
    );
  }
}

export default PetBrowser;
