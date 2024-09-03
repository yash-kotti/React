import Button from "./Button";
import styles from "./ButtonContainer.module.css";

const ButtonContainer = () => {
  const buttonsList = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonsList.map((buttonName) => (
        <Button buttonName={buttonName} key={buttonName}></Button>
      ))}
    </div>
  );
};
export default ButtonContainer;
