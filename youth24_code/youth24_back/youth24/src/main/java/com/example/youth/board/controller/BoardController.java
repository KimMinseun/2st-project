package com.example.youth.board.controller;

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
import org.springframework.web.bind.annotation.RestController;

import com.example.youth.board.dto.BoardDTO;
import com.example.youth.board.dto.BoardPageDTO;
import com.example.youth.board.service.BoardService;



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
	
	@GetMapping("/qna/list/{currentPage}")
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
	
	
	@PostMapping("/qna/write")
	public String writeProExecute(BoardDTO dto, BoardPageDTO pv, HttpServletRequest req, HttpSession session) {
		System.out.println("dto.getUserId()"+ dto.getUserId());
		boardService.insertProcess(dto);
		return String.valueOf(1);
	
	}
	
	@GetMapping("/qna/view/{qnaKeynum}")
	public BoardDTO viewExecute(@PathVariable("qnaKeynum") int qnaKeynum) {
		return boardService.contentProcess(qnaKeynum);
	}
	
//	@GetMapping("/board/view/{qnaKeynum}")
//	public Map<String, Object> viewExecute(@PathVariable("qnaKeynum") int qnaKeynum) {
//		Map<String, Object> map = new HashMap<>();
//		map.put("aList", boardService.contentProcess(qnaKeynum));
//		return boardService.contentProcess(qnaKeynum);
//	}
	
	// 업데이트 수정일때는 @PutMapping
	@PutMapping("/qna/update")
	public void updateExecute(BoardDTO dto, HttpServletRequest request) throws IllegalStateException, IOException {
		boardService.updateProcess(dto);
	}

	// 삭제
	@PutMapping("/qna/delete/{qnaKeynum}")
	public void deleteExecute(@PathVariable("qnaKeynum") int qnaKeynum, HttpServletRequest request) {
		boardService.deleteProcess(qnaKeynum);
	}
	// 진짜삭제
	@DeleteMapping("/qna/realDelete/{qnaKeynum}")
	public void realDeleteExecute(@PathVariable("qnaKeynum") int qnaKeynum, HttpServletRequest request) {
		boardService.realDeleteProcess(qnaKeynum);
	}

	@GetMapping("/qna/adminview/{qnaKeynum}")
	public BoardDTO adminviewExecute(@PathVariable("qnaKeynum") int qnaKeynum) {
		return boardService.admincontentProcess(qnaKeynum);
	}
	
}
