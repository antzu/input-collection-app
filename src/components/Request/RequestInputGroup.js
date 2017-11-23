import React, { Component }from 'react';
import RequestInput from "./RequestInput";

class RequestInputGroup extends Component {

    render() {

        const fields = [];

        this.props.fields.forEach(field => {
            fields.push(<RequestInput name={field}/>)
        })
        return (
            <div className="">

                <h5>{this.props.name}</h5>
                {fields}
            </div>
        );
    }
}

export default RequestInputGroup;