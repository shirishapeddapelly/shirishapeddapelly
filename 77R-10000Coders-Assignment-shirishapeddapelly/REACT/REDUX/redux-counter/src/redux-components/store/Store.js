import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "../Common-reducer/CommonReducer";
import thunk from "redux-thunk";
const middleware = applyMiddleware(thunk);

//import { createStore } from "redux";

// export let store = createStore(TodoListReducer);
const store = legacy_createStore(reducer, middleware);
// import {createStore} from 'redux';
// import {rootReducer} from './rootReducer';

// export const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
export default store;
