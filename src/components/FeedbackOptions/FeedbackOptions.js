import React from 'react';
import propTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
    <>
      <button className={s.button} type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={s.button} type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={s.button} type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </>

);
export default FeedbackOptions;

FeedbackOptions.propTypes = {   
    onLeaveFeedback: propTypes.func,
  };

