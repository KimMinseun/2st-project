package com.example.youth.policy.dto;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.example.youth.policy.view.dto.ViewDTO;

@Component
public class PolicyDTO {
	private int policyKeynum; //정책key
	private String policyId; //정책아이디
	private String policyBizType; //기관 및 지자체 구분
	private String policyBizTypeCode; //정책유형코드
	private String policyBizTypeName; //정책유형명
	private String policyName; //정책명
	private String policyIntroduce; //정책소개
	private String policyVolume; //지원규모
	private String policyContent; //지원내용
	private String policyAge; //연령
	private String policyEmpStatus; //취업상태
	private String policyEducation; //학력
	private String policyMajor; //전공
	private String policySplz; //특화분야
	private String policyAgentName; //신청기관명
	private String policyRequestPeriod; //신청기간
	private String policyRequestProcess; //신청절차
	private String policyPrstnDtl; //심사발표
	private String policyUrl; //사이트링크주소
	private String policyImages; //관련이미지
	private String policyEtc; //비고
	private String ip;
	private int scrapCount;
	
	private ViewDTO viewDTO;
	
	//form페이지에서 파일첨부를 받아 처리해주는 멤버변수
	private MultipartFile filename;
	
	public PolicyDTO() {
		// TODO Auto-generated constructor stub
	}

	public int getPolicyKeynum() {
		return policyKeynum;
	}

	public void setPolicyKeynum(int policyKeynum) {
		this.policyKeynum = policyKeynum;
	}

	public ViewDTO getViewDTO() {
		return viewDTO;
	}

	public void setViewDTO(ViewDTO viewDTO) {
		this.viewDTO = viewDTO;
	}

	public String getPolicyId() {
		return policyId;
	}

	public void setPolicyId(String policyId) {
		this.policyId = policyId;
	}

	public String getPolicyBizType() {
		return policyBizType;
	}

	public void setPolicyBizType(String policyBizType) {
		this.policyBizType = policyBizType;
	}

	public String getPolicyBizTypeCode() {
		return policyBizTypeCode;
	}

	public void setPolicyBizTypeCode(String policyBizTypeCode) {
		this.policyBizTypeCode = policyBizTypeCode;
	}

	public String getPolicyBizTypeName() {
		return policyBizTypeName;
	}

	public void setPolicyBizTypeName(String policyBizTypeName) {
		this.policyBizTypeName = policyBizTypeName;
	}

	public String getPolicyName() {
		return policyName;
	}

	public void setPolicyName(String policyName) {
		this.policyName = policyName;
	}

	public String getPolicyIntroduce() {
		return policyIntroduce;
	}

	public void setPolicyIntroduce(String policyIntroduce) {
		this.policyIntroduce = policyIntroduce;
	}

	public String getPolicyVolume() {
		return policyVolume;
	}

	public void setPolicyVolume(String policyVolume) {
		this.policyVolume = policyVolume;
	}

	public String getPolicyContent() {
		return policyContent;
	}

	public void setPolicyContent(String policyContent) {
		this.policyContent = policyContent;
	}

	public String getPolicyAge() {
		return policyAge;
	}

	public void setPolicyAge(String policyAge) {
		this.policyAge = policyAge;
	}

	public String getPolicyEmpStatus() {
		return policyEmpStatus;
	}

	public void setPolicyEmpStatus(String policyEmpStatus) {
		this.policyEmpStatus = policyEmpStatus;
	}

	public String getPolicyEducation() {
		return policyEducation;
	}

	public void setPolicyEducation(String policyEducation) {
		this.policyEducation = policyEducation;
	}

	public String getPolicyMajor() {
		return policyMajor;
	}

	public void setPolicyMajor(String policyMajor) {
		this.policyMajor = policyMajor;
	}

	public String getPolicySplz() {
		return policySplz;
	}

	public void setPolicySplz(String policySplz) {
		this.policySplz = policySplz;
	}

	public String getPolicyAgentName() {
		return policyAgentName;
	}

	public void setPolicyAgentName(String policyAgentName) {
		this.policyAgentName = policyAgentName;
	}

	public String getPolicyRequestPeriod() {
		return policyRequestPeriod;
	}

	public void setPolicyRequestPeriod(String policyRequestPeriod) {
		this.policyRequestPeriod = policyRequestPeriod;
	}

	public String getPolicyRequestProcess() {
		return policyRequestProcess;
	}

	public void setPolicyRequestProcess(String policyRequestProcess) {
		this.policyRequestProcess = policyRequestProcess;
	}

	public String getPolicyPrstnDtl() {
		return policyPrstnDtl;
	}

	public void setPolicyPrstnDtl(String policyPrstnDtl) {
		this.policyPrstnDtl = policyPrstnDtl;
	}

	public String getPolicyUrl() {
		return policyUrl;
	}

	public void setPolicyUrl(String policyUrl) {
		this.policyUrl = policyUrl;
	}

	public String getPolicyImages() {
		return policyImages;
	}

	public void setPolicyImages(String policyImages) {
		this.policyImages = policyImages;
	}

	public String getPolicyEtc() {
		return policyEtc;
	}

	public void setPolicyEtc(String policyEtc) {
		this.policyEtc = policyEtc;
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	public MultipartFile getFilename() {
		return filename;
	}

	public void setFilename(MultipartFile filename) {
		this.filename = filename;
	}

	public int getScrapCount() {
		return scrapCount;
	}

	public void setScrapCount(int scrapCount) {
		this.scrapCount = scrapCount;
	}
	
	
	

}

