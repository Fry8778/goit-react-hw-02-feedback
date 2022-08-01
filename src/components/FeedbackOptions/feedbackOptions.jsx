import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from '../formFeedback/formFeedback.module.css';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.feedoptions}>
      {options.map(({ title, name }) => {
        return (
          <li key={nanoid()} >
            <button
             className={styles.button}
              onClick={() => onLeaveFeedback(name)}
            >
              {title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;