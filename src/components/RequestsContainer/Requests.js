import React, { Component } from 'react';
import RequestRow from "./RequestRow";

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Requests extends Component {

    componentWillMount(){
        this.props.fetchRequests();
    }

    render() {

        const filterText = this.props.filterText;
        const isCompletedOnly = this.props.isCompletedOnly;

        const requestRows = [];

        this.props.requests.forEach((request) => {

            //URL got from Route
            const url = this.props.match.url;

            if(request.name.indexOf(filterText) === -1) {
                return;
            }
            if(isCompletedOnly && !request.completed) {
                return;
            }
            requestRows.push(
                <RequestRow
                    url={url}
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

function mapStateToProps(state) {
    return { requests: state.requests}
}

export default connect(mapStateToProps, actions)(Requests);