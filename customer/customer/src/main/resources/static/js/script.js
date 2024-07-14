function login() {
    var loginId = document.getElementById("login_id").value;
    var password = document.getElementById("password").value;

    // Call login API
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login_id: loginId,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem("token", data.token);
            alert("Login successful");
        } else {
            alert("Login failed");
        }
    })
    .catch(error => console.error("Error:", error));
}

function syncCustomers() {
    // Call sync API
    fetch("/api/customers/sync", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
    .then(response => {
        if (response.ok) {
            alert("Customers synchronized");
            loadCustomers();
        } else {
            alert("Failed to synchronize customers");
        }
    })
    .catch(error => console.error("Error:", error));
}

function loadCustomers() {
    // Load customers from API
    fetch("/api/customers", {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
    .then(response => response.json())
    .then(data => {
        var customerList = document.getElementById("customerList");
        customerList.innerHTML = "";
        data.content.forEach(customer => {
            var row = customerList.insertRow();
            row.insertCell(0).innerHTML = customer.id;
            row.insertCell(1).innerHTML = customer.firstName;
            row.insertCell(2).innerHTML = customer.lastName;
            row.insertCell(3).innerHTML = customer.street;
            row.insertCell(4).innerHTML = customer.address;
            row.insertCell(5).innerHTML = customer.city;
            row.insertCell(6).innerHTML = customer.state;
            row.insertCell(7).innerHTML = customer.email;
            row.insertCell(8).innerHTML = customer.phone;
        });
    })
    .catch(error => console.error("Error:", error));
}

function addCustomer() {
    var customer = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        street: document.getElementById("street").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    // Call add customer API
    fetch("/api/customers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify(customer)
    })
    .then(response => {
        if (response.ok) {
            alert("Customer added successfully");
        } else {
            alert("Failed to add customer");
        }
    })
    .catch(error => console.error("Error:", error));
}
