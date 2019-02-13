import React, { Component } from 'react'
import PokemonList from './PokemonList'


export default class PokemonApiContainer extends Component{

  state = {
    pokemon: []
  }

  getPokemon = async () => {

    try {
      const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20');
      const pokemonJson = await pokemon.json();
      this.setState({
        pokemon: pokemonJson.results
      })
    } catch (error) {
      console.log(error, 'error in catch block')
      return error
    }
}
    componentDidMount(){
      this.getPokemon().then((data) => {
        console.log('Everything is here')
     })
    }

  render(){
    if (this.state.pokemon[0] !== undefined){
      return (
      <div>
        <h1>Hello, {this.props.username}!</h1>
        <PokemonList pokemon = {this.state.pokemon} />
      </div>
      )

    }else {
      return (
        <h1>Loading.....</h1>
        )
    }
    
  }
}