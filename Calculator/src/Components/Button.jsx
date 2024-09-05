import styles from "./Button.module.css";

const Button = ({ buttonName, onButtonClick }) => {
  return (
    <button
      className={styles.button}
      onClick={() => {
        onButtonClick(buttonName);
      }}
    >
      {buttonName}
    </button>
  );
};
export default Button;
