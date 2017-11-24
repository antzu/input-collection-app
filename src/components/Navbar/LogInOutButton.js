import React, { Component } from 'react';

class LogInOutButton extends Component {

    render(){
        return(
            <div>
                <button
                    onClick={this.props.onClick}>
                    {this.props.loggedIn ? "Log out" : "Log in"}
                </button>
            </div>
        )
    }
}

export default LogInOutButton;