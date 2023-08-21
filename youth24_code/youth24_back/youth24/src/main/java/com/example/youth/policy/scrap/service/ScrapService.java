package com.example.youth.policy.scrap.service;

import java.util.List;

import com.example.youth.policy.dto.PolicyDTO;
import com.example.youth.policy.dto.PolicyPageDTO;
import com.example.youth.policy.scrap.dto.ScrapDTO;
import com.example.youth.policy.scrap.dto.ScrapPageDTO;

public interface ScrapService {
	public int countProcess(int userKeynum);
	public List<ScrapDTO> listProcess(ScrapPageDTO pv);
	public void saveProcess(ScrapDTO dto);
	public void deleteProcess(String policyId, int userKeynum);
	public ScrapDTO getPolicyKeynumProcess(ScrapDTO dto);
	public int checklistProcess(String policyId, int userKeynum);
}
