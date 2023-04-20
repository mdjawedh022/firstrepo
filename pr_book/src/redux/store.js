import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import{reducer as productReducers} from "./product/product.reducer"
import thunk from "redux-thunk";

const rootReducers=combineReducers({
productReducers
})

export const store=legacy_createStore(
    rootReducers,applyMiddleware(thunk)
)