import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/useForm/useForm';

export default function Form({ onSubmit, label }) {
  const [loading, setLoading] = useState(false);
  const { formState, formError, clearForm, handleFormChange, setFormError } =
    useForm({ email: '', password: '' });

  useEffect(() => {
    clearForm();
  }, [label]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;
    try {
      setFormError('');
      if (!email || password.length < 8)
        throw new Error('You must create a password 8 characters or longer');
      setLoading(true);
      await onSubmit(email, password);
      setLoading(true);
    } catch (error) {
      setFormError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <legend>{label}</legend>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          // required
          value={formState.email}
          onChange={handleFormChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          // required
          value={formState.password}
          onChange={handleFormChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? '...loading' : label}
        </button>
        {formError && <p>{formError}</p>}
      </form>
    </>
  );
}
