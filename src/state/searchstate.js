import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      search: { init: action.value },
    });
  }
  console.log(action.value);
  return state;
};

const initialState = { search: { init: "init" } };

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
