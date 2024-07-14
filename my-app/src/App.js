// src/App.js
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import CustomersTable from './CustomersTable';
import AddCustomer from './AddCustomer';
import Login from './Login';
import UpdateCustomer from './UpdateCustomer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/customers" element={<CustomersTable />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          {/* <Route path="/update/:uuid" element={<UpdateCustomer />} /> */}
          <Route path="/update-customer/:uuid" element={<UpdateCustomer />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
