import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';

class App extends Component {
  render () {
    return (
      <div>
        <HeaderComponent />
      </div>
    );
  }
}

export default App;
