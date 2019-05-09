import React, { useState,useEffect } from "react";
import "./Addclient.css";
export default function Contact(props){
console.log(props)
  const [name,setName]= useState('')
  const [email,setEmail]= useState('')
  const [contact,setContact]= useState('')

  useEffect(() => {
    console.log('rendering')
  });
  function SaveFormData(e){
      e.preventDefault()
      const postData = {
        name,
        email,
        contact
      }
      fetch('/api/clients', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify(postData)
            }).then((res) => res.json())
            .then((data) => {
              setName('')
              setEmail('')
              setContact('')
              console.log(data)
              props.history.push('/clients')
            } )
            .catch((err)=>console.log('errrrr',err))
    }

    return (
      <div className="container">
        <form onSubmit={SaveFormData}>
          <div className="form-group">
            <label htmlFor="exampleInputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputname"
              placeholder="Enter name..."
              value={name}
              onChange={(e)=> setName(e.target.value)}
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
              onChange={(e)=> setEmail(e.target.value)}
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
              onChange={(e)=> setContact(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        
      </div>
    );
  
}
