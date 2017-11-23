import React, { Component } from 'react';

class RequestRow extends Component {

    render() {

        const request= this.props.request;

        return (
            <tr>
                <td>{request.id}</td>
                <td>{request.name}</td>
                <td>{request.status}</td>
                <td>{request.completed ? "Completed" : "Not completed"}</td>
            </tr>
        );
    }
}

export default RequestRow;