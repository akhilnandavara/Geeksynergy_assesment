import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(form));
    alert('Signup successful!');
    navigate("/login");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={form.name} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={form.password} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={form.email} required />
        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} value={form.phone} required />
        <select name="profession" onChange={handleChange} required>
          <option value="">Select Profession</option>
          <option value="Engineer">Engineer</option>
          <option value="Doctor">Doctor</option>
          <option value="Teacher">Teacher</option>
        </select>
        <button type="submit">Signup</button>
        <button type="button"><Link to="/login">Login</Link></button>
      </form>
    </div>
  );
};

export default Signup;
