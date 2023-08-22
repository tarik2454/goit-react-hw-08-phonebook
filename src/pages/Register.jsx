import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../redux/Auth/operations';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const credentials = { name, email, password };
    dispatch(registerThunk(credentials));
  };

  return (
    <section>
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter your name...."
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <input
            placeholder="Enter your email...."
            type="text"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <input
            placeholder="Enter your pass...."
            type="text"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </section>
  );
};
