package com.auth.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DetailsController {
	
	
	@RequestMapping("/home")
	public String home() {
		return "home page";
	}
	
	@RequestMapping("/details")
	public String details() {
		return "details page";
	}
	

}
