import React from 'react';
import Statistics from '../statistics/statistics';
import NotificationMessage from '../notificationMessage/notificationMessage';
import styles from '../formFeedback/formFeedback.module.css';
import FeedbackOptions from '../FeedbackOptions/feedbackOptions';


class Formfeedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  onLeaveFeedback = name => {
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

countTotalFeedback = () => {
  return this.state.good + this.state.neutral + this.state.bad;
};
countPositiveFeedbackPercentage = () => {
  return (100 / this.countTotalFeedback()) * this.state.good;
};


  render() {
    const { good, neutral, bad } = this.state;
    const options = [
      { title: 'Good', name: 'good' },
      { title: 'Neutral', name: 'neutral' },
      { title: 'Bad', name: 'bad' },
    ];
    return (
      <div className={styles.box}>
        <h1 className={styles.title}>Please leave feedback</h1>
        <div>          
          <FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          options={options}
        />
        </div>
        <h2>Statistics</h2>
        {this.countTotalFeedback() ? (
          <div>
            <Statistics
              stGood={good}
              stNeutral={neutral}
              stBad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </div>
        ) : (
            <NotificationMessage title="There is no feedback" />
        )}
      </div>
    );
  };
}

export default Formfeedback;