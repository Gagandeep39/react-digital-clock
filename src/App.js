import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import ToggleButtonComponent from './components/ToggleButton/ToggleButtonComponent';

class App extends Component {

  constructor(props) {
    super (props);
    this.state = {
      showDate: false
    }
  }

  toggleHandler = () => {
    this.setState({showDate: !this.state.showDate})
  }

  render () {
    return (
      <div>
        <HeaderComponent />
        <ToggleButtonComponent toggle={this.toggleHandler} />
      </div>
    );
  }
}

export default App;
