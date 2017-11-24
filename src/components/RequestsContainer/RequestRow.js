import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RequestRow extends Component {

    render() {

        const request= this.props.request;
        const url = this.props.url;

        return (
            <tr>
                <td><Link to={`${url}/${request.id}`}>{request.id}</Link></td>
                <td>{request.name}</td>
                <td>{request.status}</td>
                <td>{request.completed ? "Completed" : "Not completed"}</td>
            </tr>
        );
    }
}

export default RequestRow;