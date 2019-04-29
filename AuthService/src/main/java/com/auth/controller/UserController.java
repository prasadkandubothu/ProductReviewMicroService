package com.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth.domain.User;
import com.auth.repository.UserRepository;


@RestController
@RequestMapping("/user")
public class UserController {

	
	@Autowired
	BCryptPasswordEncoder encoder;
	
	@Autowired
	UserRepository userRepo;
	
	@PostMapping("/register")
	public void saveUser(@RequestBody User user) {
		user.setPassword(encoder.encode(user.getPassword()));
		userRepo.save(user);
	}
}
