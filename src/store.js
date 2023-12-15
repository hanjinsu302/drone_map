import { combineReducers, createStore } from "redux";
import reducers from "./reducers";
import { composeWithDevTools} from 'redux-devtools-extension'

export default initStates => createStore(
  combineReducers(reducers),
  initStates,
  composeWithDevTools(),
)