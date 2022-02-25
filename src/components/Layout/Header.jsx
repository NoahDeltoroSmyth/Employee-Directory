import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext/UserContext';
import styles from './Header.css';

export default function Header() {
  const { user } = useUser();
  return (
    <div className={styles.header}>
      <Link to="/">
        <h1>Acme Employee Directory</h1>
      </Link>

      {user ? (
        <>
          <p>Signed in as {user.email}</p>
          <button>Sign Out</button>
        </>
      ) : (
        <>
          <p>Not Signed In</p>
          <Link to="/sign-in">
            <button>Sign In</button>
          </Link>
        </>
      )}
    </div>
  );
}
