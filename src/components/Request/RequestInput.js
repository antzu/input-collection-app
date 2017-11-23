import React, { Component }from 'react';

class RequestInput extends Component {

    render() {
        return (
            <div className="">

                <label>{this.props.name}</label>
                <input type="text" />
            </div>
        );
    }
}

export default RequestInput;