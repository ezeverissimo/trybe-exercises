import React from "react";

class LabelsPessoal extends React.Component {

  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',

    }
  
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {

    this.setState({
      [target.name]: target.value,
    });

  }
  render() {
    const { nome, email, cpf, endereco, cidade } = this.state;

    return (
      <>
        <label htmlFor="nome">
          Nome:
          <input onChange={ this.handleChange } value={nome} type="text" id="nome" name="nome"/>
        </label>
        <label htmlFor="email">
          Email:
          <input onChange={ this.handleChange } value={email} type="email" id="email" name="email"/>
        </label>
        <label htmlFor="cpf">
          CPF:
          <input onChange={ this.handleChange } value={cpf} type="text" id="cpf" name="cpf"/>
        </label>
        <label htmlFor="endereco">
          Endereço:
          <input onChange={ this.handleChange } value={endereco} type="text" id="endereco" name="endereco"/>
        </label>
        <label htmlFor="cidade">
          Cidade:
          <input onChange={ this.handleChange } value={cidade} type="text" id="cidade" name="cidade"/>
        </label>
      </>
    )
  }
}

export default LabelsPessoal;