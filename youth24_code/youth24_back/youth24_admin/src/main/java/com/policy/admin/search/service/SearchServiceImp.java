package com.policy.admin.search.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.policy.admin.search.dto.SearchDTO;

@Service
public class SearchServiceImp implements SearchService{
	
	@Autowired
	private SearchDTO searchDTO;
	
	public SearchServiceImp() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public void searchProcess(SearchDTO searchDTO) {
	}


	
	

}
