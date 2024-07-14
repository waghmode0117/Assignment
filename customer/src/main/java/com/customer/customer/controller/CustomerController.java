package com.customer.customer.controller;

import com.customer.customer.entity.Customer;
import com.customer.customer.service.CustomerService;
import com.customer.customer.service.CustomerSyncService;

import com.customer.customer.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

    // private static final Logger logger = LoggerFactory.getLogger(CustomerController.class);
     private final CustomerSyncService customerSyncService;

    @Autowired
    private CustomerRepository customerRepository;
    public CustomerController(CustomerSyncService customerSyncService) {
        this.customerSyncService = customerSyncService;
    }
    

    @GetMapping
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @PostMapping
    public Customer createCustomer(@RequestBody Customer customerDetails) {
        return customerRepository.save(customerDetails);
    }

    @GetMapping("/{id}")
    public Customer getCustomerById(@PathVariable String id) {
        return customerRepository.findById(id).orElseThrow(() -> new RuntimeException("Customer not found"));
    }

    @PutMapping("/{id}")
    public Customer updateCustomer(@PathVariable String id, @RequestBody Customer customerDetails) {
        Customer customer = customerRepository.findById(id).orElseThrow(() -> new RuntimeException("Customer not found"));

        customer.setFirst_name(customerDetails.getFirst_name());
        customer.setLast_name(customerDetails.getLast_name());
        customer.setStreet(customerDetails.getStreet());
        customer.setAddress(customerDetails.getAddress());
        customer.setCity(customerDetails.getCity());
        customer.setState(customerDetails.getState());
        customer.setEmail(customerDetails.getEmail());
        customer.setPhone(customerDetails.getPhone());

        return customerRepository.save(customer);
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable String id) {
        Customer customer = customerRepository.findById(id).orElseThrow(() -> new RuntimeException("Customer not found"));
        customerRepository.delete(customer);
    }


    @GetMapping("/temp")
    public List<Customer> getCustomers() {
        return customerSyncService.getCustomers();
    }
}
