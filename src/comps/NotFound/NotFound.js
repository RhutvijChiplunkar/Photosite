import { Link } from 'react-router-dom';
import React from 'react';
import './NotFound.css';
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Error : 404 page not found</h2>
      <h3>Sorry, the page you're looking for cannot be accessed !</h3>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
}

export default NotFound;