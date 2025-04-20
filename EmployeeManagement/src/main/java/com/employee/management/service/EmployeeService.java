package com.employee.management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.employee.management.entity.Employee;
import com.employee.management.entity.Role;
import com.employee.management.repo.EmployeeRepo;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeService {
	
	@Autowired
	private final EmployeeRepo repo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public Employee postEmployee(Employee emp) {
		emp.setPassword(passwordEncoder.encode(emp.getPassword()));
		Role defaultRole = new Role();
	    defaultRole.setRole("EMPLOYEE");
	    defaultRole.setEmail(emp.getEmail()); 
	    emp.setRoles(List.of(defaultRole));
		return repo.save(emp);
	}
	
	public List<Employee> getAllEmployees(){
		return repo.findAll();
	}
	
	@CacheEvict(value="emplpyees",key="#id")
	public void deleteEmployee(Long id) {
		if(!repo.existsById(id)) {
			throw new EntityNotFoundException("employee with id: "+id+" not found");
		}
	  repo.deleteById(id);
	}
	
	@Cacheable(value="employees", key="#id")
	public Employee getEmployeeById(Long id) {
		System.out.println("fetching from db");
		return repo.findById(id).orElse(null);
	}
	
	@CachePut(value="emplpyees", key="#emp.id")
	public Employee updateEmployee(Long id, Employee emp) {
		java.util.Optional<Employee> optEmp=repo.findById(id);
		if(optEmp.isPresent()) {
			Employee existEmp=optEmp.get();
			existEmp.setEmail(emp.getEmail());
			existEmp.setFirstName(emp.getFirstName());
			existEmp.setLastName(emp.getLastName());
			existEmp.setPhone(emp.getPhone());
			existEmp.setDepartment(emp.getDepartment());
			return repo.save(existEmp);
		}
		return null;
	}
}
