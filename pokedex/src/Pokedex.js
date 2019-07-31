import React, { Component } from 'react';
import './App.css';
import Pokecard from './Pokecard';
import charmander from './sprites/4.png';
import squirtle from './sprites/7.png';
import metapod from './sprites/11.png';
import butterfree from './sprites/12.png';
import pikachu from './sprites/25.png';
import jigglypuff from './sprites/39.png';
import gengar from './sprites/94.png';
import evee from './sprites/133.png';
import bulbasaur from './sprites/1.png';

export default class Pokedex extends Component {
  static defaultProps = {
    pokemon : [
      {name: 'Charmander', image: charmander, type: 'Fire', xp: '62'},
      {name: 'Squirtle', image: squirtle, type: 'Water', xp: '63'},
      {name: 'Metapod', image: metapod, type: 'Bug', xp: '72'},
      {name: 'Butterfree', image: butterfree, type: 'Flying', xp: '178'},
      {name: 'Pikachu', image: pikachu, type: 'Electric', xp: '112'},
      {name: 'Jigglypuff', image: jigglypuff, type: 'Normal', xp: '95'},
      {name: 'Gengar', image: gengar, type: 'Poison', xp: '225'},
      {name: 'Evee', image: evee, type: 'Normal', xp: '65'},
    ]
  }
render(){
    return (
      <div className="Pokedex-cards">
        {this.props.pokemon.map((p) => (
          <Pokecard name={p.name} image={p.image} type={p.type} xp={p.xp} />
        ))}
      </div>
    );
  }
}
