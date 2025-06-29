package com.employee.management.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Role {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id;
	    private String email;
	    private String role;
}
