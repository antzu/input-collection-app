import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { connect } from 'react-redux';
import { fetchRequests } from '../../actions';

import SearchBar from "./SearchBar";
import Requests from "./Requests";
import NewRequestButton from "./NewRequestButton";
import RequestContainer from "../Request/RequestContainer";

class RequestsContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            isCompletedOnly: false
        }

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleIsCompletedChange = this.handleIsCompletedChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        })
    }

    handleIsCompletedChange(isCompletedOnly) {
        this.setState({
            isCompletedOnly: isCompletedOnly
        })
    }

    render() {

        console.log(this.props.match.url);
        const filterText = this.state.filterText;
        const isCompletedOnly = this.state.isCompletedOnly;
        // const requests = this.props.requests;

        return (
            <div className="">

                <SearchBar
                    filterText={filterText}
                    isCompletedOnly={isCompletedOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onIsCompletedChange={this.handleIsCompletedChange}
                />
                <NewRequestButton/>

                {/*<Requests*/}
                {/*requests={REQUESTS}*/}
                {/*filterText={filterText}*/}
                {/*isCompletedOnly={isCompletedOnly}*/}
                {/*/>*/}

                <Switch>
                    <Route
                        exact path={this.props.match.url}
                        render={props => <Requests {...props}
                                                   filterText={filterText}
                                                   isCompletedOnly={isCompletedOnly}
                                                   // requests={requests}
                        />}
                    />
                    <Route
                        path={`${this.props.match.url}/:requestId`}
                        render={props => <RequestContainer {...props}
                        />}
                    />
                </Switch>
            </div>
        );
    }
}

export default RequestsContainer;