package com.policy.admin.policy.service;

import java.util.List;

import com.policy.admin.policy.dto.PolicyDTO;
import com.policy.admin.policy.dto.PolicyPageDTO;


public interface PolicyService {
	public void insertProcess(PolicyDTO dto);
	public String getPolicyIdProcess(String policyId);
	public List<PolicyDTO> listProcess(PolicyPageDTO pv);
	public List<PolicyDTO> searchListProcess(PolicyPageDTO pv);
	public int countProcess();
	public int countForSearchProcess(PolicyPageDTO pv);
	public void updateProcess(PolicyDTO dto,String urlpath);
	public PolicyDTO contentProcess(int policyKeynum);
	public void deleteProcess(int policyKeynum, String urlpath);
	public void deleteFileProcess(int policyKeynum, String urlpath);
	public void viewInsertProcess(String policyId);
	public void viewUpdateProcess(String policyId);

}
