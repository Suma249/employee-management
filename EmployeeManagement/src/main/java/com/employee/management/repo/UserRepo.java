package com.employee.management.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.management.entity.User;

public interface UserRepo extends JpaRepository<User, Long>{

	Optional<User> findByUsername(String username);
}
