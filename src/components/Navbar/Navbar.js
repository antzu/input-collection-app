import React, { Component } from 'react';
import Navlink from './Navlink';
import LogInOutButton from "./LogInOutButton";

class Navbar extends Component {

    render() {

        const linksDescriptions = ["Home", "Z002", "Z010", "Z012"];
        const links = linksDescriptions.map(link => <Navlink key={link} description={link}/>);

        return (

            <div className="">
                {links}
                <LogInOutButton loggedIn={this.props.loggedIn} onClick={this.props.onLoginOutClick} />
            </div>
        );
    }
}

export default Navbar;
