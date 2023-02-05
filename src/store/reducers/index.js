import { combineReducers } from "redux";
import trackingReducer from "./trackingReducer";

const rootReducer = combineReducers({ tracking: trackingReducer });
export default rootReducer;
