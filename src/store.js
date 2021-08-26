import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { boilerReducer } from "./reducers/boilerReducer";
import {
  wazirxReducers,
  zebPayReducers,
  coinDcxReducers,
  crossTowerReducers,
  usdToInrReducers,
  mainCardApiReducers,
} from "./reducers/homepageReducer";

const reducer = combineReducers({
  boilerListReducer: boilerReducer,
  wazirxBtcReducer: wazirxReducers,
  zebPayBtcReducer: zebPayReducers,
  coinDcxBtcReducer: coinDcxReducers,
  crossTowerBtcReducer: crossTowerReducers,
  usdToInrBtcReducers: usdToInrReducers,
  mainCardApiBtcReducers: mainCardApiReducers,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
