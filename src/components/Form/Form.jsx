import React, { useState } from 'react';

export default function Form({ label, handleAuth }) {
  const [loading, setLoading] = useState(false);
  // const [formState, setFormState] = useState({});
  return (
    <>
      <form>
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
