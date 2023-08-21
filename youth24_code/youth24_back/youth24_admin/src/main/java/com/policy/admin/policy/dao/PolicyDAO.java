package com.policy.admin.policy.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.policy.admin.policy.dto.PolicyDTO;
import com.policy.admin.policy.dto.PolicyPageDTO;


@Mapper
@Repository
public interface PolicyDAO {
	public void save(PolicyDTO dto);
	public String getPolicyID(String policyId);
	public List<PolicyDTO> list(PolicyPageDTO pv);
	public List<PolicyDTO> searchList(PolicyPageDTO pv);
	public int count();
	public int countForSearch(PolicyPageDTO pv);
	public void update(PolicyDTO dto);
	public PolicyDTO content(int policyKeynum);
	public void readCount(int num);
	public String getFile(int policyKeynum);
	public void delete(int policyKeynum);
	public void deleteFile(int policyKeynum);
	public void viewSave(String policyId);
	public void viewUpdate(String policyId);

}
