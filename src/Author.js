import React, { Component } from 'react';
import $ from 'jquery';
import InputCustom from './components/InputCustom.js';
import SubmitButton from './components/SubmitButton.js';
import axios from 'axios';

class FormAuthor extends Component {
  constructor(){
    super();
    this.state = {nome:'', email:'', senha:''};
    this.enviaForm = this.enviaForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }

  enviaForm(evento){
    evento.preventDefault();

    $.ajax({
      url:"http://cdc-react.herokuapp.com/api/autores",
      contentType: 'application/json',
      dataType: 'json',
      type:'post',
      data:JSON.stringify({nome:this.state.nome,email:this.state.email,senha:this.state.senha}),
      success: (resposta) => this.props.cbAtualizaListagem(resposta),
      error: (resposta) => console.log("Não foi possível ser enviado!")
    });
  }

  setNome(evento){
    this.setState({nome:evento.target.value});
  }

  setEmail(evento){
    this.setState({email:evento.target.value});
  }

  setSenha(evento){
    this.setState({senha:evento.target.value});
  }

  render(){
    return(
      <div className="pure-form pure-form-aligned">
        <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
          <InputCustom label="Nome" id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} />
          <InputCustom label="Email" id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} />
          <InputCustom label="Senha" id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} />
          <SubmitButton text="Gravar" />
        </form>
      </div>
    );
  }
}

class TableAuthor extends Component {
  render(){
    return(
      <div>
        <table className="pure-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.lista.map((autor) => {
                return(
                  <tr key={autor._id}>
                    <td>{autor.name}</td>
                    <td>{autor.author}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default class AuthorBox extends Component{
  constructor(){
    super();
    this.state = {lista: []};
    this.atualizaListagem = this.atualizaListagem.bind(this);
  }

  componentDidMount(){
    axios.get("http://localhost:3001/books")
    .then((response) => {
      console.log(response);
      return this.setState({lista:response});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  atualizaListagem = (novaLista) => this.setState({lista:novaLista});
  
  render(){
    return(
      <div className="content" id="content">
        <FormAuthor cbAtualizaListagem={this.atualizaListagem} />
        <TableAuthor lista={this.state.lista} />
      </div>
    );
  }
}