package com.policy.admin.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.policy.admin.user.dao.MemberDAO;
import com.policy.admin.user.dto.MemberDTO;
import com.policy.admin.user.dto.MemberPageDTO;

@Service
public class MemberServiceImp implements MemberService {
	

	@Autowired
	private MemberDAO memberDao;

	

	//멤버정보 count하는 메소드
	@Override
	public int countProcess() {
		// TODO Auto-generated method stub
		return memberDao.count();
	}
	
	//멤버상세정보가져오기
	@Override
	public MemberDTO contentProcess(int userKeynum) {
//		policyDao.readCount(policyKeynum);
		return memberDao.content(userKeynum);
	}
	//탈퇴처리
	@Override
	public void deleteProcess(int userKeynum) {
		memberDao.delete(userKeynum);
	}
	
	//DB에서 회원정보 삭제처리
	@Override
	public void realDeleteProcess(int userKeynum) {
		memberDao.realDelete(userKeynum);
	}
	//검색리스트 가져오기
	@Override
	public List<MemberDTO> searchListProcess(MemberPageDTO pv) {
		// TODO Auto-generated method stub
		return memberDao.searchList(pv);
	}
	//검색에서 멤버정보 count하는 메소드
	@Override
	public int countForSearchProcess(MemberPageDTO pv) {
		// TODO Auto-generated method stub
		return memberDao.countForSearch(pv);
	}

}