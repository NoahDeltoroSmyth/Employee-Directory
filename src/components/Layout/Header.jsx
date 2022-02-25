import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext/UserContext';
import { signOutUser } from '../../services/users';
import styles from './Header.css';

export default function Header() {
  const { user, setUser } = useUser();
  console.log('user', user);
  const history = useHistory();

  return (
    <div className={styles.header}>
      <Link to="/">
        <h1>Acme Employee Directory</h1>
      </Link>

      {user.email ? (
        <>
          <p>Signed in as {user.email}</p>
          <button
            onClick={async () => {
              await signOutUser();
              setUser({});
              history.push('/');
            }}
          >
            Sign Out
          </button>
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
