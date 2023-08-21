package com.example.youth.policy.service;

import java.io.File;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.youth.policy.dao.PolicyDAO;
import com.example.youth.policy.dto.PolicyDTO;
import com.example.youth.policy.dto.PolicyPageDTO;
import com.example.youth.policy.search.dto.SearchPageDTO;
import com.example.youth.policy.view.dto.ViewDTO;

@Service
public class PolicyServiceImp implements PolicyService {
	
	@Autowired
	private PolicyDAO policyDao;
	
	public PolicyServiceImp() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public void insertProcess(PolicyDTO dto) {
		// TODO Auto-generated method stub
		policyDao.save(dto);
	}

	@Override
	public String getPolicyIdProcess(String policyId) {
		return policyDao.getPolicyID(policyId);
	}

	@Override
	public List<PolicyDTO> listProcess(PolicyPageDTO pv) {
		// TODO Auto-generated method stub
		return policyDao.list(pv);
	}

	@Override
	public int countProcess() {
		// TODO Auto-generated method stub
		return policyDao.count();
	}

	@Override
	public void updateProcess(PolicyDTO dto, String urlpath) {
		String filename = dto.getPolicyImages();
		
		//수정할 파일이 있으면
		if(filename != null) {
			
			String path = policyDao.getFile(dto.getPolicyKeynum());
			//기본 첨부파일이 있으면
			if(path != null) {
				File file = new File(urlpath, path);
				file.delete();
			}
		}
		policyDao.update(dto);
		
	}

	@Override
	public PolicyDTO contentProcess(String policyId) {
//		policyDao.readCount(policyKeynum);
		return policyDao.content(policyId);
	}

	@Override
	public void deleteProcess(int policyKeynum, String urlpath) {
		String path = policyDao.getFile(policyKeynum);
		if(path!= null) {
			File file = new File(urlpath, path);
			file.delete();
		}
		policyDao.delete(policyKeynum);
		
	}

	@Override
	public void deleteFileProcess(int policyKeynum, String urlpath) {
		String path = policyDao.getFile(policyKeynum);
		if(path!= null) {
			File file = new File(urlpath, path);
			file.delete();
		}
		policyDao.deleteFile(policyKeynum);
	}

	@Override
	public void viewInsertProcess(String policyId) {
		// TODO Auto-generated method stub
		policyDao.viewSave(policyId);
	}

	@Override
	public void viewCountProcess(ViewDTO pv) {
		// TODO Auto-generated method stub
		policyDao.viewCount(pv);
	}

	@Override
	public String getPolicyKeynumFromViewProcess(String policyId) {
		// TODO Auto-generated method stub
		return policyDao.getPolicyKeynumFromView(policyId);
	}

	@Override
	public ViewDTO getViewDataProcess(String policyId) {
		// TODO Auto-generated method stub
		return policyDao.getViewData(policyId);
	}
	@Override
	public List<PolicyDTO> searchListProcess(PolicyPageDTO pv) {
		// TODO Auto-generated method stub
		return policyDao.searchList(pv);
	}

	@Override
	public int countForSearchProcess(PolicyPageDTO pv) {
		// TODO Auto-generated method stub
		return policyDao.countForSearch(pv);
	}

	@Override
	public List<PolicyDTO> searchListFinalProcess(SearchPageDTO pv) {
		// TODO Auto-generated method stub
		return policyDao.searchListFinal(pv);
	}

	@Override
	public int countForSearchFinalProcess(SearchPageDTO pv) {
		// TODO Auto-generated method stub
		return policyDao.countForSearchFinal(pv);
	}

	@Override
	public void viewUpdateProcess(String policyId) {
		policyDao.viewUpdate(policyId);
	}

	@Override
	public List<PolicyDTO> mainlistProcess(PolicyPageDTO pv) {
		// TODO Auto-generated method stub
		return policyDao.mainlist(pv);
	}

	@Override
	public int countformainProcess() {
		// TODO Auto-generated method stub
		return policyDao.countformain();
	}

}
