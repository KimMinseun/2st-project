package com.policy.admin.admin.service;

import java.util.List;

import com.policy.admin.admin.dto.AdminDTO;
import com.policy.admin.admin.dto.AuthInfo;
import com.policy.admin.admin.dto.MembersDTO;
import com.policy.admin.admin.dto.PageDTO;

public interface AdminService {
	public AuthInfo addAdminProcess(AdminDTO dto); //회원가입
	public int idCheckProcess(AdminDTO adminId); //중복확인
	//public AdminDTO updateAdminProcess(String adminId);
	//public AuthInfo updateAdminProcess(AdminDTO dto);
	//public int userCountProcess(); //사용자카운트
	//public List<MembersDTO> userListProcess(PageDTO pv); //사용자리스트
	public int countForSearchProcess(PageDTO pv); //사용자카운트 
	public List<MembersDTO> searchListProcess(PageDTO pv); //사용자리스트 
	public void userDeleteProcess(int userKeynum); //사용자탈퇴	
	public int countForSearchAdminProcess(PageDTO pv); //관리자카운트 
	public List<AdminDTO> searchAdminListProcess(PageDTO pv); //관리자리스트 
	public void adminDeleteProcess(int adminKeynum); //관리자탈퇴
	public MembersDTO contentProcess(int userKeynum);//특정사용자 조회
	public AdminDTO admincontentProcess(int adminKeynum);//특정사용자 조회


}
