// external imports
import { combineReducers } from "redux";

// reducers import
import AuthReducer from "./Auth";

export default combineReducers({
  auth: AuthReducer
});
