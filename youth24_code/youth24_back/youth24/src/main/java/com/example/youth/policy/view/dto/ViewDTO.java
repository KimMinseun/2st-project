package com.example.youth.policy.view.dto;

import org.springframework.stereotype.Component;

@Component
public class ViewDTO {
	private int viewKeynum; //조회수 KEY
	private int policyKeynum; //정책 KEY
	private int viewGendercntM; //남성 조회수
	private int viewGendercntF; //여성 조회수
	private int viewAgecnt10; //조회 연령 - 10대 이하
	private int viewAgecnt20; //조회 연령 - 20대 
	private int viewAgecnt30; //조회 연령 - 30대
	private int viewAgecnt40; //조회 연령 - 40대
	private int viewAgecnt50; //조회 연령 - 50대
	private int viewAgecnt60; //조회 연령 - 60대 이상
	private int viewEducntLeshsc; //조회 학력 - 고졸 미만
	private int viewEducntHscgdt; //조회 학력 - 고교 졸업
	private int viewEducntClg; //조회 학력 - 대학 재학
	private int viewEducntPltclggdt; //조회 학력 - 대졸 예정
	private int viewEducntClggdt; //조회 학력 - 대학 졸업
	private int viewEducntMstnphd; //조회 학력 - 석/박사
	private int viewEmployment; //취업 조회 - 취업자
	private int viewUnemployment; //취업 조회 - 무직자
	private int viewCnt; //전체 조회수
	private int viewScrapcnt; // 전체 스크랩수
	private String viewEtc; //비고
	private String userId; // 아이디
	private String policyId;//정책 아이디
	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public ViewDTO() {
		// TODO Auto-generated constructor stub
	}

	public String getPolicyId() {
		return policyId;
	}

	public void setPolicyId(String policyId) {
		this.policyId = policyId;
	}

	public int getViewKeynum() {
		return viewKeynum;
	}

	public void setViewKeynum(int viewKeynum) {
		this.viewKeynum = viewKeynum;
	}

	public int getPolicyKeynum() {
		return policyKeynum;
	}

	public void setPolicyKeynum(int policyKeynum) {
		this.policyKeynum = policyKeynum;
	}

	public int getViewGendercntM() {
		return viewGendercntM;
	}

	public void setViewGendercntM(int viewGendercntM) {
		this.viewGendercntM = viewGendercntM;
	}

	public int getViewGendercntF() {
		return viewGendercntF;
	}

	public void setViewGendercntF(int viewGendercntF) {
		this.viewGendercntF = viewGendercntF;
	}

	public int getViewAgecnt10() {
		return viewAgecnt10;
	}

	public void setViewAgecnt10(int viewAgecnt10) {
		this.viewAgecnt10 = viewAgecnt10;
	}

	public int getViewAgecnt20() {
		return viewAgecnt20;
	}

	public void setViewAgecnt20(int viewAgecnt20) {
		this.viewAgecnt20 = viewAgecnt20;
	}

	public int getViewAgecnt30() {
		return viewAgecnt30;
	}

	public void setViewAgecnt30(int viewAgecnt30) {
		this.viewAgecnt30 = viewAgecnt30;
	}

	public int getViewAgecnt40() {
		return viewAgecnt40;
	}

	public void setViewAgecnt40(int viewAgecnt40) {
		this.viewAgecnt40 = viewAgecnt40;
	}

	public int getViewAgecnt50() {
		return viewAgecnt50;
	}

	public void setViewAgecnt50(int viewAgecnt50) {
		this.viewAgecnt50 = viewAgecnt50;
	}

	public int getViewAgecnt60() {
		return viewAgecnt60;
	}

	public void setViewAgecnt60(int viewAgecnt60) {
		this.viewAgecnt60 = viewAgecnt60;
	}

	public int getViewEducntLeshsc() {
		return viewEducntLeshsc;
	}

	public void setViewEducntLeshsc(int viewEducntLeshsc) {
		this.viewEducntLeshsc = viewEducntLeshsc;
	}

	public int getViewEducntHscgdt() {
		return viewEducntHscgdt;
	}

	public void setViewEducntHscgdt(int viewEducntHscgdt) {
		this.viewEducntHscgdt = viewEducntHscgdt;
	}

	public int getViewEducntClg() {
		return viewEducntClg;
	}

	public void setViewEducntClg(int viewEducntClg) {
		this.viewEducntClg = viewEducntClg;
	}

	public int getViewEducntPltclggdt() {
		return viewEducntPltclggdt;
	}

	public void setViewEducntPltclggdt(int viewEducntPltclggdt) {
		this.viewEducntPltclggdt = viewEducntPltclggdt;
	}

	public int getViewEducntClggdt() {
		return viewEducntClggdt;
	}

	public void setViewEducntClggdt(int viewEducntClggdt) {
		this.viewEducntClggdt = viewEducntClggdt;
	}

	public int getViewEducntMstnphd() {
		return viewEducntMstnphd;
	}

	public void setViewEducntMstnphd(int viewEducntMstnphd) {
		this.viewEducntMstnphd = viewEducntMstnphd;
	}

	public int getViewEmployment() {
		return viewEmployment;
	}

	public void setViewEmployment(int viewEmployment) {
		this.viewEmployment = viewEmployment;
	}

	public int getViewUnemployment() {
		return viewUnemployment;
	}

	public void setViewUnemployment(int viewUnemployment) {
		this.viewUnemployment = viewUnemployment;
	}

	public int getViewCnt() {
		return viewCnt;
	}

	public void setViewCnt(int viewCnt) {
		this.viewCnt = viewCnt;
	}

	public int getViewScrapcnt() {
		return viewScrapcnt;
	}

	public void setViewScrapcnt(int viewScrapcnt) {
		this.viewScrapcnt = viewScrapcnt;
	}

	public String getViewEtc() {
		return viewEtc;
	}

	public void setViewEtc(String viewEtc) {
		this.viewEtc = viewEtc;
	}
	

}
