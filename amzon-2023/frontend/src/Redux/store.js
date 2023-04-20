import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as shoeReducers  } from "./Shoe/reducer";
import{reducer as clothsReducers} from "./Cloths/reducer"
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  clothsReducers,
  shoeReducers
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
