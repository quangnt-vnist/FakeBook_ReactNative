import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./combine-reducer";
const composeEnhancers = compose;

var store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
); // tạo ra một cái kho gán cho biến store

export default store;