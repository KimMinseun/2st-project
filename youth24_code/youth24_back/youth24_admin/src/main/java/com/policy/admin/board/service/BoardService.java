package com.policy.admin.board.service;

import java.util.List;

import com.policy.admin.board.dto.BoardDTO;
import com.policy.admin.board.dto.BoardPageDTO;

public interface BoardService {
	public int countProcess(); 
	public List<BoardDTO> listProcess(BoardPageDTO pv);
	public void insertProcess(BoardDTO dto);
	public BoardDTO contentProcess(int qnaKeynum);
	public void updateProcess(BoardDTO dto);
	public void deleteProcess(int qnaKeynum);
	public void realDeleteProcess(int qnaKeynum);
	public List<BoardDTO> searchListProcess(BoardPageDTO pv);
	public int countForSearchProcess(BoardPageDTO pv);
	public void adminSave(BoardDTO dto);
	public BoardDTO admincontentProcess(int qnaKeynum);
	public void adminDeleteProcess(int qnaKeynum);
}
