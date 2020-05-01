import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  if (action.type === `SET`) {
    return Object.assign({}, state, {
      search: action.value,
    });
  }
  console.log(action.value);
  return state;
};

const initialState = { search: { articles: "init" } };

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
