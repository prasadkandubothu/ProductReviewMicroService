package com.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import static java.util.Collections.emptyList;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.auth.domain.User;
import com.auth.repository.UserRepository;

public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
			
		User user=userRepo.findByUsername(username);
		return new User(user.getUsername(), user.getPassword(), emptyList());
	}

}
