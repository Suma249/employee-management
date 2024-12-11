package com.employee.management.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Role {

	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id;
	    private String name;
}
