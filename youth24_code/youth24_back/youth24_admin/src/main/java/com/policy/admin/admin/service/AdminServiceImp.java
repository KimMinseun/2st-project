package com.policy.admin.admin.service;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.policy.admin.admin.dao.AdminDAO;
import com.policy.admin.admin.dto.AdminDTO;
import com.policy.admin.admin.dto.AuthInfo;
import com.policy.admin.admin.dto.MembersDTO;
import com.policy.admin.admin.dto.PageDTO;



@Service
public class AdminServiceImp implements AdminService{

	@Autowired
	private AdminDAO adminDao;

	public AdminServiceImp() {

	}

	@Override
	public AuthInfo addAdminProcess(AdminDTO dto) {
		System.out.println("ServiceImp 시도");
		adminDao.insertAdmin(dto);
		System.out.println("AdminServiceImp OK");
		return new AuthInfo(dto.getAdminId(), dto.getAdminPassword(), dto.getAdminName());
	}

	@Override
	public int idCheckProcess(AdminDTO adminId) {
		return adminDao.idCheck(adminId);
	}

	//	@Override
	//	public AdminDTO updateAdminProcess(String adminId) {
	//		return adminDao.adminInfo(adminId);
	//	}
	//
	//	@Override
	//	public AuthInfo updateAdminProcess(AdminDTO dto) {
	//		// TODO Auto-generated method stub
	//		return null;
	//	}

	@Override
	public void adminDeleteProcess(int adminKeynum) {
		adminDao.adminDelete(adminKeynum);
	}

//	@Override
//	public int userCountProcess() {
//		return adminDao.userCount();
//
//	}
//
//	@Override
//	public List<MembersDTO> userListProcess(PageDTO pv) {
//		return adminDao.userList(pv);
//	}

	@Override
	public void userDeleteProcess(int userKeynum) {
		adminDao.userDelete(userKeynum);
	} 

	@Override
	public List<MembersDTO> searchListProcess(PageDTO pv) {
		return adminDao.searchList(pv);
	}
	
	@Override
	public int countForSearchProcess(PageDTO pv) {
		return adminDao.countForSearch(pv);
	}
	
	@Override
	public List<AdminDTO> searchAdminListProcess(PageDTO pv) {
		return adminDao.searchAdminList(pv);
	}
	
	@Override
	public int countForSearchAdminProcess(PageDTO pv) {
		return adminDao.countForSearchAdmin(pv);
	}

	@Override
	public MembersDTO contentProcess(int userKeynum) {
		// TODO Auto-generated method stub
		return adminDao.content(userKeynum);
	}

	@Override
	public AdminDTO admincontentProcess(int adminKeynum) {
		// TODO Auto-generated method stub
		return adminDao.admincontent(adminKeynum);
	}


}
