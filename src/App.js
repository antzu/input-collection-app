import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './css/App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import { REQUESTS } from "./requestsAPI";
import RequestsContainer from "./components/RequestsContainer/RequestsContainer";

class App extends Component {

  constructor(props){
      super(props);

      this.onLoginOutClick = this.onLoginOutClick.bind(this);
      this.state = {
          loggedIn: false,
          requests: REQUESTS
      };
  }

  onLoginOutClick() {
      this.setState({loggedIn: !this.state.loggedIn});
  }


  render() {

    const loggedIn = this.state.loggedIn;
    const requests = this.state.requests;

    return (
      <div className="">
        <Navbar loggedIn={loggedIn} onLoginOutClick={this.onLoginOutClick}/>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/Home' component={Home}/>
              <Route path='/Z002' render={props => <RequestsContainer {...props} requests={requests}/>} />
              <Route path='/Z010' render={props => <RequestsContainer {...props} requests={requests}/>} />
              <Route path='/Z012' render={props => <RequestsContainer {...props} requests={requests}/>} />

          </Switch>
      </div>
    );
  }
}

export default App;
