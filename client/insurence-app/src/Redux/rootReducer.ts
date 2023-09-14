import { combineReducers } from "redux";
import counterReducer from "./slices/offersCreatedSlice";
import uiReducer from "./slices/uiSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  ui: uiReducer,
});

export default rootReducer;
