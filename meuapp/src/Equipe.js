// entendendo props e component
import React from 'react';

const Equipe = props => {
  return (
    <div>
      <Sobre name={props.name} cargo={props.cargo} idade={props.idade} />
      <Social fb={props.facebook} lk={props.linkedIn} yt={props.youtube} />
      <hr />
    </div>
  );
};

const Sobre = props => {
  return (
    <div>
      <h2>Olá sou o(a) {props.name}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>idade: {props.idade}</h3>
    </div>
  );
};

const Social = props => {
  return (
    <div>
      <a href={props.fb}>Facebook </a>
      <a href={props.lk}>LinkedIn </a>
      <a href={props.yt}>Youtube </a>
    </div>
  );
};

function Equipe() {
  return (
    <div>
      <h1>Coneça nossa equipe:</h1>
      <Equipe
        name="Fagner"
        cargo="Programador"
        idade="29"
        facebook="https://www.facebook.com"
        linkedIn="https://www.linkedin.com"
        youtube="https://www.youtube.com"
      />
      <Equipe
        name="Fernanda"
        cargo="Designer"
        idade="22"
        facebook="https://www.facebook.com"
        linkedIn="https://www.linkedin.com"
        youtube="https://www.youtube.com.br"
      />
      <Equipe
        name="Amanda"
        cargo="Front-End"
        idade="24"
        facebook="https://www.facebook.com"
        linkedIn="https://www.linkedin.com"
        youtube="https://www.youtube.com.br"
      />
    </div>
  );
}

export default Equipe;
