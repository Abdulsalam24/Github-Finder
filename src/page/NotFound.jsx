import React from "react";

import { Link } from "react-router-dom";

import {FaHome} from 'react-icons/fa'

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 !</h1>
      <h3>This page can’t be reached</h3>
      <Link to="/">
        <button> <FaHome/>Go Back Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
