import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const inputNum = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        number: inputNum.current.value,
      },
    });
    inputNum.current.value = "";
  };

  const handleSub = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        number: inputNum.current.value,
      },
    });
    inputNum.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch({
      type: "PRIVACY_TOGGLE",
    });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-outline-primary px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning px-4 gap-3"
          onClick={handlePrivacyToggle}
        >
          Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controls-div-2">
        <input
          type="Number"
          className="form-control input-add"
          placeholder="Add number"
          aria-label="Username"
          aria-describedby="basic-addon1"
          ref={inputNum}
        ></input>
        <button
          type="button"
          className="btn btn-info px-4 gap-3"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger px-4 gap-3"
          onClick={handleSub}
        >
          Subtract
        </button>
      </div>
    </>
  );
};
export default Controls;
