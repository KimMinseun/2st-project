package com.example.youth.member.controller;

import java.io.IOException;
import java.net.URLEncoder;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.youth.member.dto.AuthInfo;
import com.example.youth.member.dto.MembersDTO;
import com.example.youth.member.service.MembersService;

//@CrossOrigin({"http://localhost:3000"})
@CrossOrigin("*")
@RestController
public class MembersController {

	@Autowired
	private MembersService membersService;

	// 비밀번호 암호화 처리
	@Autowired
	private BCryptPasswordEncoder encodePassword;
	

	public MembersController() {

	}

	//회원가입 처리
	//@RequestBody : 첨부파일 있으면 안 붙임
	@PostMapping("/signup")
	public String Signup(@RequestBody MembersDTO membersDTO) {
		membersDTO.setUserPassword(encodePassword.encode(membersDTO.getUserPassword()));
		AuthInfo authInfo = membersService.addMemberProcess(membersDTO);
		int cnt = membersService.idCheckProcess(membersDTO);
		if (cnt >= 1) {
			return "no";
		}
		return null;

	}//end addMember()


	//회원정보 중복
	@PostMapping("/user/signup/idCheck")
	public String IdCheck(@RequestBody MembersDTO userId) {
		System.out.println("서버 getId 시작");
		int cnt = membersService.idCheckProcess(userId);
		// AuthInfo idchk = membersService.loginProcess(userId);
		//MembersDTO status = membersService.pwResetProcess(userId);
		//System.out.println(status);
		//System.out.println("status : " + userId.getUserStatus());
		System.out.println("userId 개수 : " + cnt);
		System.out.println(userId.getUserId());
		if (userId.getUserId() == "" ) {
			return "retry";
		} else if (cnt >= 1) {
			System.out.println("아이디 사용 불가능");
			return "no";
		} else if (cnt == 0 ) {
			System.out.println("아이디 사용 가능");
			return "ok";
		}
		return null;

	}//end IdCheck()


	//회원 아이디 찾기
	@PostMapping("/findId")
	public String FindId(@RequestBody MembersDTO userId) {
		membersService.FindIdProcess(userId);
		System.out.println("아이디 : " + membersService.FindIdProcess(userId));
		String findId = membersService.FindIdProcess(userId);

		if(findId != null) {
			return membersService.FindIdProcess(userId);

		} else {
			return "불일치";
		}

	}//FindId()


	//본인확인 
	@PostMapping("/infoCheck")
	public String InfoCheck(@RequestBody MembersDTO userId, HttpServletResponse response) throws IOException{
		String user = membersService.InfoCheckProcess(userId);
		System.out.println(user);
		if(user != null) {
			String encodedUserInfo = URLEncoder.encode(userId.toString(), "UTF-8");
			System.out.println("ㅠㅠ : " + encodedUserInfo);
			//response.sendRedirect("/pwReset?userInfo=" + encodedUserInfo);
			System.out.println("시작");
			//return "redirect:/pwReset";
			System.out.println("키번호 : " + user);
			return user;
		} else {
			System.out.println("끝");
			return "";
		}

	}//idCheck()


	//로그인 전 비밀번호 재설정
	@PostMapping("/pwReset")
	public String pwReset(@RequestBody MembersDTO dto) {
		dto.setUserPassword(encodePassword.encode(dto.getUserPassword()));
		membersService.pwResetProcess(dto);
		return "ok";
	}//end pwReset()


	//회원정보 가져오기
	@GetMapping("/editInfo/{userId}/{userName}")
	public MembersDTO getUserInfo(@PathVariable("userId") String userId, @PathVariable("userName") String userName) {
		return membersService.UpdateProcess(userId);
	}//end getUserInfo()
	

	//회원정보 수정
	@PostMapping("/editInfo")
	public String infoUpdate(@RequestBody MembersDTO dto) {
		membersService.infoUpdateProcess(dto);
		System.out.println("끝");
		return "ok";
	}//end infoUpdate()

	
	//비밀번호 수정 
	@PostMapping("/passwordUpdate")
	public String passwordUpdate(@RequestBody MembersDTO dto) {
		dto.setUserPassword(encodePassword.encode(dto.getUserPassword()));
		membersService.passwordUpdateProcess(dto);
		return "ok";
		
	}//end passwordUpdate()


	//회원 탈퇴
	@PostMapping("/delete")
	public String userDelete(@RequestBody MembersDTO dto) {
		membersService.userDeleteProcess(dto);
		return "ok";
	}//end userDelete()


}// end class
