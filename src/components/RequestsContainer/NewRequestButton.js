import React, { Component } from 'react';
import { newRequest } from '../../actions';

class NewRequestButton extends Component {

    handleClick() {
        console.log("button clicked");
        newRequest(10, "teere");
    }
    render() {
        return (
            <div className="">
                <button onClick={e => this.handleClick(e)}>New Request</button>
            </div>
        );
    }
}

export default NewRequestButton;