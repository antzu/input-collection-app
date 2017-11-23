import React, { Component }from 'react';
import RequestInputGroup from "./RequestInputGroup";


class RequestContainer extends Component {

    render() {

        const fieldGroups = [];

        this.props.fields.forEach(inputGroup => {
            fieldGroups.push(<RequestInputGroup name={inputGroup.group} fields={inputGroup.fields}/>)
        })

        return (
            <div className="">
                <h3>Request</h3>

                {fieldGroups}

            </div>
        );
    }
}

export default RequestContainer;