package com.example.youth.member.dto;

//로그인 성공 후 인증 상태 정보를 세션에 보관할 때 사용
public class AuthInfo {
	
	private String userId;
	private String userName;
	private String userPassword;
	
	public AuthInfo() {
		// TODO Auto-generated constructor stub
	}

	public AuthInfo(String userId, String userPassword) {
		super();
		this.userId = userId;
		this.userPassword = userPassword;
	}
	
	public AuthInfo(String userId, String userName, String userPassword) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userPassword = userPassword;
	}

	public String getMemberEmail() {
		return userId;
	}

	public String getMemberName() {
		return userName;
	}

	public String getMemberPass() {
		return userPassword;
	}
	
	
}
