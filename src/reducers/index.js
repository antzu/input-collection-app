import { combineReducers } from "redux";
import requestsReducer from './requestsReducer';

const rootReducer = combineReducers({
    requests: requestsReducer
})

export default rootReducer;