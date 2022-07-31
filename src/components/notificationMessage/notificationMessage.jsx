import styles from '../formFeedback/formFeedback.module.css';

function NotificationMessage(props) {
  return (
    <div>
      <h2 className={styles.notification}>{props.title}</h2>
    </div>
  );
}
export default NotificationMessage;