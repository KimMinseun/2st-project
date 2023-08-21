package com.policy.admin.admin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.policy.admin.admin.dto.AdminDTO;
import com.policy.admin.admin.dto.AuthInfo;
import com.policy.admin.admin.dto.MembersDTO;
import com.policy.admin.admin.dto.PageDTO;
import com.policy.admin.admin.service.AdminService;


//@CrossOrigin({"http://localhost:3000"})
@CrossOrigin("*")

@RestController
public class AdminController {

	@Autowired
	private AdminService adminService;
	// 비밀번호 암호화 처리
	@Autowired
	private BCryptPasswordEncoder encodePassword;
	@Autowired
	private PageDTO pdto;
	private int currentPage;

	public AdminController() {

	}

	//회원가입 처리
	//@RequestBody : 첨부파일 있으면 안 붙임
	@PostMapping("/")
	public String addAdmin(@RequestBody AdminDTO adminDTO) {
		adminDTO.setAdminPassword(encodePassword.encode(adminDTO.getAdminPassword()));
		System.out.println("시작");
		AuthInfo authInfo = adminService.addAdminProcess(adminDTO);		
		System.out.println("회원가입 됨");
		return null;

	}//end addAdmin()

	//회원정보 중복
	@PostMapping("/admin/signup/idCheck")
	public String IdCheck(@RequestBody AdminDTO adminId) {
		System.out.println("서버 getId 시작");
		int cnt = adminService.idCheckProcess(adminId);
		// AuthInfo idchk = membersService.loginProcess(userId);
		System.out.println(adminId.getAdminStatus());
		System.out.println(cnt);
		System.out.println(adminId.getAdminId());
		if (adminId.getAdminId() == "" ) {
			return "retry";
		} else if (cnt >= 1 ) {
			System.out.println("아이디 사용 불가능");
			return "no";
		} else if (cnt == 0 || (cnt >= 1 && adminId.getAdminStatus() == '1')) {
			System.out.println("아이디 사용 가능");
			return "ok";
		}
		return null;

	}//end IdCheck()


	//	//회원정보 가져오기
	//	@GetMapping("/admin/editinfo/{memberEmail}")
	//	public AdminDTO getAdmin(@PathVariable("adminId") String adminId) {
	//		return adminService.updateAdminProcess(adminId);
	//		
	//	}//end getMember()
	//	
	//	
	//	//비밀번호 수정
	//	@PostMapping("/admin/update")
	//	public void updateMember(@RequestBody AdminDTO adminDTO) {
	//		adminDTO.setAdminPassword(encodePassword.encode(adminDTO.getAdminPassword()));
	//		adminService.updateAdminProcess(adminDTO);
	//		
	//	}//end updateMember()


	//관리자 탈퇴
	@PutMapping("/adminDelete/{adminKeynum}")
	public String adminDelete(@PathVariable("adminKeynum") int adminKeynum) {
		System.out.println("adminKeynum"+adminKeynum);
		adminService.adminDeleteProcess(adminKeynum);
		return "ok";

	}//end adminDelete()

	//회원 탈퇴
	@PutMapping("/userDelete/{userKeynum}")
	public String userDelete(@PathVariable("userKeynum") int userKeynum) {
		//System.out.println("탈퇴시작");
		adminService.userDeleteProcess(userKeynum);
		//System.out.println("탈퇴 완료");
		return "ok";
	}//end userDelete()
	// 탈퇴처리
	


	// 사용자 검색
	@GetMapping(value = "/admin/searchUser/{currentPage}")
	public Map<String, Object> userSearch(@PathVariable("currentPage") int currentPage, @RequestParam(required = false) String searchKey, @RequestParam(required = false) String searchWord,  PageDTO pv) {
		Map<String, Object> map = new HashMap<>();
		System.out.println("searchWord : " + searchWord);
		System.out.println("searchKey : " + searchKey);
		pv.setSearchKey(searchKey);
		pv.setSearchWord(searchWord);

		int totalRecord = adminService.countForSearchProcess(pv);
		if(totalRecord >=1) {
			if(pv.getCurrentPage() == 0)
				this.currentPage =currentPage;
			else {
				this.currentPage = pv.getCurrentPage();
			}

			this.pdto = new PageDTO(this.currentPage, totalRecord, searchKey, searchWord);
			List<MembersDTO> dtolist = adminService.searchListProcess(this.pdto);
			map.put("aList",dtolist);
			map.put("pv", this.pdto);
		}
		System.out.println("완");
		return map;
	}

	// 관리자 검색
	@GetMapping(value = "/admin/searchAdmin/{currentPage}")
	public Map<String, Object> adminSearch(@PathVariable("currentPage") int currentPage, @RequestParam(required = false) String searchKey, @RequestParam(required = false) String searchWord,  PageDTO pv) {
		Map<String, Object> map = new HashMap<>();
		System.out.println("searchWord : " + searchWord);
		System.out.println("searchKey : " + searchKey);
		pv.setSearchKey(searchKey);
		pv.setSearchWord(searchWord);

		int totalRecord = adminService.countForSearchAdminProcess(pv);
		if(totalRecord >=1) {
			if(pv.getCurrentPage() == 0)
				this.currentPage =currentPage;
			else {
				this.currentPage = pv.getCurrentPage();
			}

			this.pdto = new PageDTO(this.currentPage, totalRecord, searchKey, searchWord);
			List<AdminDTO> dtolist = adminService.searchAdminListProcess(this.pdto);
			map.put("aList",dtolist);
			map.put("pv", this.pdto);
		}
		System.out.println("완");
		return map;
	}

		//회원정보 가져오기
		@GetMapping("/admin/userview/{userKeynum}")
		public MembersDTO getUserInfo(@PathVariable("userKeynum") int userKeynum) {
			return adminService.contentProcess(userKeynum);
			
		}//end getMember()
		

		//관리자 회원정보 가져오기
		@GetMapping("/admin/adminview/{adminKeynum}")
		public AdminDTO getAdminInfo(@PathVariable("adminKeynum") int userKeynum) {
			return adminService.admincontentProcess(userKeynum);
			
		}//end getMember()

}// end class

