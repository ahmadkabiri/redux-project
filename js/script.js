import {
  counterDecrement,
  counterIncrement,
  counterSetZero,
} from "../src/Redux/actionTypes.js";

import {
  incrementAction,
  decrementAction,
  setZeroAction,
} from "../src/Redux/actionCreator.js";

const decBtn = document.querySelector("#dec");
const ressetBtn = document.querySelector("#reset");
const incBtn = document.querySelector("#inc");

const numbElem = document.querySelector("#num");

// Declare Counter Reducer

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case counterIncrement: {
      return state + 1;
    }
    case counterDecrement: {
      return state - 1;
    }
    case counterSetZero: {
      return state - state;
    }
    default: {
      return state;
    }
  }
};

const store = Redux.createStore(counterReducer);

console.log(store);

decBtn.addEventListener("click", () => {
  store.dispatch(decrementAction());
  console.log(store.getState());
  numbElem.innerHTML = store.getState();
});

ressetBtn.addEventListener("click", () => {
  store.dispatch(setZeroAction());
  console.log(store.getState());
  numbElem.innerHTML = store.getState();
});

incBtn.addEventListener("click", () => {
  store.dispatch(incrementAction());
  console.log(store.getState());
  numbElem.innerHTML = store.getState();
});
