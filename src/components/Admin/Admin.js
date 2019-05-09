import React, { Component } from 'react'
import {Link} from 'react-router-dom'


 

function TableRow({_id,name,email,contact,deleteClient,editClient}){
return (
  <tr>
  <td>{name}</td>
  <td>{email}</td>
  <td>{contact}</td>
  <td><Link className="btn btn-secondary btn-block" exact="true" to={`edit/${_id}`}>Edit</Link></td>
  <td><button className="btn btn-danger btn-block" onClick={deleteClient.bind(this,_id)}>Delete</button></td>
</tr>
)
}

export default class Admin extends Component {
  constructor(props){
    super(props)
      this.state= {
        clientsDetails : []
      }
      this.deleteClientHandler=this.deleteClientHandler.bind(this)
     
    
  }

  componentWillMount(){
    fetch('/api/clients')
      .then(response => response.json())
      .then(data => this.setState({clientsDetails:[...this.state.clientsDetails,...data.clients]}))
      .catch(err=>console.log(err))    
  }

  

  deleteClientHandler(id){
    console.log(id)
    fetch(`/api/clients/${id}`, {
      method: 'DELETE'
  }).then((res) => res.json())
  .then((data) => {
    console.log(data)
    this.setState({
      clientsDetails : this.state.clientsDetails.filter(client => client._id!==id)
    })
  } )
  .catch((err)=>console.log('errrrr',err))
  }

  render() {
    console.log('cdetails',this.state)
    return (
      <div className="container">
      <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Contact</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
       {
         this.state.clientsDetails.map(c => <TableRow key={c._id} {...c} deleteClient={this.deleteClientHandler}/>)
       }
      </tbody>
    </table>
   
      </div>
    )
  }
}
