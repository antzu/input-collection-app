import React, { Component } from 'react';
import Navlink from './Navlink';
import LogInOutButton from "./LogInOutButton";

class Navbar extends Component {

    render() {

        const linksDescriptions = ["z002", "z010", "z012"];
        const links = linksDescriptions.map(link => <Navlink description={link}/>);

        return (

            <div className="">
                {links}
                <LogInOutButton loggedIn={this.props.loggedIn} onClick={this.props.onLoginOutClick} />
            </div>
        );
    }
}

export default Navbar;
