import React from 'react';
import { Link } from 'react-router-dom';

export default function UserProfile() {
  return (
    <div>
      <h1>name</h1>
      <p>Email</p>
      <p>Birthday</p>
      <p>Bio</p>
      <Link to="edit-profile">
        <button>Edit your profile</button>
      </Link>
    </div>
  );
}
