import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let date = this.getTimeUntil(this.props.deadline);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor((time/1000/60/60) % 24);
    const days = Math.floor(time/1000/60/60/24);

    let date = {
      days,
      hours,
      minutes,
      seconds
    };
    return date;
  }

  render() {
    return (
      <div>
        <div className = 'ClockDays'>{this.leading0(this.state.days)} days</div>
        <div className = 'ClockHours'>{this.leading0(this.state.hours)} hours</div>
        <div className = 'ClockMinutes'>{this.leading0(this.state.minutes)} minutes</div>
        <div className = 'ClockSeconds'>{this.leading0(this.state.seconds)} seconds</div>
      </div>
    )
  }
}

export default Clock;
