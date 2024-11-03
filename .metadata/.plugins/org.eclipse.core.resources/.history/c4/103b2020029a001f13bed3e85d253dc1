package com.employee.management.service;

import org.springframework.stereotype.Service;

import com.employee.management.entity.Employee;
import com.employee.management.repo.EmployeeRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeService {
	private final EmployeeRepo repo;
	
	public Employee postEmployee(Employee emp) {
		return repo.save(emp);
	}
}
