package com.example.youth.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.youth.board.dao.BoardDAO;
import com.example.youth.board.dto.BoardDTO;
import com.example.youth.board.dto.BoardPageDTO;

@Service
public class BoardServiceImp implements BoardService{

	@Autowired
	BoardDAO boardDao;
	
	public BoardServiceImp() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public int countProcess() {
		return boardDao.count();
	}


	@Override
	public List<BoardDTO> listProcess(BoardPageDTO pv) {
		return boardDao.list(pv);
	}

	@Override
	public void insertProcess(BoardDTO dto) {
		boardDao.save(dto);
	}


	@Override
	public BoardDTO contentProcess(int qnaKeynum) {
		boardDao.readCount(qnaKeynum);
		return boardDao.content(qnaKeynum);
	}
	
	@Override
	public void updateProcess(BoardDTO dto) {
		boardDao.update(dto);
	}
	
	@Override
	public void deleteProcess(int qnaKeynum) {
		boardDao.delete(qnaKeynum);
	}
	
	@Override
	public void realDeleteProcess(int qnaKeynum) {
		boardDao.realDelete(qnaKeynum);
	}
	@Override
	public BoardDTO admincontentProcess(int qnaKeynum) {
		// TODO Auto-generated method stub
		return boardDao.admincontent(qnaKeynum);
	}
	
}
