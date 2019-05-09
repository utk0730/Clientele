import React, { Component } from "react";
import "./Clients.css";
import Client from '../Client/Client'

export default class Clients extends Component {
constructor(props){
  super(props)
  this.state ={
    employees : []
  }
}
componentWillMount(){
  
  fetch('/api/clients')
      .then(response => response.json())
      .then(data => this.setState({employees:[...this.state.employees,...data.clients]}))
      .catch(err=>console.log(err))    
}

  render() {
    const {employees} = this.state
    
    return (
      <React.Fragment>
        <div className="container card-container">
        {employees.map(emp=> <Client key={emp._id} {...emp}/>)}
        </div>
      </React.Fragment>
    );
  }
}
