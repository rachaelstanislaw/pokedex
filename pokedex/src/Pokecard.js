import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Pokecard extends Component {
render(){
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-title">{this.props.name}</h2>
        <img src={this.props.image} alt={this.props.name} />
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">Base Experience: {this.props.xp}</div>
        <br></br>
      </div>
    );
  }
}
