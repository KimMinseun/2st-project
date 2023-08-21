package com.policy.admin.user.dto;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

@Component
public class MemberDTO {
	private int userKeynum; //회원 고유 번호 (PK)
	private String userId; //아이디 (NN)
	private String userPassword; //비밀번호 (NN)
	private String userName; //이름 (NN)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date userBirthdate; //생년월일 (NN)
	private String userGender; // 성별 (NN)
	private String userAddress; //주소 (NN)
	private String userDistrict; //지역구 (NN)
	private String userPhone; //연락처 (NN)
	private String userEducation; //학력 (NN)
	private String userEmpstatus; //취업상태 (NN)
	private int userStatus; //회원상태 (탈퇴회원 표기용) (NN)
	private String userEtc; //비고
	private String authRole; //security
	
	public String getAuthRole() {
		return authRole;
	}

	public void setAuthRole(String authRole) {
		this.authRole = authRole;
	}

	public MemberDTO() {
		// TODO Auto-generated constructor stub
	}

	public int getUserKeynum() {
		return userKeynum;
	}

	public void setUserKeynum(int userKeynum) {
		this.userKeynum = userKeynum;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Date getUserBirthdate() {
		return userBirthdate;
	}

	public void setUserBirthdate(Date userBirthdate) {
		this.userBirthdate = userBirthdate;
	}

	public String getUserGender() {
		return userGender;
	}

	public void setUserGender(String userGender) {
		this.userGender = userGender;
	}

	public String getUserAddress() {
		return userAddress;
	}

	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}

	public String getUserDistrict() {
		return userDistrict;
	}

	public void setUserDistrict(String userDistrict) {
		this.userDistrict = userDistrict;
	}

	public String getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}

	public String getUserEducation() {
		return userEducation;
	}

	public void setUserEducation(String userEducation) {
		this.userEducation = userEducation;
	}

	public String getUserEmpstatus() {
		return userEmpstatus;
	}

	public void setUserEmpstatus(String userEmpstatus) {
		this.userEmpstatus = userEmpstatus;
	}

	public int getUserStatus() {
		return userStatus;
	}

	public void setUserStatus(int userStatus) {
		this.userStatus = userStatus;
	}

	public String getUserEtc() {
		return userEtc;
	}

	public void setUserEtc(String userEtc) {
		this.userEtc = userEtc;
	}
	
	
}
