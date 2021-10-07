import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      clicks: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((berforeState, _props) => ({
      clicks: berforeState.clicks + 1
    }))
    let quantClick = this.state.clicks;
    if (quantClick % 2 === 0) {
      console.log('impar');
    } else {
      console.log('par');
    }
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.clicks}</button>
  }
}

export default App;