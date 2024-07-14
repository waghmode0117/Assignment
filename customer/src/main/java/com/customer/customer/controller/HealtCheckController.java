package com.customer.customer.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
public class HealtCheckController {
    

    @GetMapping("/helthcheck")
    public void HealtCheck (){
        System.out.println("Heath check clear");
    }
}
