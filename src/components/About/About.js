import React from "react";
import {Link} from 'react-router-dom';
export default function About() {
  return (
    <div className="jumbotron container mt-2">
      <h2 className="display-4">Clientele </h2>
      <p className="lead">
       One stop to manage your clients.
      </p>
      <hr className="my-4" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste.
      </p>
      <Link className="btn btn-primary btn-lg" to="/clients" role="button">
        See your clients
      </Link>
    </div>
  );
}
