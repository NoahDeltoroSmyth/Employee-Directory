import React from 'react';

export default function Form({ label, handleAuth }) {
  return (
    <>
      <form onSubmit={handleAuth}>
        <legend>{label}</legend>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />
        <button type="submit">{label}</button>
      </form>
    </>
  );
}
