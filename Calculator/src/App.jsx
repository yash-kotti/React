import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";

function App() {
  const [buttonValue, setButtonValue] = useState("");
  const handleOnClick = (expression) => {
    if (expression === "=") {
      const res = eval(buttonValue);
      setButtonValue(res);
    } else if (expression === "C") {
      setButtonValue("");
    } else setButtonValue(buttonValue + expression);
  };

  return (
    <div className={styles.calculator}>
      <Display inputValue={buttonValue}></Display>
      <ButtonContainer OnClickDisplay={handleOnClick}></ButtonContainer>
    </div>
  );
}

export default App;
