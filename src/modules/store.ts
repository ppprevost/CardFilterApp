import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
// Logger with default options
import logger from "redux-logger";
import reducer from "./reducer";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())

export default store

