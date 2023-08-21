package com.example.youth.policy.search.dto;



import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class SearchPageDTO {
	private int currentPage; // 현재페이지
	private int totalCount; // 총 레코드수
	private int blockCount = 16; // 한 페이지에 보여줄 레코드 수
	private int blockPage = 5; // 한 블록에 보여줄 페이지 수
	private int totalPage; // 총 페이지수
	private int startRow; // 시작 레코드 번호
	private int endRow; // 끝 레코드 번호
	private int startPage; // 한 블록의 시작 페이지 번호
	private int endPage; // 한 블록의 끝 페이지 번호
	private int number;
	private int viewScrapcnt; 
	private String searchWord; //검색어

//	private String[] bizTycdSelArr; //정책유형
//	private String[] srchPolyBizSecdArr; //지역코드 
	private List<String> bizTycdSelList; //정책유형
	

	public int getViewScrapcnt() {
		return viewScrapcnt;
	}



	public void setViewScrapcnt(int viewScrapcnt) {
		this.viewScrapcnt = viewScrapcnt;
	}

	
	
	public List<String> getBizTycdSelList() {
		return bizTycdSelList;
	}



	public void setBizTycdSelList(List<String> bizTycdSelList) {
		this.bizTycdSelList = bizTycdSelList;
	}



	public List<String> getSrchPolyBizSecdList() {
		return srchPolyBizSecdList;
	}



	public void setSrchPolyBizSecdList(List<String> srchPolyBizSecdList) {
		this.srchPolyBizSecdList = srchPolyBizSecdList;
	}

	private List<String> srchPolyBizSecdList; //지역코드 

	public SearchPageDTO() {

	}

	
	
	public SearchPageDTO(int currentPage, int totalCount) {
		this.currentPage = currentPage;
		this.totalCount = totalCount;
		
		// 총 페이지수
		totalPage = totalCount / blockCount + (totalCount % blockCount == 0 ? 0 : 1);
		if(totalPage<currentPage)
		  this.currentPage = totalPage;

		// 시작레코드
		startRow = (this.currentPage - 1) * blockCount + 1;

		// 끝레코드
		endRow = startRow + blockCount - 1;

	

		// 시작 페이지
		startPage = (int) ((this.currentPage - 1) / blockPage) * blockPage + 1;

		// 끝 페이지
		endPage = startPage + blockPage - 1;
		if (totalPage < endPage)
			endPage = totalPage;

		// 리스트에서에 출력번호
		number = totalCount - (this.currentPage - 1) * blockCount;
	}


	public SearchPageDTO(int currentPage, int totalCount,  String searchWord) {
		this(currentPage, totalCount);
		this.searchWord = searchWord;
	}
	
//	public SearchPageDTO(int currentPage, int totalCount, String searchWord, String[] bizTycdSelArr, String[] srchPolyBizSecdArr) {
//		this(currentPage, totalCount);
//		this.searchWord = searchWord;
//		this.bizTycdSelArr = bizTycdSelArr;
//		this.srchPolyBizSecdArr = srchPolyBizSecdArr;
//	}
	
	
	public SearchPageDTO(int currentPage, int totalCount, String searchWord, List<String> bizTycdSelList, List<String> srchPolyBizSecdList) {
		this(currentPage, totalCount);
		this.searchWord = searchWord;
		this.bizTycdSelList = bizTycdSelList;
		this.srchPolyBizSecdList = srchPolyBizSecdList;
	}

//
//	public String[] getBizTycdSelArr() {
//		return bizTycdSelArr;
//	}
//
//
//
//	public void setBizTycdSelArr(String[] bizTycdSelArr) {
//		this.bizTycdSelArr = bizTycdSelArr;
//	}
//
//
//
//	public String[] getSrchPolyBizSecdArr() {
//		return srchPolyBizSecdArr;
//	}
//
//
//
//	public void setSrchPolyBizSecdArr(String[] srchPolyBizSecdArr) {
//		this.srchPolyBizSecdArr = srchPolyBizSecdArr;
//	}



	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public int getBlockCount() {
		return blockCount;
	}

	public void setBlockCount(int blockCount) {
		this.blockCount = blockCount;
	}

	public int getBlockPage() {
		return blockPage;
	}

	public void setBlockPage(int blockPage) {
		this.blockPage = blockPage;
	}

	public int getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public int getStartRow() {
		return startRow;
	}

	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}

	public int getEndRow() {
		return endRow;
	}

	public void setEndRow(int endRow) {
		this.endRow = endRow;
	}

	public int getStartPage() {
		return startPage;
	}

	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}

	public int getEndPage() {
		return endPage;
	}

	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}



	public String getSearchWord() {
		return searchWord;
	}

	public void setSearchWord(String searchWord) {
		this.searchWord = searchWord;
	}

}
