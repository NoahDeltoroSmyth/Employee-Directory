import React, { useState } from 'react';
import { useEffect } from 'react';
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
      await onSubmit(email, password);
    } catch (error) {
      setFormError(error.message);
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
          required
          value={formState.email}
          onChange={handleFormChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={formState.password}
          onChange={handleFormChange}
        />
        <button type="submit">{label}</button>
      </form>
    </>
  );
}
