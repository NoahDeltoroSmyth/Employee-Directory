import React from 'react';

export default function CreateProfile() {
  return (
    <form>
      <legend>Tell us about yourself!</legend>
      <label>Name</label>
      <input id="name" name="name" type="text" />
      <label>Email</label>
      <input id="email" name="email" type="email" />
      <label>Birthday</label>
      <input id="birthday" name="birthday" type="date" />
      <label>Bio</label>
      <textarea id="bio" name="bio" type="text" />
      <button type="submit">Create Profile</button>
    </form>
  );
}
