import { combineReducers } from "redux";

import loadingReducer from "./loading";
import itemsReducer from "./items";
import userReducer from "./user";

const rootReducer = combineReducers({
  userReducer,
  loadingReducer,
  itemsReducer
});

export default rootReducer;
