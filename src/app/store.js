import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import visitorReducer from "./reducers/visitorReducer";
import discountReducer from "./reducers/discountReducer";


const newLogger = (store) => (next) => (action) => {
	console.log("Logger - ", action);
	next(action);
};


export default createStore(
	combineReducers({visitorReducer,discountReducer}),
	{},
	applyMiddleware(logger) // newLogger,
);