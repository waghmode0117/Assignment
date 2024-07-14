package com.customer.customer.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

@Controller
public class ProxyController {
    @GetMapping("/api/sync-customers")
    public ResponseEntity<String> syncCustomers() {
        String url = "https://qa.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_lit";
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=");

        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        return ResponseEntity.ok().body(response.getBody());
    }
}
