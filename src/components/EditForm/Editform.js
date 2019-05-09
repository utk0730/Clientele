import React, { Component } from "react";

export default class Editform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contact: ""
    };
    this.SaveFormData=this.SaveFormData.bind(this)
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    fetch(`/api/clients`)
      .then(response => response.json())
      .then(data => {
        let newData = data.clients.filter(d => d._id === id);
        console.log(newData);
        this.setState({
          name: newData[0].name,
          email: newData[0].email,
          contact: newData[0].contact
        });
      })
      .catch(err => console.log(err));
  }

  SaveFormData(e){
    const { id } = this.props.match.params;
    e.preventDefault()
    const {name,email,contact}=this.state
    const postData = {
      name,
      email,
      contact
    }
    fetch(`/api/clients/${id}`, {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body:JSON.stringify(postData)
          }).then((res) => res.json())
          .then((data) => {
            
            console.log(data)
            this.props.history.push('/clients')
          } )
          .catch((err)=>console.log('errrrr',err))
  }

  render() {
    const { name, email, contact } = this.state;
    return (

        <div className="container">
        <form onSubmit={this.SaveFormData}>
          <div className="form-group">
            <label htmlFor="exampleInputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputname"
              placeholder="Enter name..."
              value={name}
              onChange={(e)=> this.setState({name:e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email..."
              value={email}
              onChange={(e)=> this.setState({email:e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputContact">Contact</label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputContact"
              placeholder="Enter Contact No..."
              value={contact}
              onChange={(e)=> this.setState({contact:e.target.value})}
            />
           
          </div>

          <button type="submit" className="btn btn-primary">
            Submit chnages
          </button>
        </form>
        
      </div>
    );
  }
}
