import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Controls from "./components/Controls";
import Container from "./components/Container";
import { useSelector } from "react-redux";
import TogglePrivacy from "./components/TogglePrivacy";

function App() {
  const togglePrivacy = useSelector((store) => store.privacy);
  return (
    <div className="display-container">
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {togglePrivacy ? <TogglePrivacy /> : <DisplayCounter />}
            <Controls></Controls>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
