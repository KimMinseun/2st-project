package com.example.youth.policy.scrap.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.example.youth.policy.scrap.dto.ScrapDTO;
import com.example.youth.policy.scrap.dto.ScrapPageDTO;


@Mapper
@Repository
public interface ScrapDAO {
	public int count(int userKeynum);
	public List<ScrapDTO> list(ScrapPageDTO pv);
	public void save(ScrapDTO dto);
	public void scrapCount(String policyId);
	public void scrapCountMinus(String policyId);
	public void delete(@Param("policyId")String policyId,@Param("userKeynum") int userKeynum);
	public ScrapDTO getPolicyKeynum(ScrapDTO dto);
	public int checklist(@Param("policyId")String policyId,@Param("userKeynum") int userKeynum);

}
