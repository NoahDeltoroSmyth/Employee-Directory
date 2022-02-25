import React, { useState } from 'react';
import { useProfile } from '../../context/ProfileContext/profileContext';
// import { useUser } from '../../context/UserContext/UserContext';
// import useForm from '../../hooks/useForm/useForm';
import { createProfile } from '../../services/profiles';

export default function CreateProfile() {
  // const { user } = useUser();
  const { bio, setBio, email, setEmail, name, setName, birthday, setBirthday } =
    useProfile();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const handleCreate = async (name, email, bio, birthday) => {
    await createProfile({ name, email, bio, birthday });
  };

  return (
    <form {...handleCreate}>
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
