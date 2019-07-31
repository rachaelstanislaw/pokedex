import React, { Component } from 'react';
import './App.css';
import Pokedex from './Pokedex';

class App extends Component {
render(){
    return (
      <div className="App">
        <h1 className="Poke-title">POKEDEX</h1>
        <Pokedex />
      </div>
    );
  }
}

export default App;
