package com.example.youth.member.dto;

public class ChangePw {
	private String currentPassword;
	private String newPassword;
	
	public ChangePw() {
		// TODO Auto-generated constructor stub
	}

	public String getCurrentPassword() {
		return currentPassword;
	}

	public void setCurrentPassword(String currentPassword) {
		this.currentPassword = currentPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

}
