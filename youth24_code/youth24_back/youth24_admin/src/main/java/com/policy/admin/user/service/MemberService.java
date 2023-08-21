package com.policy.admin.user.service;

import java.util.List;

import com.policy.admin.user.dto.MemberDTO;
import com.policy.admin.user.dto.MemberPageDTO;

public interface MemberService {

	//멤버정보 count하는 메소드
	public int countProcess();
	//멤버상세정보가져오기
	public MemberDTO contentProcess(int userKeynum);
	//탈퇴처리
	public void deleteProcess(int userKeynum);
	//DB에서 회원정보 삭제처리
	public void realDeleteProcess(int userKeynum);
	//검색리스트 가져오기
	public List<MemberDTO> searchListProcess(MemberPageDTO pv);
	//검색에서 멤버정보 count하는 메소드
	public int countForSearchProcess(MemberPageDTO pv);
	

}
