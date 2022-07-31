import React from 'react';
import Controls from '../controls/controls';
import Statistics from '../statistics/statistics';
import NotificationMessage from '../notificationMessage/notificationMessage';
import styles from '../formFeedback/formFeedback.module.css';

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
        visible: true,
      };
    });
  };
  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        visible: true,
      };
    });
  };
  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        visible: true,
      };
    });
  };

  render() {
    const countTotalFeedback =
      this.state.good + this.state.neutral + this.state.bad;
    const countPositiveFeedbackPercentage =
      (100 / countTotalFeedback) * this.state.good;
    return (
      <div className={styles.box}>
        <h1 className={styles.title}>Please leave feedback</h1>
        <div>
          <Controls
            onGood={this.handleGood}
            onNeutral={this.handleNeutral}
            onBad={this.handleBad}
          />
        </div>

        <h2>Statistics</h2>
        {countTotalFeedback ? (
          <div>
            <Statistics
              positivePercentage={countPositiveFeedbackPercentage}
              total={countTotalFeedback}
              stGood={this.state.good}
              stNeutral={this.state.neutral}
              stBad={this.state.bad}
            />
          </div>
        ) : (
            <NotificationMessage title="There is no feedback" />
        )}
      </div>
    );
  }
}

export default Formfeedback;