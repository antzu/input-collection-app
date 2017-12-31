import { FETCH_REQUESTS, NEW_REQUEST } from '../actions/actionTypes';
import { REQUESTS_Z012, REQUESTS_Z010, REQUESTS_Z002, REQUEST_FIELDS } from '../requestsAPI';
import { addToJSON } from '../util/dataCRUD';


export default function (state = [], action) {
    switch (action.type) {
        case FETCH_REQUESTS:
            console.log("FETCH_REQUESTS");
            console.log(state);
            return action.payload
        case NEW_REQUEST:
            console.log("NEW_REQUEST");
            return action.payload
        default:
            return state
    }
}