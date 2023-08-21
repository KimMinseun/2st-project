package com.example.youth.policy.scrap.controller;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.youth.policy.dto.PolicyDTO;
import com.example.youth.policy.scrap.dto.ScrapDTO;
import com.example.youth.policy.scrap.dto.ScrapPageDTO;
import com.example.youth.policy.scrap.service.ScrapService;


@CrossOrigin("*")
@RestController
public class ScrapController {
	
	@Autowired
	private ScrapService scrapService;
	
	@Autowired
	private ScrapPageDTO sdto;
	
	private int currentPage;

	public ScrapController() {
		// TODO Auto-generated constructor stub
	}
	
	//특정유저의 스크랩 리스트 가져오기
	//http://localhost:8090/my/clip/6
	@GetMapping("/my/clip/{userKeynum}")
	public Map<String, Object> scrapListExecute(@PathVariable("userKeynum") int userKeynum, ScrapPageDTO pv) {
		Map<String, Object> map = new HashMap<>();
		
		int totalRecord = scrapService.countProcess(userKeynum);

			
			this.sdto = new ScrapPageDTO(1, totalRecord, userKeynum);
			List<ScrapDTO> dtolist = scrapService.listProcess(this.sdto);
			for(ScrapDTO item : dtolist) {
				try {
					item.getPolicyDTO().setScrapCount(scrapService.checklistProcess(item.getPolicyId(),userKeynum));
				} catch(Exception e) {
					System.out.println("userKeynum이 없음");
				}	
			}
			map.put("aList", dtolist);
			map.put("pv", this.sdto);
		
		return map;
	}
	
	//스크랩 등록하기
	@PostMapping("/policy/scrap/save")
	public String saveProExecute(ScrapDTO dto, ScrapPageDTO pv, HttpServletRequest req, HttpSession session) {
		String checkString = dto.getPolicyId() + dto.getUserId();
		System.out.println("checkString" + checkString);
		
		try {
			ScrapDTO check = scrapService.getPolicyKeynumProcess(dto);
			System.out.println(check.getPolicyId());
			System.out.println(check.getUserId());
			String confirmString = check.getPolicyId()+ check.getUserId();
			System.out.println("confirmString" + confirmString);
			if(checkString.equals(confirmString)) {
				System.out.println("이미 존재하는 스크랩입니다.");
			}
		}catch(Exception e) {
			scrapService.saveProcess(dto);
			System.out.println("스크랩 저장완료");
		}
		
		
		return String.valueOf(pv.getCurrentPage());
	
	}
	
	//스크랩 삭제하기
	@DeleteMapping("/policy/scrap/delete")
	public void deleteExecute(@RequestParam(required = false, value="policyId") String policyId,@RequestParam(required = false,value = "userKeynum") int userKeynum) {
		if(scrapService.checklistProcess(policyId,userKeynum) == 0) {
			System.out.println("등록되지 않은 스크랩입니다.");
		} else {
			scrapService.deleteProcess(policyId, userKeynum);
			System.out.println("스크랩 삭제 완료");
		}
		
	}
	
	//http://localhost:8090/policy/scrap/check/R2023040406879/6
	//스크랩 여부확인
	@GetMapping("/policy/scrap/check")
	public int checkListExecute(@RequestParam(required = false, value="policyId") String policyId, @RequestParam(required = false,value = "userKeynum") int userKeynum) {
		System.out.println(policyId);
		System.out.println(userKeynum);
		return scrapService.checklistProcess(policyId,userKeynum);
	}

}
