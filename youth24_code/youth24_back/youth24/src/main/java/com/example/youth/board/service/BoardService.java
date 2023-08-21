package com.example.youth.board.service;

import java.util.List;

import com.example.youth.board.dto.BoardDTO;
import com.example.youth.board.dto.BoardPageDTO;


public interface BoardService {
	public int countProcess(); 
	public List<BoardDTO> listProcess(BoardPageDTO pv);
	public void insertProcess(BoardDTO dto);
	public BoardDTO contentProcess(int qnaKeynum);
	public void updateProcess(BoardDTO dto);
	public void deleteProcess(int qnaKeynum);
	public void realDeleteProcess(int qnaKeynum);
	public BoardDTO admincontentProcess(int qnaKeynum);
}
