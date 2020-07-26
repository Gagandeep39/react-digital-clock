import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ToggleButtonComponent.component.css';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';

export default class ToggleButtonComponent extends Component {
  render() {
    return (
      <div className='toggleComponent'>
        <label class='switch'>
          <input type='checkbox' id='togBtn' />
          <div class='slider round'></div>
        </label>
        <Calendar />
      </div>
    );
  }
}
