package com.employee.management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.management.dto.LoginRequestDto;
import com.employee.management.repo.EmployeeRepo;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private EmployeeRepo empRepo;
	
	@GetMapping("/welcome")
	public ResponseEntity<?> welCome(){
		return new ResponseEntity<>("Welcome to Employee Manager System", HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> employeeLogin(@RequestBody LoginRequestDto loginRequest) {
		org.springframework.security.core.Authentication authentication=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),loginRequest.getPassword()));
		if (!authentication.isAuthenticated())
		  throw new UsernameNotFoundException("invalid email id or password");
		return new ResponseEntity<>(empRepo.findByEmail(loginRequest.getEmail()), HttpStatus.OK);
	}
	
}
