package com.policy.admin.user.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.policy.admin.user.dto.MemberDTO;
import com.policy.admin.user.dto.MemberPageDTO;
import com.policy.admin.user.service.MemberService;


@CrossOrigin("*")
@RestController
public class MemberController {
	@Autowired
	private MemberPageDTO pdto;
	
	@Autowired
	private MemberDTO dto;
	
	@Autowired
	private MemberService service;
	
	private int currentPage;
	
	

    //멤버 상세보기
	@GetMapping("/member/view/{userKeynum}")
	public MemberDTO viewMemberExecute(@PathVariable("userKeynum") int userKeynum) {
		return service.contentProcess(userKeynum);
   
	}

	// 탈퇴처리
	@PutMapping("/member/delete/{userKeynum}")
	public void deleteExecute(@PathVariable("userKeynum") int userKeynum, HttpServletRequest request) {
		service.deleteProcess(userKeynum);
	}
	// 진짜탈퇴처리
	@DeleteMapping("/member/realDelete/{userKeynum}")
	public void realDeleteExecute(@PathVariable("userKeynum") int userKeynum, HttpServletRequest request) {
		service.realDeleteProcess(userKeynum);
	}
	
	
	// DB 내 정책 검색 리스트 받아오기
	//http://localhost:8090/member/searchlist/1
    @GetMapping(value = "/member/searchlist/{currentPage}")
    public Map<String, Object> memberSearchGetExecute(@PathVariable("currentPage") int currentPage, @RequestParam(required = false) String searchKey, @RequestParam(required = false) String searchWord,  MemberPageDTO pv) {
        Map<String, Object> map = new HashMap<>();
        System.out.println("searchWord"+searchWord);
        pv.setSearchKey(searchKey);
        pv.setSearchWord(searchWord);
		//회원정보 갯수 구하기
        int totalRecord = service.countForSearchProcess(pv);
        if(totalRecord >=1) {
			if(pv.getCurrentPage() == 0)
				this.currentPage =currentPage;
			else {
				this.currentPage = pv.getCurrentPage();
			}
		
			this.pdto = new MemberPageDTO(this.currentPage, totalRecord, searchKey, searchWord);
			List<MemberDTO> dtolist = service.searchListProcess(this.pdto);
			map.put("aList",dtolist);
			map.put("pv", this.pdto);
        }

        return map;
    }

	
}
