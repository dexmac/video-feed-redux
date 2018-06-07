import { createStore, combineReducers, applyMiddleware } from "redux";
import middlewares from "./middlewares";
import feed from "./feed/reducer";
import item from "./item/reducer";
import sourceSelect from "./sourceSelect/reducer";

const reducer = combineReducers({
  feed,
  item,
  sourceSelect
});

/**
 * Main function to create the store
 */
const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
