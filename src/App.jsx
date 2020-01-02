import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'January 1, 2025',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
      <div className = 'App'>
        <div className = 'AppTitle'>
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline = {this.state.deadline}
        />
        <Form inline
          className = 'form'>
          <FormControl
            className = 'DeadlineInput'
            placeholder = 'new date'
            onChange = {event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;
