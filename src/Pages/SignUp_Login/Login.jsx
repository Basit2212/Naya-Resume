import React, { useState } from 'react';
import '../SignUp_Login/Login.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.password) {
      return alert('Wrong Password');
    }

    try {
      const res = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // Fix typo here
        body: JSON.stringify(form)
      });

      const data = await res.json();
      alert(data.message || data.error);
      if(res.ok && data.token){
        sessionStorage.setItem('token', data.token) // use getItem in Dashboard
        alert(data.message || "Login successful")
      }
      else{
        alert(data.error || "Login failed")
      }
    } catch (err) {
      console.error('Login Error:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Sign in</h2>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>


        <button type="submit" className="btn-login">Sign in</button>

        <p className="text-center mt-3">
          Don't have an account? <NavLink to="/signup">Register</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
