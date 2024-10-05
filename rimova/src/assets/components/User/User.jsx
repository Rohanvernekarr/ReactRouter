import { useParams } from 'react-router-dom';
import React from 'react'




function User() {
    const { userid } = useParams(); // Get the dynamic 'userid' from the URL
  
    return <h1>User ID: {userid}</h1>;
  }
  
  export default User;

