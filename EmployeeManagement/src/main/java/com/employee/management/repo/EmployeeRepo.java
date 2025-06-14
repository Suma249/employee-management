package com.employee.management.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.management.entity.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long>{
	public Optional<Employee> findByEmail(String email);
}
