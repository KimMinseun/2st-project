package com.example.youth.board.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.youth.board.dto.BoardDTO;
import com.example.youth.board.dto.BoardPageDTO;


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
	public BoardDTO admincontent(int qnaKeynum);

}
