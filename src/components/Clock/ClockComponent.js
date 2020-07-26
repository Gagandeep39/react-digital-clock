import React, { Component } from 'react';
import './ClockComponent.component.css';

export default class ClockComponent extends Component {
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
  months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  constructor(props) {
    super(props);
    this.state = {
      time: '',
      date: '',
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    let current_datetime = new Date();

    let currentTime =
      current_datetime.getHours() +
      ':' +
      current_datetime.getMinutes() +
      ':' +
      current_datetime.getSeconds();

      // this.weekDays[current_datetime.getDay()] +
      //   ' ' +
      //   current_datetime.getDate() +
      //   ' ' +
      //   this.months[current_datetime.getMonth()] +
      //   ' ' +
      //   current_datetime.getFullYear(),
    this.setState({
      time: currentTime,
      date: current_datetime.toDateString()
        
    });
  }

  render() {
    let dateUi = null;
    if (this.props.dateEnabled) {
      dateUi = <p>{this.state.date}</p>;
    }

    return (
      <div className='circle'>
        <div className='inner-circle'>
          <h3>{this.state.time}</h3>
          {dateUi}
        </div>
      </div>
    );
  }
}
