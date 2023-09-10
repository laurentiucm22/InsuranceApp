import { combineReducers } from "redux";
import { countOffersCreated } from "./slices/offersCreatedSlice";

const rootReducer = combineReducers({
  offerCount: countOffersCreated,
});

export default rootReducer;
