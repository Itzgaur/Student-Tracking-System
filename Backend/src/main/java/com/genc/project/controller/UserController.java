package com.genc.project.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.genc.project.entities.Users;
import com.genc.project.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:3000/")
public class UserController {
	
	@Autowired
	UserService service;
	
	@PostMapping
	public String validate(@RequestBody String email,String password) {
		
		
		
//		System.out.println(email);
//		System.out.println(password);
		
		Users user = service.findByMail("harshgaur838@gmail.com");
		System.out.println(user);
		
		return"working";
		
		
	}

}
