import React, { Component } from "react";
import App from "../App";

class Pokemons extends Component {
  state = {};

  tipos() {
    let temp = "";
    for (let i = 0; i < this.props.paloma.length; i++) {
      if (i === 0) {
        temp += this.props.paloma[i];
      } else {
        temp = this.props.paloma[i] + ", " + temp;
      }
    }
    return temp;
  }
  render() {
    return (
      <div>
        <h1>Nombre: {this.props.perro}</h1>
        <h3>ID: {this.props.gato}</h3>
        <h3>Tipos: {this.tipos()}</h3>
      </div>
    );
  }
}

export default Pokemons;
