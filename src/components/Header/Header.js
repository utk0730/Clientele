import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand" >
        Clientele
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" style={{justifyContent:'flex-end'}} id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link  to="/" className="nav-link" >
              <i className="fas fa-home mr-2"></i> About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/clients" className="nav-link" >
            <i className="fas fa-plus mr-2"></i>Our clients
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/addclient" className="nav-link" >
            <i className="fas fa-user mr-2"></i>Add clients
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/login" className="nav-link" >
            <i className="fas fa-user mr-2"></i>Admin Login
            </Link>
          </li>
          
          
        </ul>
      </div>
    </nav>
  );
}