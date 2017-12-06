import React, { Component } from 'react';
import './assets/css/pure-min.css';
import './assets/css/side-menu.css';
import imgJohnsonPerfil from './assets/img/johnson-perfil-50x50.jpg';
import AuthorBox from './Author.js';

class App extends Component {
  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>
        <div id="menu">
          <div className="pure-menu">
            <div className="pure-menu-heading">
              <img className="pure-img-logo-menu" src={imgJohnsonPerfil} alt="Johnson Mauro Perfil" />
              <span className="pure-person">Johnson Mauro</span>
            </div>
            <ul className="pure-menu-list">
              <li className="pure-menu-item menu-item-divided pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autor</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Livros</a></li>
            </ul>
          </div>
        </div>
        <div id="main">
          <div className="header">
            <h1>Cadastro de Autores</h1>
          </div>
          <AuthorBox />
        </div>
      </div>
    );
  }
}

export default App;
