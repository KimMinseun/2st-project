package com.example.youth.policy.scrap.dto;

import org.springframework.stereotype.Component;

import com.example.youth.member.dto.MembersDTO;
import com.example.youth.policy.dto.PolicyDTO;
import com.example.youth.policy.view.dto.ViewDTO;


@Component
public class ScrapDTO {
	private int scrapKeynum; // 스크랩 고유 번호
	private int userKeynum; //작성자 고유 번호 
	private int policyKeynum; //정책 고유 번호
	private String scrapEtc; //스크랩기타
	private String userId;
	private String policyId;
	
	private MembersDTO membersDTO;
	
	private PolicyDTO policyDTO;
	
	private ViewDTO viewDTO;
	
	
	public ScrapDTO(String policyId, String userId) {
		super();
		this.userId = userId;
		this.policyId = policyId;
	}


	public PolicyDTO getPolicyDTO() {
		return policyDTO;
	}

	public void setPolicyDTO(PolicyDTO policyDTO) {
		this.policyDTO = policyDTO;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPolicyId() {
		return policyId;
	}

	public void setPolicyId(String policyId) {
		this.policyId = policyId;
	}

	public ScrapDTO() {
		// TODO Auto-generated constructor stub
	}

	public int getScrapKeynum() {
		return scrapKeynum;
	}

	public void setScrapKeynum(int scrapKeynum) {
		this.scrapKeynum = scrapKeynum;
	}

	public int getUserKeynum() {
		return userKeynum;
	}

	public void setUserKeynum(int userKeynum) {
		this.userKeynum = userKeynum;
	}

	public int getPolicyKeynum() {
		return policyKeynum;
	}

	public void setPolicyKeynum(int policyKeynum) {
		this.policyKeynum = policyKeynum;
	}

	public String getScrapEtc() {
		return scrapEtc;
	}

	public void setScrapEtc(String scrapEtc) {
		this.scrapEtc = scrapEtc;
	}

	public MembersDTO getMembersDTO() {
		return membersDTO;
	}

	public void setMembersDTO(MembersDTO membersDTO) {
		this.membersDTO = membersDTO;
	}

	public ViewDTO getViewDTO() {
		return viewDTO;
	}

	public void setViewDTO(ViewDTO viewDTO) {
		this.viewDTO = viewDTO;
	}
	
	
}
