import styles from './Button.module.scss';

const Button = ({ text, onClick }) => (
  <>
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  </>
);

export default Button;
