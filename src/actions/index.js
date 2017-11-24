import { FETCH_REQUESTS, FETCH_REQUEST_FIELDS } from './actionTypes';
import { REQUESTS, REQUEST_FIELDS } from '../requestsAPI';

export function fetchRequests() {
    const requests = REQUESTS;
    return {
        type: FETCH_REQUESTS,
        payload: requests
    }

}

export function fetchRequestFields() {
    const requestFields = REQUEST_FIELDS;
    return {
        type: FETCH_REQUEST_FIELDS,
        payload: requestFields
    }

}