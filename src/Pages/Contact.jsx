import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

 const onSubmit = async (data) => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const res = await fetch(`${API_BASE_URL}/api/email`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  console.log('Form submitted:', data);
};


  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input {...register("name", { required: true })} />
          {errors.name && <span className="error">Name is required</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <span className="error">Email is required</span>}
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea {...register("message", { required: true })} rows={4} />
          {errors.message && <span className="error">Message is required</span>}
        </div>

        <button type="submit">Send Message</button>

        {isSubmitSuccessful && <p className="success">Thanks! We'll get back to you.</p>}
      </form>
    </div>
  );
};

export default Contact;
