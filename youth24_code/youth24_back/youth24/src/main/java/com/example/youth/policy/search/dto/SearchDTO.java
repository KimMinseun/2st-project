package com.example.youth.policy.search.dto;

import org.springframework.stereotype.Component;

@Component
public class SearchDTO {
	private String query; //검색어
	private String[] bizTycdSel; //정책유형
	private String[] srchPolyBizSecd; //지역코드
	

	private String searchWord; //검색어

	private String[] bizTycdSelArr; //정책유형
	private String[] srchPolyBizSecdArr; //지역코드 
	
	public SearchDTO() {
		// TODO Auto-generated constructor stub
	}


	public String getSearchWord() {
		return searchWord;
	}


	public void setSearchWord(String searchWord) {
		this.searchWord = searchWord;
	}


	public String[] getBizTycdSelArr() {
		return bizTycdSelArr;
	}


	public void setBizTycdSelArr(String[] bizTycdSelArr) {
		this.bizTycdSelArr = bizTycdSelArr;
	}


	public String[] getSrchPolyBizSecdArr() {
		return srchPolyBizSecdArr;
	}


	public void setSrchPolyBizSecdArr(String[] srchPolyBizSecdArr) {
		this.srchPolyBizSecdArr = srchPolyBizSecdArr;
	}


	public SearchDTO(String query, String[] bizTycdSel, String[] srchPolyBizSecd) {
		super();
		this.query = query;
		this.bizTycdSel = bizTycdSel;
		this.srchPolyBizSecd = srchPolyBizSecd;
	}


	public String getQuery() {
		return query;
	}

	public void setQuery(String query) {
		this.query = query;
	}


	public String[] getBizTycdSel() {
		return bizTycdSel;
	}


	public void setBizTycdSel(String[] bizTycdSel) {
		this.bizTycdSel = bizTycdSel;
	}


	public String[] getSrchPolyBizSecd() {
		return srchPolyBizSecd;
	}


	public void setSrchPolyBizSecd(String[] srchPolyBizSecd) {
		this.srchPolyBizSecd = srchPolyBizSecd;
	}

	

}
