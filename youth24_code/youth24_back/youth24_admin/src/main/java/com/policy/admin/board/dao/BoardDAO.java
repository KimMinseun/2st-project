package com.policy.admin.board.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.policy.admin.board.dto.BoardDTO;
import com.policy.admin.board.dto.BoardPageDTO;


@Mapper
@Repository
public interface BoardDAO {
	public int count();
	public List<BoardDTO> list(BoardPageDTO pv);
	public void save(BoardDTO dto);
	public void readCount(int qnaKeynum);
	public void statusChange(int qnaRef);
	public BoardDTO content(int qnaKeynum);
	public void update(BoardDTO dto);
	public void delete(int qnaKeynum);
	public void realDelete(int qnaKeynum);
	public List<BoardDTO> searchList(BoardPageDTO pv);
	public int countForSearch(BoardPageDTO pv);
	public void adminSave(BoardDTO dto);
	public BoardDTO admincontent(int qnaKeynum);
	public void adminDelete(int qnaKeynum);
	public void statusReChange(int qnaRef);
	public int countRef(int qnaRef);
	

}
