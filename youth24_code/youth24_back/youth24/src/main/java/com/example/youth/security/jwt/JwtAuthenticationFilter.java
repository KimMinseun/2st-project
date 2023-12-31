package com.example.youth.security.jwt;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.youth.member.dto.MembersDTO;
import com.example.youth.security.service.PrincipalDetails;
import com.fasterxml.jackson.databind.ObjectMapper;

//Authentication (인증)
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
   
   private AuthenticationManager authManager;
   
   public JwtAuthenticationFilter(AuthenticationManager authManager) {
      this.authManager = authManager;
   }
   
   // http://localhost:8090/login 요청을 하면 실행되는 함수
   @Override
   public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
         throws AuthenticationException {
      
      System.out.println("JwtAuthenticationFilter => login 요청 처리를 시작함");
      
      try {
         ObjectMapper om = new ObjectMapper();
         MembersDTO user = om.readValue(request.getInputStream(), MembersDTO.class); //request보내준 객체값을 읽어와서 담기
         System.out.printf("userId : %s, userPassword : %s\n", user.getUserId(), user.getUserPassword());
         
         UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(user.getUserId(), user.getUserPassword());
         System.out.println(authenticationToken.toString());
         
         Authentication authentication = authManager.authenticate(authenticationToken);
         System.out.println("authencation" + authentication.getPrincipal());
         
         PrincipalDetails principalDetails = (PrincipalDetails)authentication.getPrincipal();
         System.out.printf("로그인 완료됨(인증) : %s %s\n", principalDetails.getUsername(), principalDetails.getPassword());
         
         return authentication;
      } catch (IOException e) {
         e.printStackTrace();
      } 
      
      return null;
   }
   
   //attemptAuthentication() 실행 후 인증이 정상적으로 완료되면 실행된다.
   //여기에서 JWT 토큰을 만들어서 request 요청한 사용자에게 JWT 토큰을 response 해준다.
   @Override
   protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
         Authentication authResult) throws IOException, ServletException {
      System.out.println("successfulAuthentication 실행됨");
      
      PrincipalDetails principalDetails = (PrincipalDetails)authResult.getPrincipal();
      
      String jwtToken = JWT.create()
            .withSubject("mycors")
            .withExpiresAt(new Date(System.currentTimeMillis() + (60 * 1000 * 60 * 1L))) //만료시간 3분
            .withClaim("username", principalDetails.getMembersDTO().getUserName())     //회원 이름
            .withClaim("authRole", principalDetails.getMembersDTO().getAuthRole())       //회원 권한
            .withClaim("userId", principalDetails.getMembersDTO().getUserId()) //회원 메일
            .sign(Algorithm.HMAC512("mySecurityCos")); //signature을 생성하기 위한 security
      
      System.out.println("jwtToken: " + jwtToken);
      
      //response 응답 헤더에 jwtToken 추가
      response.addHeader("Authorization", "Bearer " + jwtToken);
      
      final Map<String, Object> body = new HashMap<String, Object>();
      body.put("userName", principalDetails.getMembersDTO().getUserName());
      body.put("userId", principalDetails.getMembersDTO().getUserId());
      body.put("authRole", principalDetails.getMembersDTO().getAuthRole());
      body.put("userBirthdate", principalDetails.getMembersDTO().getUserBirthdate());
      body.put("userPassword", principalDetails.getMembersDTO().getUserPassword());
      body.put("userPhone", principalDetails.getMembersDTO().getUserPhone());
      body.put("userGender", principalDetails.getMembersDTO().getUserGender());
      body.put("userAddress",  principalDetails.getMembersDTO().getUserAddress());
      body.put("userEducation", principalDetails.getMembersDTO().getUserEducation());
      body.put("userEmpstatus", principalDetails.getMembersDTO().getUserEmpstatus());
      body.put("userKeynum", principalDetails.getMembersDTO().getUserKeyNum());
      
      ObjectMapper mapper = new ObjectMapper();
      mapper.writeValue(response.getOutputStream(), body);
            
      super.successfulAuthentication(request, response, chain, authResult);
   }
   
   @Override
   protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
         AuthenticationException failed) throws IOException, ServletException {
      System.out.println("unsuccessfulAuthentication 실행됨");
      response.setStatus(HttpStatus.UNAUTHORIZED.value());
      response.setContentType(MediaType.APPLICATION_JSON_VALUE);
      
      Map<String, Object> body = new LinkedHashMap<>();
      
      body.put("code", HttpStatus.UNAUTHORIZED.value());
      body.put("error", failed.getMessage());
      
      new ObjectMapper().writeValue(response.getOutputStream(), body);
   }

}//end class











