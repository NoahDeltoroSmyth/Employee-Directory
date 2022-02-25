import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import { useUser } from '../../context/UserContext/UserContext';
import { signInUser, signUpUser } from '../../services/users';

export default function Auth({ signingUp = false }) {
  const { setUser } = useUser();
  const history = useHistory();

  const handleAuth = async (email, password) => {
    try {
      if (signingUp) {
        await signUpUser(email, password);
        history.replace('/create-profile');
      } else {
        const resp = await signInUser(email, password);
        setUser({ id: resp.id, email: resp.email });
        history.replace('/profile');
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <h1>{signingUp ? 'Welcome!' : 'Welcome Back!'}</h1>
      <Form onSubmit={handleAuth} label={signingUp ? 'Sign Up' : 'Sign In'} />
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
