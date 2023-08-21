package com.example.youth.member.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.youth.member.dto.MembersDTO;

@Mapper
@Repository
public interface MembersDAO {
	
	public int insertMember(MembersDTO dto); //회원가입 
	public MembersDTO userInfo(String userId); //로그인
	public int idCheck(MembersDTO userId); //중복확인 
	public String FindId(MembersDTO userId); //아이디찾기 
	public String InfoCheck(MembersDTO userId); //본인확인
	public void pwReset(MembersDTO dto); // 비밀번호 재설정
	public void infoUpdate(MembersDTO dto); //회원정보 수정
	//public MembersDTO pwCheck(String string); //현재 비밀번호 확인
	public void passwordUpdate(MembersDTO dto); //비밀번호 수정 
	public void userDelete(MembersDTO dto); //회원탈퇴 
	
	public MembersDTO userInfo(MembersDTO dto); //확인

}
