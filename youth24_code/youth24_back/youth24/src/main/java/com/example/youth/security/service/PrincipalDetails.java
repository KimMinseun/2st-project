package com.example.youth.security.service;

import java.util.ArrayList;
import java.util.Collection;

//import java.util.ArrayList;
//import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.example.youth.member.dto.MembersDTO;


public class PrincipalDetails implements UserDetails{

	
	private MembersDTO membersDTO;
	//private AdminDTO adminDTO;
	
	
	public PrincipalDetails() {
		
	}
	
	public PrincipalDetails(MembersDTO membersDTO) {
		this.membersDTO = membersDTO;
	}
	

	public MembersDTO getMembersDTO() {
		return membersDTO;
	}
	
//	public AdminDTO getAdminDTO() {
//		return adminDTO;
//	}
	
	

	// 권한 목록을 리턴
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		Collection<GrantedAuthority> collect = new ArrayList<GrantedAuthority>();
	    collect.add(new GrantedAuthority() {
	        @Override
	        public String getAuthority() {
	            return membersDTO.getAuthRole();
	        }
	    });
//	    collect.add(new GrantedAuthority() {
//	        @Override
//	        public String getAuthority() {
//	            return adminDTO.getAuthRole();
//	        }
//	    });
	    return collect;
	}
	
//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//
//		
//		return null;
//	}	

	@Override
	public String getPassword() {
		return membersDTO.getUserPassword();
		//return isAdmin ? adminDTO.getAdminPassword() : membersDTO.getUserPassword();
	}

	@Override
	public String getUsername() {
		return membersDTO.getUserId();
		//return isAdmin ? adminDTO.getAdminId() : membersDTO.getUserId();
	}

	//계정만료여부 리턴 - true(만료 안 됨)
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	//계정의 잠김여부 리턴 - true(잠기지 않음)
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	//계정의 잠김여부 리턴 - true(잠기지 않음)
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	//계정의 활성화 여부 리턴 - true(활성화 됨)
	@Override
	public boolean isEnabled() {
		return true;
	}

	
	
}//end class
