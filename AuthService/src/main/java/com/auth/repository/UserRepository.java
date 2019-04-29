package com.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auth.domain.User;


public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUsername(String username);
}
