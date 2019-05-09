import React from "react";
import "./Client.css";

export default function Client({name,email,contact}) {  
  return (
    <div className="card" style={{ width: "18rem" }}>
      
      <div className="card-body">
        <h5 className="card-title"> {name}</h5>
        <p className="card-text">
          Email : {email}
        </p>
        <p className="card-text">
          Contact : {contact}
        </p>
        <a href="_" className="btn btn-primary">
         See projects
        </a>
      </div>
    </div>
  );
}
