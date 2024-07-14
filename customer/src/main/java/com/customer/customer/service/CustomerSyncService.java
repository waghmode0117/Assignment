package com.customer.customer.service;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.customer.customer.entity.Customer;

import java.net.URI;
import java.util.List;

@Service
public class CustomerSyncService {

    private final RestTemplate restTemplate = new RestTemplate();

    public List<Customer> getCustomers() {
        String url = "https://qa.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list";
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=");

        RequestEntity<Void> request = new RequestEntity<>(headers, HttpMethod.GET, URI.create(url));
        ResponseEntity<Customer[]> response = restTemplate.exchange(request, Customer[].class);

        return List.of(response.getBody());
    }
}
