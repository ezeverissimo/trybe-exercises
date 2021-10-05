import React from 'react';
import './App.css';
import Content from './Content';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}

export default App;
