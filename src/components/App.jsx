import React, { Component } from "react";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

//import s from './App.module.css';

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

options = Object.keys(this.state);

//handleClick = evt => {
//  this.setState(state => {
//return { button: prevState.button + 1}
//  });  
//};

//handleClick = button => {
//  this.setState({ [button]: this.state[button] + 1 });
//};

handleClick = option => {
  //let key = button.target.textContent.toLowerCase();
  this.setState( prevState => ({ [option]: prevState[option] + 1 }));
};

countTotalFeedback = () => {
  const { good, bad, neutral } = this.state;
  return good + neutral + bad;
};

countPositiveFeedbackPercentage = () => {
  return Math.round((this.state.good * 100) / this.countTotalFeedback());
}
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);

    return (
      <>
      <Section title="Please leave feedback">
      <FeedbackOptions 
      options={this.options}
      onLeaveFeedback={this.handleClick}
      />
      </Section>    

    {!total ? (
 <Notification message="There is no feedback" />
    ) : (
    <Section title="Statistics">
    <Statistics 
    good={good}
    neutral={neutral}
    bad={bad}
    total={total}
    positivePercentage={this.countPositiveFeedbackPercentage()}
    />
    </Section>)
  }
      </>
    );
  }
} 

export default App;