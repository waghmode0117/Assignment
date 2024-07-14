package com.customer.customer.service;

import com.customer.customer.entity.Customer;
import com.customer.customer.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

@Service
public class CustomerSyncService {

    @Autowired
    private CustomerRepository customerRepository;

    public void syncCustomers() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://qa.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list";
        
        Customer[] customers = restTemplate.getForObject(url, Customer[].class);
        if (customers != null) {
            Arrays.stream(customers).forEach(customer -> {
                Customer existingCustomer = customerRepository.findById(customer.getId()).orElse(null);
                if (existingCustomer != null) {
                    existingCustomer.setFirstName(customer.getFirstName());
                    existingCustomer.setLastName(customer.getLastName());
                    existingCustomer.setStreet(customer.getStreet());
                    existingCustomer.setAddress(customer.getAddress());
                    existingCustomer.setCity(customer.getCity());
                    existingCustomer.setState(customer.getState());
                    existingCustomer.setEmail(customer.getEmail());
                    existingCustomer.setPhone(customer.getPhone());
                    customerRepository.save(existingCustomer);
                } else {
                    customerRepository.save(customer);
                }
            });
        }
    }
}
