import { FETCH_REQUESTS, FETCH_REQUEST_FIELDS, NEW_REQUEST } from './actionTypes';
import { REQUESTS_Z012, REQUESTS_Z010, REQUESTS_Z002, REQUEST_FIELDS } from '../requestsAPI';

export function fetchRequests(requestType) {
    let  requests = [];

    switch (requestType) {
        case "/Z002":
            requests = REQUESTS_Z002;
            console.log("Dispatched: z002");
            break;

        case "/Z010":
            requests = REQUESTS_Z010;
            console.log("Dispatched: z010");
            break;

        case "/Z012":
            requests = REQUESTS_Z012;
            console.log("Dispatched: z012");
            break;

        default:

    }

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

class Request {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.status = "Production";
        this.completed = false;
    }
}

export function newRequest(id, name) {
    const request = new Request(id, name);

    return {
        type: NEW_REQUEST,
        payload: request
    }

}