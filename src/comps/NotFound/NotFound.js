import {Link} from 'react-router-dom';
import React from 'react';
import './NotFound.css';
const NotFound= () => {
    return (  
        <div className="not-found">
        <h2>Sorry</h2>
        <p>That page cannot be found</p>     
        <p><Link to="/">Back to the homepage...</Link></p>
      </div>
    );
}
 
export default NotFound;