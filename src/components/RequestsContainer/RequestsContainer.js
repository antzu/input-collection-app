import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import SearchBar from "./SearchBar";
import Requests from "./Requests";
import NewRequestButton from "./NewRequestButton";
import RequestContainer from "../Request/RequestContainer";
import { REQUEST_FIELDS } from "../../requestsAPI";

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

        const REQUESTS = this.props.requests;
        const filterText = this.state.filterText;
        const isCompletedOnly = this.state.isCompletedOnly;

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
                                                   requests={REQUESTS}
                                                   filterText={filterText}
                                                   isCompletedOnly={isCompletedOnly}
                        />}
                    />
                    <Route
                        path={`${this.props.match.url}/:requestId`}
                        render={props => <RequestContainer {...props}
                                                           fields={REQUEST_FIELDS}
                        />}
                    />
                </Switch>
            </div>
        );
    }
}

export default RequestsContainer;