import Button from "./Button";
import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ OnClickDisplay }) => {
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
  const handleOnClick = (buttonName) => {
    console.log(buttonName);
    OnClickDisplay(buttonName);
  };
  return (
    <div className={styles.buttonContainer}>
      {buttonsList.map((buttonName) => (
        <Button
          buttonName={buttonName}
          key={buttonName}
          onButtonClick={handleOnClick}
        ></Button>
      ))}
    </div>
  );
};
export default ButtonContainer;
