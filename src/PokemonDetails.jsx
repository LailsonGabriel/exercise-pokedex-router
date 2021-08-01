import React from 'react';
import data from './data';

class PokemonDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      favoritePokemon: false,
      pokemonId: '',
    }

    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleFavorite({ target }) {
    const { name } = target;
    const { id }  = this.props.match.params;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
      pokemonId: id,
    })
    if(value === false )this.setState({ pokemonId: '' })
  }

  render() {
    const { id }  = this.props.match.params;
    return (
      <div>
        { data.filter((pokemon) => pokemon.id === parseInt(id))
          .map(({ name, type, id, averageWeight, summary, foundAt, image }) => (
            <div key={ id }>
              {this.state.favoritePokemon === true ? <p>Favorite</p> : false}
              <img src={ image } alt={ name } />
              <h2>{ name }</h2>
              <p>{ type }</p>
              <p>{ averageWeight.value } { averageWeight.measurementUnit }</p>
              <p>Summary: {summary }</p>
              <h2>Fount At: </h2>
                {foundAt.map(({ location, map }, index) => (
                  <div key={ location }>
                    <p>{location}</p>
                    <img src={map} alt={location} />
                  </div>
                  ))}
            </div>
          ))
        }
        <label htmlFor="favorite">
          Favorite Pokemon?
          <input
            id='favorite'
            type="checkbox"
            name='favoritePokemon'
            onClick={ this.handleFavorite }
          />
        </label>
      </div>
    )
  }
}

export default PokemonDetails;