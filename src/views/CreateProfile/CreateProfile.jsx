import React, { useState } from 'react';
import { useUser } from '../../context/UserContext/UserContext';
import { createProfile } from '../../services/profiles';

export default function CreateProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [bio, setBio] = useState('');

  const { user } = useUser();

  const handleCreate = async (e) => {
    e.preventDefault();
    await createProfile(name, email, bio, birthday);
  };

  return (
    <form onSubmit={handleCreate}>
      <legend>Tell us about yourself!</legend>
      <label>Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Birthday</label>
      <input
        id="birthday"
        name="birthday"
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <label>Bio</label>
      <textarea
        id="bio"
        name="bio"
        type="text"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <button type="submit">Create Profile</button>
    </form>
  );
}
