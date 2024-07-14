// scripts.js

// Function to handle form submission for login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    // Example: send login request to backend API
    console.log(`Login submitted with email: ${email} and phone: ${phone}`);
    // Replace with actual API call using fetch or XMLHttpRequest
});

// Function to handle form submission for creating a customer
document.getElementById('createCustomerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        street: document.getElementById('street').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };
    // Example: send create customer request to backend API
    console.log('Create customer form submitted with data:', formData);
    // Replace with actual API call using fetch or XMLHttpRequest
});

// Function to fetch and display list of customers
window.onload = function() {
    fetch('http://localhost:8080/api/customers')
        .then(response => response.json())
        .then(data => {
            let customerListBody = document.getElementById('customerListBody');
            data.forEach(customer => {
                let row = document.createElement('tr');
                row.innerHTML = `
                    <td>${customer.firstName}</td>
                    <td>${customer.lastName}</td>
                    <td>${customer.street}</td>
                    <td>${customer.address}</td>
                    <td>${customer.city}</td>
                    <td>${customer.state}</td>
                    <td>${customer.email}</td>
                    <td>${customer.phone}</td>
                    <td>
                        <button onclick="editCustomer('${customer.uuid}')">Edit</button>
                        <button onclick="deleteCustomer('${customer.uuid}')">Delete</button>
                    </td>
                `;
                customerListBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching customers:', error));
};

// Function to handle edit customer action
function editCustomer(uuid) {
    // Redirect or show edit form for customer with given uuid
    console.log('Edit customer:', uuid);
}

// Function to handle delete customer action
function deleteCustomer(uuid) {
    // Example: send delete request to backend API
    console.log('Delete customer:', uuid);
    // Replace with actual API call using fetch or XMLHttpRequest
}
