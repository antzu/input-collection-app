import React, { Component } from 'react';
import './css/App.css';
import Navbar from "./components/Navbar/Navbar";
import RequestsContainer from "./components/RequestsContainer/RequestsContainer";
import RequestContainer from "./components/Request/RequestContainer";

class App extends Component {

  constructor(props){
      super(props);

      this.onLoginOutClick = this.onLoginOutClick.bind(this);
      this.state = {loggedIn: false};
  }

  onLoginOutClick() {
      this.setState({loggedIn: !this.state.loggedIn});
  }


  render() {

    const loggedIn = this.state.loggedIn;

    const REQUESTS = [
        {id: 1, name: "Request 1", status: "Production", completed: false},
        {id: 2, name: "Request 2", status: "Finance", completed: false},
        {id: 3, name: "Request 3", status: "Planning", completed: false},
        {id: 4, name: "Request 4", status: "Approved", completed: true}
    ];

    const REQUEST_FIELDS = [
        {id: 1, group: "requestor", fields: ["product_name", "brand"]},
        {id: 2, group: "production", fields: ["liquid", "alcohol_level"]}
    ]

    return (
      <div className="">
        <Navbar loggedIn={loggedIn} onLoginOutClick={this.onLoginOutClick}/>
        <RequestsContainer requests={REQUESTS} />
        <RequestContainer fields={REQUEST_FIELDS}/>
      </div>
    );
  }
}

export default App;
