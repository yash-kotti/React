import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <input id="displayInput" type="text" />
        <div id="buttons-container">
          <button>C</button>
          <button>1</button>
          <button>2</button>
          <button>+</button>
          <button>3</button>
          <button>4</button>
          <br />
          <button>-</button>
          <button>5</button>
          <button>6</button>
          <br />
          <button>*</button>
          <button>7</button>
          <button>8</button>
          <br />
          <button>/</button>
          <button>=</button>
          <button>9</button>
          <br />
          <button>0</button>
          <button>.</button>
        </div>
      </div>
    </>
  );
}

export default App;
