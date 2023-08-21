package com.policy.admin.admin.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.policy.admin.admin.dto.AdminDTO;
import com.policy.admin.admin.dto.MembersDTO;
import com.policy.admin.admin.dto.PageDTO;


@Mapper
@Repository
public interface AdminDAO {

	public int insertAdmin(AdminDTO dto); //회원가입
	public AdminDTO adminInfo(String adminId); //로그인
	public int idCheck(AdminDTO adminId); //중복확인
	//	public void updateAdmin(AdminDTO dto); 
	//	public void updateByPass(AdminDTO dto);
	//public int userCount(); // 사용자카운트  
	//public List<MembersDTO> userList(PageDTO pv); //사용자리스트 
	public int countForSearch(PageDTO pv); //사용자카운트
	public List<MembersDTO> searchList(PageDTO pv); //사용자리스트 
	public void userDelete(int userKeynum); //사용자탈퇴 
	public int countForSearchAdmin(PageDTO pv); //관리자카운트
	public List<AdminDTO> searchAdminList(PageDTO pv); //관리자리스트 
	public void adminDelete(int adminKeynum); //관리자탈퇴
	public MembersDTO content(int userKeynum);//특정사용자 조회
	public AdminDTO admincontent(int adminKeynum);//특정사용자 조회
	

}
