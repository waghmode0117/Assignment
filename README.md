# Customer Management Application

This is a simple customer management application built using Java Spring Boot for the backend and React for the frontend. The backend handles CRUD operations and authentication, while the frontend provides a user-friendly interface for managing customer data.

## Prerequisites

Ensure you have the following installed on your machine:

- Java version: `17.0.10` (LTS)
- Node version: `v20.15.1`
- npm version: `10.7.0`
- XAMPP Control Panel

## Getting Started

### Step 1: Start MySQL and Apache Service

1. Open XAMPP Control Panel.
2. Start the **MySQL** service.
3. Start the **Apache** service.

### Step 2: Create Database

1. Open your web browser and go to `http://localhost/phpmyadmin`.
2. Create a new database named `customerdb`.

### Step 3: Set Up Backend

1. Open a terminal and navigate to the `customer` directory.

2. Run the following command to clean and build the project:
   ```sh
   mvn clean install
3. Navigate to the target directory to run the project:
   ```sh
   cd target
   java -jar <jar file name>
### Step 3: Set Up Frontend
1. Open a new terminal and navigate to the my-app directory.

2. Install the necessary packages:
   ```sh
   npm install
3. Start the frontend application:
   ```sh
   npm start

## Project Structure

### Backend (Spring Boot)

#### Main Components

- **CustomerCrudApplication.java**: The main entry point for the Spring Boot application.
- **Customer.java**: Entity class representing a customer.
- **CustomerRepository.java**: Repository interface for database operations related to customers.
- **CustomerService.java**: Service layer handling business logic related to customers.
- **CustomerSyncService.java**: Service layer for synchronizing customer data (if applicable).
- **CustomerController.java**: REST controller exposing API endpoints for customer operations.

#### Security

- **JwtUtil.java**: Utility class for handling JSON Web Tokens (JWT) for authentication and authorization.

#### Resources

- **application.properties**: Configuration file for Spring Boot application settings.

#### Testing

- **CustomerCrudApplicationTests.java**: Unit and integration tests for the application.

### Frontend (React)

#### Pages

- **Login Page**: Allows users to log in using their email and phone number.
- **Create Customer Page**: Provides a form to create new customers and a search functionality to find customers using various parameters.
- **List of Customers**: Displays a list of customers with options to view, update, and delete customer records.
- **Sync List of Customers**: Displays a list of customers from remote api call.

### Accessing the Application
- **URL**: After starting both the backend and frontend applications, you can access the customer management system through your web browser. The default URL is:
   ```sh
   http://localhost:3000
