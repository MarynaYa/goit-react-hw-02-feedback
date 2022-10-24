import React, { Component } from "react";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import s from './App.module.css';

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  render() {
    
  }
} 

export default App;