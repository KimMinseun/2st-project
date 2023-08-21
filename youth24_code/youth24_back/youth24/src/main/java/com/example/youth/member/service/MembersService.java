package com.example.youth.member.service;


import com.example.youth.member.dto.AuthInfo;
import com.example.youth.member.dto.MembersDTO;

public interface MembersService {
	public AuthInfo addMemberProcess(MembersDTO dto); //회원가입
	public int idCheckProcess(MembersDTO userId); //중복확인
	public String FindIdProcess(MembersDTO userId); //아이디찾기
	public String InfoCheckProcess(MembersDTO userId); //본인확인
	public void pwResetProcess(MembersDTO dto); //비밀번호 재설정
	public MembersDTO UpdateProcess(String userId); //회원정보 가져오기 
	public void infoUpdateProcess(MembersDTO dto); //회원정보 수정
	//public void infoUpdateProcess(String id, String phone, String address, String education, String empstatus);
	//public MembersDTO pwCheckProcess(String dto); //현재 비밀번호 확인 
	public void passwordUpdateProcess(MembersDTO dto); //비밀번호 수정 
	public void userDeleteProcess(MembersDTO dto); //회원탈퇴
	//public MembersDTO userInfo(String userPassword, String userId); //확인
	public boolean checkPassword(String userPassword, String encodedPassword);
	public String userInfo(MembersDTO dto);
	
	
}
