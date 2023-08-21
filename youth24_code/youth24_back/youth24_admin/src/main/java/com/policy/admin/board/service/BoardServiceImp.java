package com.policy.admin.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.policy.admin.board.dao.BoardDAO;
import com.policy.admin.board.dto.BoardDTO;
import com.policy.admin.board.dto.BoardPageDTO;

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
		//답변글이면
		if(dto.getQnaRef()!=0) {
			boardDao.statusChange(dto.getQnaRef());
		}
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
		System.out.println("몇개임?"+boardDao.countRef(qnaKeynum));
		if(boardDao.countRef(qnaKeynum) != 1) {
			boardDao.adminDelete(qnaKeynum);
		}
		boardDao.delete(qnaKeynum);
	}
	
	@Override
	public void realDeleteProcess(int qnaKeynum) {
		boardDao.realDelete(qnaKeynum);
	}
	
	@Override
	public List<BoardDTO> searchListProcess(BoardPageDTO pv) {
		// TODO Auto-generated method stub
		return boardDao.searchList(pv);
	}

	@Override
	public int countForSearchProcess(BoardPageDTO pv) {
		// TODO Auto-generated method stub
		return boardDao.countForSearch(pv);
	}

	@Override
	public void adminSave(BoardDTO dto) {
		// TODO Auto-generated method stub
		//답변글이면
		if(dto.getQnaRef()!=0) {
			boardDao.statusChange(dto.getQnaRef());
		}
		boardDao.adminSave(dto);
		
	}

	@Override
	public BoardDTO admincontentProcess(int qnaKeynum) {
		// TODO Auto-generated method stub
		return boardDao.admincontent(qnaKeynum);
	}

	@Override
	public void adminDeleteProcess(int qnaKeynum) {
		// TODO Auto-generated method stub
		boardDao.statusReChange(qnaKeynum);
		boardDao.adminDelete(qnaKeynum);
	}

}
