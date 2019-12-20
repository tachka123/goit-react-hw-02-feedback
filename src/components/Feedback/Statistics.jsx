import React from 'react';
import T from 'prop-types';
import Statistic from './Statisctic';
import CountPercent from './CountPercentOfAverageFeedback';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const feedback = CountPercent(good, total);
  return (
    <ul>
      <Statistic label="Good" value={good} />
      <Statistic label="Neutral" value={neutral} />
      <Statistic label="Bad" value={bad} />
      <Statistic label="Total" value={total} />
      <Statistic label="Feedback" value={feedback} percent />
    </ul>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
};

Statistics.propTypes = {
  good: T.number,
  neutral: T.number,
  bad: T.number,
};

export default Statistics;
