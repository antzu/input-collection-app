import { FETCH_REQUESTS } from '../actions/actionTypes';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_REQUESTS:
            console.log("FETCH_REQUESTS");
            return action.payload;

        default:
            return state;
    }
}