package com.auth.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.auth.security.filters.JwtAutheticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled=true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{

	//@Autowired
	//private UserDetailsService service;
	
	@Autowired
	private BCryptPasswordEncoder encoder;
	
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication()
		.withUser("prasad")
		.password(encoder.encode("password"))
		.authorities("ROLE_USER");
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
	
		http.csrf().disable()
		.authorizeRequests()
		.antMatchers("/api/public").permitAll()
		//.antMatchers("/api/authenticate").permitAll()
		.anyRequest().authenticated()
		.and()
		.addFilter(new JwtAutheticationFilter())
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}

	
}
