package com.policy.admin.user.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.policy.admin.user.dto.MemberDTO;
import com.policy.admin.user.dto.MemberPageDTO;


@Mapper
@Repository
public interface MemberDAO {

	//멤버정보 count하는 메소드
	public int count();
	//멤버상세정보가져오기
	public MemberDTO content(int userKeynum);
	//탈퇴처리
	public void delete(int userKeynum);
	//DB에서 회원정보 삭제처리
	public void realDelete(int userKeynum);
	//검색리스트 가져오기
	public List<MemberDTO> searchList(MemberPageDTO pv);
	//검색에서 멤버정보 count하는 메소드
	public int countForSearch(MemberPageDTO pv);
	//security용 메서드
	public MemberDTO selectByUserId(String userId);

}
