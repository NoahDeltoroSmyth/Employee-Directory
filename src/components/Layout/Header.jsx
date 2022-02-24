import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Link to="/">
        <h1>Acme Employee Directory</h1>
      </Link>

      <p>Not Signed In</p>
      <Link to="/sign-in">
        <button>Sign In</button>
      </Link>

      <p>Signed in as</p>
      <button>Sign Out</button>
    </>
  );
}
