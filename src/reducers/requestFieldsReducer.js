import { FETCH_REQUEST_FIELDS } from '../actions/actionTypes';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_REQUEST_FIELDS:
            return action.payload;

        default:
            return state;
    }
}