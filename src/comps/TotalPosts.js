import React from 'react';
import useFirestore from '../hooks/useFirestore';

const TotalPosts = () => {
    const {docs}=useFirestore('images');
    var x=docs.length;
    return (  
        <div className="total-posts">
            <h3>Total Posts</h3>
            <h2>{x}</h2>
        </div>
    );
}
 
export default TotalPosts;