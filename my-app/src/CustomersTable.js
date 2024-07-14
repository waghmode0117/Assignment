import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CustomersTable.css';

const CustomersTable = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    fetch('http://localhost:8080/api/customers')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error('Error fetching customer data:', error));
  };

  const handleSync = () => {
    fetch('http://localhost:8080/api/customers/temp')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error('Error fetching customer data:', error));
  };

  const handleDelete = (uuid) => {
    fetch(`http://localhost:8080/api/customers/${uuid}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setCustomers(customers.filter(customer => customer.uuid !== uuid));
        } else {
          console.error('Error deleting customer');
        }
      })
      .catch(error => console.error('Error deleting customer:', error));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="customers-table-container">
      <div className="header">
        <Link to="/add-customer" className="add-customer-button">Add Customer</Link>
        <Link to="/customers" className="add-customer-button">Customers List</Link>
        <button onClick={handleSync} className="add-customer-button">Sync</button>
        <div className="search-container">
          <select className="search-select">
            <option value="first_name">First Name</option>
            <option value="city">City</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <button className="search-button">🔎</button>
        </div>
      </div>
      <h2>Customer List</h2>
      <table className="customers-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Street</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map(customer => (
            <tr key={customer.uuid} className="customer-row">
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.street}</td>
              <td>{customer.address}</td>
              <td>{customer.city}</td>
              <td>{customer.state}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td className="action-buttons">
                <button
                  onClick={() => handleDelete(customer.uuid)}
                  className="delete-button"
                >
                  🗑️
                </button>
                <Link to={`/update-customer/${customer.uuid}`} className="edit-button">📝</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
