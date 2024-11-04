package com.employee.management.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.employee.management.entity.Employee;
import com.employee.management.repo.EmployeeRepo;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeService {
	private final EmployeeRepo repo;
	
	public Employee postEmployee(Employee emp) {
		return repo.save(emp);
	}
	
	public List<Employee> getAllEmployees(){
		return repo.findAll();
	}
	
	public void deleteEmployee(Long id) {
		if(!repo.existsById(id)) {
			throw new EntityNotFoundException("employee with id: "+id+" not found");
		}
	  repo.deleteById(id);
	}
}
