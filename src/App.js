import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import ToggleButtonComponent from './components/ToggleButton/ToggleButtonComponent';
import ClockComponent from './components/Clock/ClockComponent';

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
        <ClockComponent dateEnabled={this.state.showDate} />
      </div>
    );
  }
}

export default App;
