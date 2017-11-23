import React, { Component }from 'react';
import RequestInputGroup from "./RequestInputGroup";
import { Link } from "react-router-dom";


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
                <br />
                <button onClick={this.props.history.goBack}>back</button>


            </div>
        );
    }
}

export default RequestContainer;