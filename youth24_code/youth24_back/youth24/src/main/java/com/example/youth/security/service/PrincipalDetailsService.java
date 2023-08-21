package com.example.youth.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.youth.member.dao.MembersDAO;
import com.example.youth.member.dto.MembersDTO;

@Service
public class PrincipalDetailsService implements UserDetailsService {
   
   @Autowired
   private MembersDAO membersDAO;
   
   
   public PrincipalDetailsService() {
      
   }
   
   //1. AuthenticationProvider에서 loadUserByname(String username)을 호출한다.
   //2. loadUserByname(String username)에서는 DB에서 username에 해당하는 데이터를 검색해서 UserDetails에 담아서
   //3. AuthenticationProvider에서 UserDetails 받아서 Authentication에 저장을 함으로써 결국 Security Session에 
   
   @Override
   public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
      //System.out.println("loadUserByUsername: "+ memberEmail); 

	      MembersDTO userEntity = membersDAO.userInfo(userId);
	      //System.out.println("userEntity: "+userEntity.getMemberName()); //userEntity: 정정정
	      System.out.println(userEntity.getUserId());
	      System.out.println(userEntity.getUserPassword());
	      
	      
	      if(userEntity == null) {
	         throw new UsernameNotFoundException(userId);
	      }
	      return new PrincipalDetails(userEntity);
   }

	   	   
      
	   
}//end class