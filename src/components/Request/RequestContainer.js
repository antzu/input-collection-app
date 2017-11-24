import React, { Component }from 'react';
import RequestInputGroup from "./RequestInputGroup";

import { connect } from 'react-redux';
import * as actions from '../../actions';

class RequestContainer extends Component {

    componentWillMount(){
        this.props.fetchRequestFields();
    }

    render() {

        const fieldGroups = [];

        this.props.fields.forEach(inputGroup => {
            fieldGroups.push(<RequestInputGroup key={inputGroup.group} name={inputGroup.group} fields={inputGroup.fields}/>)
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

function mapStateToProps(state) {
    return { fields: state.requestFields }
}

export default connect(mapStateToProps, actions)(RequestContainer);