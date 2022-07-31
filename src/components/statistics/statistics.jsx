import React from 'react';
import styles from '../formFeedback/formFeedback.module.css';

const Statistics = ({ stGood, stNeutral, stBad, total, positivePercentage }) => (
  <div className={styles.state}>
    <span>good: {stGood}</span>
    <span>neutral: {stNeutral}</span>
    <span>bad: {stBad}</span>
    <span>total: {total}</span>
    <span>positive feedback: {Math.round(positivePercentage)}%</span>
  </div>
);
export default Statistics;