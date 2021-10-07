import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */

class App extends React.Component {
  
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
  }

  handleClick1() {
    console.log('Clicou no botão! 1')
    console.log(this);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>Meu botão</button>
      </div>
    )
  }
}

export default App;