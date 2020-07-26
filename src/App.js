import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import ToggleButtonComponent from './components/ToggleButton/ToggleButtonComponent';

class App extends Component {
  render () {
    return (
      <div>
        <HeaderComponent />
        <ToggleButtonComponent />
      </div>
    );
  }
}

export default App;
