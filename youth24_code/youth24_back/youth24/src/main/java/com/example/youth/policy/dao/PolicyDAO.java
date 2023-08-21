package com.example.youth.policy.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import com.example.youth.policy.dto.PolicyDTO;
import com.example.youth.policy.dto.PolicyPageDTO;
import com.example.youth.policy.search.dto.SearchPageDTO;
import com.example.youth.policy.view.dto.ViewDTO;

@Mapper
@Repository
public interface PolicyDAO {
	public void save(PolicyDTO dto);
	public String getPolicyID(String policyId);
	public List<PolicyDTO> list(PolicyPageDTO pv);
	public int count();
	public void update(PolicyDTO dto);
	public PolicyDTO content(String policyId);
	public void readCount(int num);
	public String getFile(int policyKeynum);
	public void delete(int policyKeynum);
	public void deleteFile(int policyKeynum);
	public void viewSave(String policyId);
	public void viewCount(ViewDTO pv);
	public String getPolicyKeynumFromView(String policyId);
	public ViewDTO getViewData(String policyId);
	public List<PolicyDTO> searchList(PolicyPageDTO pv);
	public int countForSearch(PolicyPageDTO pv);
	public List<PolicyDTO> searchListFinal(SearchPageDTO pv);
	public int countForSearchFinal(SearchPageDTO pv);
	public void viewUpdate(String policyId);
	public List<PolicyDTO> mainlist(PolicyPageDTO pv);
	public int countformain();

}
