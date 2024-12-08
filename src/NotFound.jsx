import React from 'react';
import { Link } from 'react-router-dom';  // Correct import for React Router v6

const NotFound = () => {
  return (
    <div>
      <h2>Sorry</h2>
      <p>The page you're looking for cannot be found</p>
      <Link to='/'>Back to the homepage...</Link>
    </div>
  );
};

export default NotFound;
