import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:8080/api/customers');
      const customers = response.data;
      const customer = customers.find(
        (customer) => customer.email === email && customer.phone === phone
      );
      if (customer) {
        setError('');
        navigate('/customers');  // Redirect to customers page on successful login
      } else {
        setError('Invalid email or phone number.');
      }
    } catch (error) {
      setError('An error occurred while fetching data.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/add-customer" className="add-customer-button">Add Customer</Link>
    </div>
  );
}

export default Login;
