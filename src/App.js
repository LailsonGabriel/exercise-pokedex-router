import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About';
import Error from './Error';
import './Links.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      favList: [],
    }
    this.handleFav = this.handleFav.bind(this);
  }

  handleFav(state) {
    this.setState((prevState) => ({
      favList: ([...prevState.favList, state]),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <BrowserRouter>
        <nav className='nav-links'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
        </nav>
          <Switch>
            <Route exact path='/' render={() => <Pokedex  pokemons={ pokemons } />}/>
            <Route path='/pokemons/:id' component={ PokemonDetails } />
            <Route path='/about' component={ About } />
            <Route path='*' component={ Error } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;