import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleIsCompletedChange = this.handleIsCompletedChange.bind(this);
    }

    handleFilterTextChange(e){
        this.props.onFilterTextChange(e.target.value);
    }

    handleIsCompletedChange(e){
        this.props.onIsCompletedChange(e.target.checked);
    }

    render() {

        const filterText = this.props.filterText;
        const isCompletedOnly = this.props.isCompletedOnly;

        return (
            <div className="">
                <form>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={filterText}
                        onChange={this.handleFilterTextChange}
                    />
                    <p>
                        <input
                            type="checkbox"
                            checked={isCompletedOnly}
                            onChange={this.handleIsCompletedChange}
                        />
                        {' '}
                        Only show completed
                    </p>
                </form>
            </div>
        );
    }
}

export default SearchBar;