import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., API call)
    console.log('Email:', email, 'Password:', password);
    // If login is successful, redirect to the home page
    // history.push('/');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link to='/'>  <button type="submit">Login</button>
          </Link>
          
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
