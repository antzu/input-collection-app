import React, { Component }from 'react';
import { Link } from 'react-router-dom';

class Navlink extends Component {

    render() {
        return (
            <div className="">
                <li><Link to={"/"+this.props.description}>{this.props.description}</Link></li>
            </div>
        );
    }
}

export default Navlink;