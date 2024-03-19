import React, { useState } from 'react';
import './styles.css'; // Make sure to create a corresponding CSS file

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = (event) => {
    event.preventDefault();

  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleRegistration}>
        <h2>Register</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-button">Register</button>
        <div className="registration-footer">
          <a href="/login">Already have an account? Log In</a>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
