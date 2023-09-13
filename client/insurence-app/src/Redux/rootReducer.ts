import { combineReducers } from "redux";
import { countOffersCreated } from "./slices/offersCreatedSlice";
import formDataReducer from "./slices/offerFormDataSlice";

const rootReducer = combineReducers({
  offerCount: countOffersCreated,
  formData: formDataReducer,
});

export default rootReducer;
