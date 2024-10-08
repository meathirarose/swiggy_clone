import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!</h1>
      <h2>Something went wrong.</h2>
      <h3>{err.status} : {err.statusText}</h3>
      <p>The page you're looking for does not exist.</p>
    </div>
  );
};

export default Error;
