package com.policy.admin.admin.dto;

public class AuthInfo {

	private String adminId;
	private String adminPassword;
	private String adminName;

	public AuthInfo() {
		// TODO Auto-generated constructor stub
	}

	public AuthInfo(String adminId, String adminPassword) {
		super();
		this.adminId = adminId;
		this.adminPassword = adminPassword;
	}

	public AuthInfo(String adminId, String adminPassword, String adminName) {
		super();
		this.adminId = adminId;
		this.adminPassword = adminPassword;
		this.adminName = adminName;
	}

	public String getAdminId() {
		return adminId;
	}

	public String getAdminPassword() {
		return adminPassword;
	}


	public String getAdminName() {
		return adminName;
	}



}
