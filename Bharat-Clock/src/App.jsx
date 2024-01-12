function App() {
  let time = new Date();
  return (
    <>
      <center>
        <h1 className="fw-bolder">Bharat Clock</h1>
        <p className="lead">
          This is the clock that shows time in Bharat at all times
        </p>
        <p className="lead">
          This is the current time: {time.toLocaleDateString()} -{" "}
          {time.toLocaleTimeString()}
        </p>
      </center>
    </>
  );
}

export default App;
