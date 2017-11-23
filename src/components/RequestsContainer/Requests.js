import React, { Component } from 'react';
import RequestRow from "./RequestRow";

class Requests extends Component {

    render() {

        const filterText = this.props.filterText;
        const isCompletedOnly = this.props.isCompletedOnly;

        const requestRows = [];

        this.props.requests.forEach(request => {

            if(request.name.indexOf(filterText) === -1) {
                return;
            }
            if(isCompletedOnly && !request.completed) {
                return;
            }
            requestRows.push(
                <RequestRow
                    request={request}
                    key={request.id}
                />
            )
        });

        return (
            <div className="">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>{requestRows}</tbody>
                </table>
            </div>
        );
    }
}

export default Requests;