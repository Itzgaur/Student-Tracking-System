package com.genc.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.genc.project.entities.Users;

public interface UserRepo extends JpaRepository<Users, Integer> {
	
	public Users findByEmail(String Email);

}
