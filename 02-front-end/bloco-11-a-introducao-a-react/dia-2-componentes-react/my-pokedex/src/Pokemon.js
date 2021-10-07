import React from 'react';
import Pokedex from './Pokedex'

class Pokemon extends React.Component {
  render() {
    const {data} = this.props;
    return (
      data.map((pokemon) => <Pokedex pokemon={pokemon} key={pokemon.id}/>)
    )
  }
};

export default Pokemon;
