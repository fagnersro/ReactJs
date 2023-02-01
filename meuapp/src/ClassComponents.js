import React, { Component } from 'react';

class Equipe extends Component {
  render() {
    return (
      <div>
        <Sobre
          name={this.props.name}
          cargo={this.props.cargo}
          idade={this.props.idade}
        />
        <hr />
      </div>
    );
  }
}

class Sobre extends Component {
  render() {
    return (
      <div>
        <h2>Olá sou o(a) {this.props.name}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade} anos</h3>
      </div>
    );
  }
}

function ClassComponents() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe name="Fagnersro" cargo="Programador" idade="27" />
      <Equipe name="Felipe" cargo="Designer" idade="18" />
    </div>
  );
}

export default ClassComponents;
