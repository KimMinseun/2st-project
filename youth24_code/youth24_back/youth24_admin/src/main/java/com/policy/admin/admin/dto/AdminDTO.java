package com.policy.admin.admin.dto;

import org.springframework.stereotype.Component;

import com.policy.admin.common.exception.WrongEmailPasswordException;

@Component
public class AdminDTO {
	private int adminKeynum;
	private String adminId;
	private String adminPassword;
	private String adminName;
	private int adminStatus;
	
	private String authRole;
	
	public AdminDTO() {

	}

	public String getAuthRole() {
		return authRole;
	}



	public void setAuthRole(String authRole) {
		this.authRole = authRole;
	}



	public int getAdminKeynum() {
		return adminKeynum;
	}

	public void setAdminKeynum(int adminKeynum) {
		this.adminKeynum = adminKeynum;
	}

	public String getAdminId() {
		return adminId;
	}

	public void setAdminId(String adminId) {
		this.adminId = adminId;
	}

	public String getAdminPassword() {
		return adminPassword;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public int getAdminStatus() {
		return adminStatus;
	}

	public void setAdminStatus(int adminStatus) {
		this.adminStatus = adminStatus;
	}
	
	public boolean matchPassword(String adminPassword) {
		return this.adminPassword.equals(adminPassword);
	}

	public void changePassword(String oldPassword, String newPassword) {
		if(!adminPassword.equals(oldPassword))
			throw new WrongEmailPasswordException();
		this.adminPassword=newPassword;
	}

	
}//end class
