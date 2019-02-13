import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login'
import PokemonApiContainer from './PokemonApiContainer/PokemonApiContainer'


export default class App extends Component {
  state = {
    logged: false,
    username: ''
  }
  login = (username) => {
    this.setState({
      logged: true,
      username: username
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.logged ? <PokemonApiContainer username={this.state.username}/> : <Login login={this.login}/>}
      </div>
    )
  }
}

