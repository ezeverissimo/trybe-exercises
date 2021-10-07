import PropTypes from "prop-types"
import React from "react";

class Pokedex extends React.Component {

  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image, moreInfo } = pokemon;

    return (
      <section className='pokemon'>
        <p>{name}</p>
        <p>{type}</p>
        <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
        <img src={image} alt={moreInfo}></img>
      </section>
    )
  }
}

Pokedex.propTypes = {
  pokemon: PropTypes.shape({
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string
  }).isRequired
}

export default Pokedex;