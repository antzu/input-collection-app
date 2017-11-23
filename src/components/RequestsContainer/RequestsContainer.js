import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import Requests from "./Requests";
import NewRequestButton from "./NewRequestButton";

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
        return (
            <div className="">
                <SearchBar
                    filterText={this.state.filterText}
                    isCompletedOnly={this.state.isCompletedOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onIsCompletedChange={this.handleIsCompletedChange}
                />
                <NewRequestButton/>
                <Requests
                    requests={this.props.requests}
                    filterText={this.state.filterText}
                    isCompletedOnly={this.state.isCompletedOnly}
                />

            </div>
        );
    }
}

export default RequestsContainer;