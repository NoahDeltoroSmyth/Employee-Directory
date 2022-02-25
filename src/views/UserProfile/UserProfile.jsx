import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext/profileContext';
import { useUser } from '../../context/UserContext/UserContext';
import { getProfile } from '../../services/profiles';

export default function UserProfile() {
  // const { user, setUser } = useUser();
  const [user, setUser] = useState([]);
  // const [loading, setLoading] = useState(true);
  const { name, email, birthday, bio } = useProfile();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getProfile();
  //     setUser(data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  // if (loading) return <h1>loading</h1>;

  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{birthday}</p>
      <p>{bio}</p>
      <Link to="edit-profile">
        <button>Edit your profile</button>
      </Link>
    </div>
  );
}
