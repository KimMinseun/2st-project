package com.example.youth.policy.service;

import java.util.List;

import com.example.youth.policy.dto.PolicyDTO;
import com.example.youth.policy.dto.PolicyPageDTO;
import com.example.youth.policy.search.dto.SearchPageDTO;
import com.example.youth.policy.view.dto.ViewDTO;

public interface PolicyService {

	public void insertProcess(PolicyDTO dto);
	public String getPolicyIdProcess(String policyId);
	public List<PolicyDTO> listProcess(PolicyPageDTO pv);
	public int countProcess();
	public void updateProcess(PolicyDTO dto,String urlpath);
	public PolicyDTO contentProcess(String policyId);
	public void deleteProcess(int policyKeynum, String urlpath);
	public void deleteFileProcess(int policyKeynum, String urlpath);
	public void viewInsertProcess(String policyId);
	public void viewCountProcess(ViewDTO pv);
	public String getPolicyKeynumFromViewProcess(String policyId);
	public ViewDTO getViewDataProcess(String policyId);
	public List<PolicyDTO> searchListProcess(PolicyPageDTO pv);
	public int countForSearchProcess(PolicyPageDTO pv);
	public List<PolicyDTO> searchListFinalProcess(SearchPageDTO pv);
	public int countForSearchFinalProcess(SearchPageDTO pv);
	public void viewUpdateProcess(String policyId);
	public List<PolicyDTO> mainlistProcess(PolicyPageDTO pv);
	public int countformainProcess();
}
