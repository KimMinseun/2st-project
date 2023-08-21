package com.example.youth.board.dto;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

import com.example.youth.member.dto.MembersDTO;


@Component
public class BoardDTO {
	private int qnaKeynum; // QNA 고유 번호 (PK)
	private int userKeynum; //작성자 고유 번호 (FK)
	private int adminKeynum; //관리자 고유 번호 (FK)
	private String qnaTitle; //QNA 제목
	private String qnaContent; //QNA 내용
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date qnaRegdate; //QNA 작성일
	private int qnaReadcount;//QNA 조회수
	private int qnaRef; //답변 대상 QNA번호
	private int qnaStatus; //QNA 상태
	private int qnaSecret; //QNA 비밀글 여부
	private String qnaEtc; //비고
	private String userId;
	private MembersDTO membersDTO;

	
	public String getUserId() {
		return userId;
	}


	public void setUserId(String userId) {
		this.userId = userId;
	}


	public MembersDTO getMembersDTO() {
		return membersDTO;
	}


	public void setMembersDTO(MembersDTO membersDTO) {
		this.membersDTO = membersDTO;
	}


	public BoardDTO() {
		// TODO Auto-generated constructor stub
	}


	public int getQnaKeynum() {
		return qnaKeynum;
	}


	public void setQnaKeynum(int qnaKeynum) {
		this.qnaKeynum = qnaKeynum;
	}


	public int getUserKeynum() {
		return userKeynum;
	}


	public void setUserKeynum(int userKeynum) {
		this.userKeynum = userKeynum;
	}


	public int getAdminKeynum() {
		return adminKeynum;
	}


	public void setAdminKeynum(int adminKeynum) {
		this.adminKeynum = adminKeynum;
	}


	public String getQnaTitle() {
		return qnaTitle;
	}


	public void setQnaTitle(String qnaTitle) {
		this.qnaTitle = qnaTitle;
	}


	public String getQnaContent() {
		return qnaContent;
	}


	public void setQnaContent(String qnaContent) {
		this.qnaContent = qnaContent;
	}


	public Date getQnaRegdate() {
		return qnaRegdate;
	}


	public void setQnaRegdate(Date qnaRegdate) {
		this.qnaRegdate = qnaRegdate;
	}


	public int getQnaReadcount() {
		return qnaReadcount;
	}


	public void setQnaReadcount(int qnaReadcount) {
		this.qnaReadcount = qnaReadcount;
	}


	public int getQnaRef() {
		return qnaRef;
	}


	public void setQnaRef(int qnaRef) {
		this.qnaRef = qnaRef;
	}


	public int getQnaStatus() {
		return qnaStatus;
	}


	public void setQnaStatus(int qnaStatus) {
		this.qnaStatus = qnaStatus;
	}


	public String getQnaEtc() {
		return qnaEtc;
	}


	public void setQnaEtc(String qnaEtc) {
		this.qnaEtc = qnaEtc;
	}


	public int getQnaSecret() {
		return qnaSecret;
	}


	public void setQnaSecret(int qnaSecret) {
		this.qnaSecret = qnaSecret;
	}
	
	

}
