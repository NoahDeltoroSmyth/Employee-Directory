import React from 'react';
import { Link } from 'react-router-dom';
//TODO: import user context when you get around to creating it

export default function LandingPage() {
  return (
    <>
      <h1>Welcome to the Acme Inc. Employee Directory!</h1>
      <p>
        As an employee of Acme Inc., you're required to create a profile on our
        intranet in order to gain access to... things.
      </p>
      <p>Create an account, then log in and fill out the requested details.</p>
      <p>Thank you for your participation.</p>
      {/*TODO: make a conditional link render based on whether someon is logged in or not*/}
      <Link to="/sign-up">Create an Account</Link>
      <Link to="/sign-in">Sign In</Link>
    </>
  );
}
