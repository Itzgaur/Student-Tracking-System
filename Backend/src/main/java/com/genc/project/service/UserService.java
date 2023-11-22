package com.genc.project.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.genc.project.entities.Users;
import com.genc.project.repository.UserRepo;

@Service
public class UserService {
	
	@Autowired
	UserRepo repo;
	
	public Users findByMail(String email) {
		return repo.findByEmail(email);
	}
	
	public String validate(String email,String password) {
		
		Users user = repo.findByEmail(email);
		
		
		
		return "not working";
	}
	
	
	

}
