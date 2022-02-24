import React from 'react';
import { Link } from 'react-router-dom';
//TODO: import usercontext once created
//TODO:: import signInUser and signUpUser functions

export default function Auth({ signingUp }) {
  return (
    <>
      <h1>{signingUp ? 'Welcome!' : 'Welcome Back!'}</h1>

      {signingUp ? (
        <p>
          Already have an account?
          <Link to="/sign-in">Sign In</Link>
        </p>
      ) : (
        <p>
          Dont have an account?
          <Link to="/sign-up">Sign Up</Link>
        </p>
      )}
    </>
  );
}
