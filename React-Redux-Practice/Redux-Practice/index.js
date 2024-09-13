const redux = require("redux");

const INTIAL_VALUE = {
  counter: 0,
};
const reducer = (store = INTIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: newStore.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: newStore.counter - 1 };
  } else if (action.type === "ADDITION") {
    newStore = { counter: newStore.counter + action.payload.number };
  }
  return newStore;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
}; // IT will just use the value, UI type to show the value

store.subscribe(subscriber); // With this subscriber will be subcribed to the store so whenever the store values changes it will call the subcriber and subcriber will show the result.

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "ADDITION", payload: { number: 7 } });
store.dispatch({ type: "INCREMENT" });
