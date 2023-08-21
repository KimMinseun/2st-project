package com.example.youth.policy.scrap.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.youth.policy.dto.PolicyDTO;
import com.example.youth.policy.dto.PolicyPageDTO;
import com.example.youth.policy.scrap.dao.ScrapDAO;
import com.example.youth.policy.scrap.dto.ScrapDTO;
import com.example.youth.policy.scrap.dto.ScrapPageDTO;

@Service
public class ScrapServiceImp implements ScrapService {
	@Autowired
	ScrapDAO scrapDao;
	
	public ScrapServiceImp() {
		// TODO Auto-generated constructor stub
	}
	

	@Override
	public int countProcess(int userKeynum) {
		// TODO Auto-generated method stub
		return scrapDao.count(userKeynum);
	}

	@Override
	public List<ScrapDTO> listProcess(ScrapPageDTO pv) {
		// TODO Auto-generated method stub
		return scrapDao.list(pv);
	}

	@Override
	public void saveProcess(ScrapDTO dto) {
		scrapDao.save(dto);
		scrapDao.scrapCount(dto.getPolicyId());
		
	}


	@Override
	public void deleteProcess(String policyId, int userKeynum) {
		scrapDao.scrapCountMinus(policyId);
		scrapDao.delete(policyId,userKeynum);
		
	}


	@Override
	public ScrapDTO getPolicyKeynumProcess(ScrapDTO dto) {
		// TODO Auto-generated method stub
		return scrapDao.getPolicyKeynum(dto);
	}


	@Override
	public int checklistProcess(String policyId, int userKeynum) {
		// TODO Auto-generated method stub
		return scrapDao.checklist(policyId, userKeynum);
	}




}

