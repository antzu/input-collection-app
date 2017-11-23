import React, { Component }from 'react';

class Navlink extends Component {

    render() {
        return (
            <div className="">
                <h3>{this.props.description}</h3>
            </div>
        );
    }
}

export default Navlink;