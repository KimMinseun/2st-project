package com.example.youth.member.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.youth.member.dao.MembersDAO;
import com.example.youth.member.dto.AuthInfo;
import com.example.youth.member.dto.MembersDTO;

@Service
public class MembersServiceImp implements MembersService {

	@Autowired
	private MembersDAO membersDao;

	@Autowired
	private BCryptPasswordEncoder encodePassword;

	public MembersServiceImp() {

	}

	@Override
	public AuthInfo addMemberProcess(MembersDTO dto) {
		membersDao.insertMember(dto);
		return new AuthInfo(dto.getUserId(), dto.getUserName(), dto.getUserPassword());
	}

	@Override
	public int idCheckProcess(MembersDTO userId) {
		return membersDao.idCheck(userId);
	}

	@Override
	public String FindIdProcess(MembersDTO userId) {
		return membersDao.FindId(userId);	
	}

	@Override
	public String InfoCheckProcess(MembersDTO userId) {
		return membersDao.InfoCheck(userId);
	}


	@Override
	public void pwResetProcess(MembersDTO dto) {
		membersDao.pwReset(dto);
	}

	@Override
	public void infoUpdateProcess(MembersDTO dto) {
		membersDao.infoUpdate(dto);
	}
	
//	@Override
//	public void infoUpdateProcess(String id, String phone, String address, String education, String empstatus) {
//        MembersDTO dto = new MembersDTO();
//        dto.setUserId(id);
//        dto.setUserPhone(phone);
//        dto.setUserAddress(address);
//        dto.setUserEducation(education);
//        dto.setUserEmpstatus(empstatus);
//        membersDao.infoUpdate(dto);
//    }

//	@Override
//	public MembersDTO pwCheckProcess(String dto) {
//		return membersDao.pwCheck(dto);
//	}

	@Override
	public MembersDTO UpdateProcess(String userId) {
		membersDao.userInfo(userId);
		return null;
	}


	@Override
	public void passwordUpdateProcess(MembersDTO dto) {
		membersDao.passwordUpdate(dto);
	}

	@Override
	public void userDeleteProcess(MembersDTO dto) {
		membersDao.userDelete(dto);
	}


	@Override
	public boolean checkPassword(String userPassword, String encodedPassword) {
		return encodePassword.matches(userPassword, encodedPassword);
	}

	@Override
	public String userInfo(MembersDTO dto) {
		//		membersDao.userInfo(dto.getUserId());
		//		return null;
		String userInfo = membersDao.userInfo(dto.getUserId()).getUserPassword().toString();
		System.out.println("userInfo : " + userInfo);
		return userInfo;

	}










}//end class

