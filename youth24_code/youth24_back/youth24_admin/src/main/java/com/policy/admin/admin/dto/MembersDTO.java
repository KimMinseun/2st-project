package com.policy.admin.admin.dto;

import org.springframework.stereotype.Component;

import com.policy.admin.common.exception.WrongEmailPasswordException;

@Component
public class MembersDTO {	
	private int userKeyNum;			//사용자 고유번호
	private String userId;			//아이디 
	private String userPassword;	//비밀번호
	private String userName;		//이름
	private String userBirthdate;		//생년월일
	private String userGender;		//성별
	private String userAddress;		//주소
	private String userDistrict;	//지역구	
	private String userPhone;		//연락처
	private String userEducation;	//학력
	private String userEmpstatus;	//취업상태
	private int userStatus;			//현재상태 (탈퇴회원 표기용)
	private int userType;
	//private String userEtc; //비고 
	
	private String authRole;
	
	private String searchType;

	
	public MembersDTO() {
		// TODO Auto-generated constructor stub
	}
	
	public String getSearchType() {
		return searchType;
	}
	
	public void setSearchType(String searchType) {
		this.searchType = searchType;
	}
	
	
	public int getUserKeyNum() {
		return userKeyNum;
	}


	public void setUserKeyNum(int userKeyNum) {
		this.userKeyNum = userKeyNum;
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


	public String getUserBirthdate() {
		return userBirthdate;
	}


	public void setUserBirthdate(String userBirthdate) {
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
	
	
	public int getUserType() {
		return userType;
	}


	public void setUserType(int userType) {
		this.userType = userType;
	}


	public String getAuthRole() {
		return authRole;
	}

	public void setAuthRole(String authRole) {
		this.authRole = authRole;
	}

	public boolean matchPassword(String userPassword) {
		return this.userPassword.equals(userPassword);
	}
	
	public void changePassword(String oldPassword, String newPassword) {
		if(!userPassword.equals(oldPassword))
			throw new WrongEmailPasswordException();
		this.userPassword=newPassword;
	}
	
	
	
	
}//end class
