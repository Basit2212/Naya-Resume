import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'; 

import '../SignUp_Login/SignIn.css'
import Login from './Login';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return alert("Passwords do not match!");
    }

    try {
      const res = await fetch('http://localhost:4000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      alert(data.message || data.error);
    } catch (err) {
      console.error("Signup Error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="signup-container d-flex justify-content-center align-items-center">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Sign Up</h2>

        <div className="form-group">
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn-signup">Sign Up</button>

        <p className="text-center mt-3">
          Already have an account? <NavLink to='/login'>Login</NavLink>
        </p>
      </form>
    </div>
  );
}

export default Signup