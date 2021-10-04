import React from 'react';
import './App.css';
import Content from './Content';
import Header from './Header.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}

export default App;
