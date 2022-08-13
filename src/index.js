import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (state = 0) => {
  return state;
};

const countStore = legacy_createStore(countModifier);
console.log(countStore.getState());
