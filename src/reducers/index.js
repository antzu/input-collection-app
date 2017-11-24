import { combineReducers } from "redux";
import requestsReducer from './requestsReducer';
import requestFieldsReducer from './requestFieldsReducer';

const rootReducer = combineReducers({
    requests: requestsReducer,
    requestFields: requestFieldsReducer
})

export default rootReducer;