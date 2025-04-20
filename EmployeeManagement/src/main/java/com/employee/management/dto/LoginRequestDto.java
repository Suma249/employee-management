package com.employee.management.dto;

import lombok.Data;

@Data
public class LoginRequestDto {

	private String password;
	private String email;
}
