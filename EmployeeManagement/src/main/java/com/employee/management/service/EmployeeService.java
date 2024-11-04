package com.employee.management.service;

import java.util.List;

import org.apache.el.stream.Optional;
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
	
	public Employee getEmployeeById(Long id) {
		return repo.findById(id).orElse(null);
	}
	
	public Employee updateEmployee(Long id, Employee emp) {
		java.util.Optional<Employee> optEmp=repo.findById(id);
		if(optEmp.isPresent()) {
			Employee existEmp=optEmp.get();
			existEmp.setEmail(emp.getEmail());
			existEmp.setName(emp.getName());
			existEmp.setPhone(emp.getPhone());
			existEmp.setDepartment(emp.getDepartment());
			return repo.save(existEmp);
		}
		return null;
	}
}
