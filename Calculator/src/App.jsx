import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
function App() {
  const handleOnEqual = (expression) => {
    console.log(expression);
  };
  return (
    <div className={styles.calculator}>
      <Display onEqual={handleOnEqual}></Display>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}

export default App;
