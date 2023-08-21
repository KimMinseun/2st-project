package com.policy.admin.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.policy.admin.admin.dao.AdminDAO;
import com.policy.admin.admin.dto.AdminDTO;

@Service
public class PrincipalDetailsService implements UserDetailsService{
			
		@Autowired
		private AdminDAO adminDAO;
		
		public PrincipalDetailsService() {
        System.out.println("==============Admin===============");
		}
		
		@Override
		public UserDetails loadUserByUsername(String adminId) throws UsernameNotFoundException {
			//System.out.println("loadUserByUsername : " + memberEmail);
			
			AdminDTO adminEntity = adminDAO.adminInfo(adminId);
			
			System.out.println(adminEntity.getAdminId());
		    System.out.println(adminEntity.getAdminPassword());
			
			
			if(adminEntity == null) {
				throw new UsernameNotFoundException(adminId);
			}
			
			return new PrincipalDetails(adminEntity);
		}
		
		
	}