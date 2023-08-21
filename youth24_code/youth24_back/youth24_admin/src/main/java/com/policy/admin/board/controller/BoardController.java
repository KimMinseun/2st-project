package com.policy.admin.board.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.policy.admin.board.dto.BoardDTO;
import com.policy.admin.board.dto.BoardPageDTO;
import com.policy.admin.board.service.BoardService;


@CrossOrigin("*")
@RestController
public class BoardController {
	
	@Autowired
	private BoardService boardService;
	
	@Autowired
	private BoardPageDTO pdto;
	
	private int currentPage;
	
	public BoardController() {
		// TODO Auto-generated constructor stub
	}
	
	//http://localhost:8090/board/list/1
	
	@GetMapping("/board/list/{currentPage}")
	public Map<String, Object> listExecute(@PathVariable("currentPage") int currentPage, BoardPageDTO pv) {
		Map<String, Object> map = new HashMap<>();
		int totalRecord = boardService.countProcess();
		if(totalRecord >=1) {
//			if(pv.getCurrentPage() == 0)
				this.currentPage =currentPage;
//			else
//				this.currentPage = pv.getCurrentPage();
			
			this.pdto = new BoardPageDTO(this.currentPage, totalRecord);
			
			map.put("aList", boardService.listProcess(this.pdto));
			map.put("pv", this.pdto);
		}
		return map;
	}
	
	
	@PostMapping("/board/write")
	public String writeProExecute(BoardDTO dto, BoardPageDTO pv, HttpServletRequest req, HttpSession session) {
		
//		AuthInfo authInfo = (AuthInfo)session.getAttribute("authInfo");
//		dto.setMemberEmail(authInfo.getMemberEmail());
		
		boardService.insertProcess(dto);
		
		//답변글이면
		if(dto.getQnaRef()!= 0) {
			//ratt.addAttribute("currentPage", pv.getCurrentPage());
			return String.valueOf(pv.getCurrentPage());
		} else {
			return String.valueOf(1);
		}
//		return "redirect:/board/list.do";
	}
	
	@GetMapping("/board/view/{qnaKeynum}")
	public BoardDTO viewExecute(@PathVariable("qnaKeynum") int qnaKeynum) {
		return boardService.contentProcess(qnaKeynum);
	}
	
	// 업데이트 수정일때는 @PutMapping
	@PutMapping("/board/update")
	public void updateExecute(BoardDTO dto, HttpServletRequest request) throws IllegalStateException, IOException {
		boardService.updateProcess(dto);
	}

	// 삭제
	@PutMapping("/board/delete/{qnaKeynum}")
	public void deleteExecute(@PathVariable("qnaKeynum") int qnaKeynum, HttpServletRequest request) {
		boardService.deleteProcess(qnaKeynum);
	}
	
	// 삭제
	@PutMapping("/board/adminDelete/{qnaKeynum}")
	public void adminDeleteExecute(@PathVariable("qnaKeynum") int qnaKeynum, HttpServletRequest request) {
		boardService.adminDeleteProcess(qnaKeynum);
	}
	// 진짜삭제
	@DeleteMapping("/board/realDelete/{qnaKeynum}")
	public void realDeleteExecute(@PathVariable("qnaKeynum") int qnaKeynum, HttpServletRequest request) {
		boardService.realDeleteProcess(qnaKeynum);
	}
	

	// board 검색 리스트 받아오기
	//http://localhost:8090/board/searchlist/1
    @GetMapping(value = "/board/searchlist/{currentPage}")
    public Map<String, Object> boardSearchGetExecute(@PathVariable("currentPage") int currentPage, @RequestParam(required = false) String searchKey, @RequestParam(required = false) String searchWord,  BoardPageDTO pv) {
        Map<String, Object> map = new HashMap<>();
        System.out.println("searchWord"+searchWord);
        pv.setSearchKey(searchKey);
        pv.setSearchWord(searchWord);
		int totalRecord = boardService.countForSearchProcess(pv);
        if(totalRecord >=1) {
			if(pv.getCurrentPage() == 0)
				this.currentPage =currentPage;
			else {
				this.currentPage = pv.getCurrentPage();
			}
		
			this.pdto = new BoardPageDTO(this.currentPage, totalRecord, searchKey, searchWord);
			List<BoardDTO> dtolist = boardService.searchListProcess(this.pdto);
			map.put("aList",dtolist);
			map.put("pv", this.pdto);
        }

        return map;
    }
    
	@PostMapping("/board/adminWrite")
	public String adminWriteProExecute(BoardDTO dto, BoardPageDTO pv, HttpServletRequest req, HttpSession session) {
		System.out.println("adminKeynum"+dto.getAdminKeynum());
		boardService.adminSave(dto);
		
		//답변글이면
		if(dto.getQnaRef()!= 0) {
			//ratt.addAttribute("currentPage", pv.getCurrentPage());
			return String.valueOf(pv.getCurrentPage());
		} else {
			return String.valueOf(1);
		}
//		return "redirect:/board/list.do";
	}
	
	
	@GetMapping("/board/adminview/{qnaKeynum}")
	public BoardDTO adminviewExecute(@PathVariable("qnaKeynum") int qnaKeynum) {
		return boardService.admincontentProcess(qnaKeynum);
	}
	

}
