package com.policy.admin.search.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.policy.admin.policy.common.exception.TotalCntZeroException;
import com.policy.admin.policy.dto.PolicyDTO;
import com.policy.admin.search.dto.SearchDTO;
import com.policy.admin.search.dto.SearchPageDTO;
import com.policy.admin.search.service.SearchService;

@CrossOrigin("*")
@RestController
public class SearchController {
	@Autowired
	private SearchPageDTO pdto;
	
	@Autowired
	private SearchDTO dto;
	
	@Autowired
	private SearchService service;
	
	private int currentPage;
	
	@Value("${youthPolicy-admin-key}")
	private String apiKey;
	
	
	// api 키워드, 지역 검색하기
    // http://localhost:8090/policy/search/1?query=자격증&srchPolyBizSecd=003002001
    @GetMapping(value = "policy/search/{currentPage}")
    public Map<String, Object> searchGetExecute(@PathVariable("currentPage") int currentPage, @RequestParam(required = false) String query, @RequestParam(required = false) String srchPolyBizSecd, SearchPageDTO pv) {
        Map<String, Object> map = new HashMap<>();
        List<PolicyDTO> result = new ArrayList<>();
        
        try {

        	System.out.println(currentPage);
        	System.out.println(query);
        	System.out.println(srchPolyBizSecd);
        	JSONObject empsInfo = apiGetSearchExecute(currentPage, query, srchPolyBizSecd);
            
        	System.out.println("empsInfo" + empsInfo.toString());
        	
            System.out.println("totalCnt"+empsInfo.get("totalCnt"));
            //정책 상세리스트만 파싱
            int totalRecord = (int)empsInfo.get("totalCnt");
            
            if(totalRecord == 1) {
            	JSONObject emp = empsInfo.getJSONObject("emp");
                System.out.println("--------------jsonList---------------");
                //[{"polyBizSecd":"003002002","polyBizSjnm":"취업연수생 고용사업","splzRlmRqisCn":"저소득층, 취약계층 우대","plcyTpNm":"취업지원",
                System.out.println(emp);
                PolicyDTO dto = makeDto(emp);
                result.add(dto);
               
            }else {
            JSONArray empList = empsInfo.getJSONArray("emp");
           
            System.out.println("--------------search---------------");
            //[{"polyBizSecd":"003002002","polyBizSjnm":"취업연수생 고용사업","splzRlmRqisCn":"저소득층, 취약계층 우대","plcyTpNm":"취업지원",
            System.out.println(empList);
          
            
            //10
            //System.out.println(empList.length());
            
            for (Object o : empList) {
                JSONObject emp = (JSONObject) o;
                result.add(makeDto(emp));
            }
            }
            
            if(totalRecord >=1) {
    			if(pv.getCurrentPage() == 0)
    				this.currentPage =currentPage;
    			else
    				this.currentPage = pv.getCurrentPage();
    			
    			this.pdto = new SearchPageDTO(this.currentPage, totalRecord);
    			
    			map.put("aList", result);
    			map.put("pv", this.pdto);
    		} else {
    			throw new TotalCntZeroException(query);
    		}
            
        } catch (JSONException e) {
        	e.getMessage();
        }

        return map;
    }
	
	//open api xml -> jsonObject 로 변환메서드
	public JSONObject apiGetSearchExecute(int currentPage, String query, String srchPolyBizSecd) {
		try {
			
			String url = "https://www.youthcenter.go.kr/opi/empList.do?pageIndex="+currentPage+"&display=10&bizTycdSel=004001&srchPolyBizSecd="+srchPolyBizSecd+"&query="+query+"&openApiVlak="+apiKey;	
			
			
			System.out.println(url);
			
			  // Spring boot에서 제공하는 RestTemplate
            RestTemplate restTemplate = new RestTemplate();
            
            // api호출하여 결과를 가져오기
            String response = restTemplate.getForObject(url, String.class);

            // XML을 JSON Object로 변환하기
            JSONObject jobj = XML.toJSONObject(response);
            //System.out.println("--------------jobj.toString---------------");
            //{"empsInfo":{"totalCnt":537,"pageIndex":1,"emp":[{"polyBizSecd":"003002002","polyBizSjnm":"취업연수생 고용사업","splzRlmRqisCn":"저소득층, 취약계층 우대"
            //System.out.println(jobj.toString());
            
            //전체 api 파싱
            JSONObject empsInfo = jobj.getJSONObject("empsInfo");
            //{"totalCnt":537,"pageIndex":1,"emp":[{"polyBizSecd":"003002002","polyBizSjnm":"취업연수생 고용사업",
            //System.out.println("empsInfo" + empsInfo.toString());
            
			return empsInfo;
           
		} catch(Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
    //open api PolicyDTO 객체로 반환
    public PolicyDTO makeDto(JSONObject emp) {
    	PolicyDTO dto = new PolicyDTO();
    	dto.setPolicyId((String)emp.get("bizId"));
    	dto.setPolicyBizTypeCode((String)emp.get("polyBizSecd"));
    	dto.setPolicyBizType((String)emp.get("polyBizTy"));
    	dto.setPolicyBizTypeName((String)emp.get("plcyTpNm"));
    	dto.setPolicyName((String)emp.get("polyBizSjnm"));
    	dto.setPolicyIntroduce((String)emp.get("polyItcnCn"));
    	dto.setPolicyVolume((String)emp.get("sporScvl"));
    	dto.setPolicyContent((String)emp.get("sporCn"));
    	dto.setPolicyAge((String)emp.get("ageInfo"));
    	dto.setPolicyEmpStatus((String)emp.get("empmSttsCn"));
    	dto.setPolicyEducation((String)emp.get("accrRqisCn"));
    	dto.setPolicyMajor((String)emp.get("majrRqisCn"));
    	dto.setPolicySplz((String)emp.get("splzRlmRqisCn"));
    	dto.setPolicyAgentName((String)emp.get("cnsgNmor"));
    	dto.setPolicyRequestPeriod((String)emp.get("rqutPrdCn"));
    	dto.setPolicyRequestProcess((String)emp.get("rqutProcCn"));
    	dto.setPolicyPrstnDtl((String)emp.get("jdgnPresCn"));
    	dto.setPolicyUrl((String)emp.get("rqutUrla"));
    	return dto;
    }

	// api 키워드, 지역 검색 후 더보기 용
    // http://localhost:8090/policy/search/1?query=자격증&srchPolyBizSecd=003002001
    @GetMapping(value = "policy/search2/{currentPage}")
    public Map<String, Object> search2GetExecute(@PathVariable("currentPage") int currentPage, @RequestParam(required = false) String query, @RequestParam(required = false) String srchPolyBizSecd, @RequestParam(required = false) String bizTycdSel, SearchPageDTO pv) {
        Map<String, Object> map = new HashMap<>();
        List<PolicyDTO> result = new ArrayList<>();
        
        try {

        	System.out.println(currentPage);
        	System.out.println(query);
        	System.out.println(srchPolyBizSecd);
        	System.out.println(bizTycdSel);
        	JSONObject empsInfo = apiGetSearchExecute2(currentPage, query, srchPolyBizSecd,bizTycdSel);
            
        	System.out.println("empsInfo" + empsInfo.toString());
        	
            System.out.println("totalCnt"+empsInfo.get("totalCnt"));
            //정책 상세리스트만 파싱
            int totalRecord = (int)empsInfo.get("totalCnt");
            
            if(totalRecord == 1) {
            	JSONObject emp = empsInfo.getJSONObject("emp");
                System.out.println("--------------jsonList2---------------");
                //[{"polyBizSecd":"003002002","polyBizSjnm":"취업연수생 고용사업","splzRlmRqisCn":"저소득층, 취약계층 우대","plcyTpNm":"취업지원",
                System.out.println(emp);
                PolicyDTO dto = makeDto(emp);
                result.add(dto);
               
            }else {
            JSONArray empList = empsInfo.getJSONArray("emp");
           
            System.out.println("--------------search2---------------");
            //[{"polyBizSecd":"003002002","polyBizSjnm":"취업연수생 고용사업","splzRlmRqisCn":"저소득층, 취약계층 우대","plcyTpNm":"취업지원",
            System.out.println(empList);
          
            
            //10
            //System.out.println(empList.length());
            
            for (Object o : empList) {
                JSONObject emp = (JSONObject) o;
                result.add(makeDto(emp));
            }
            }
            
            if(totalRecord >=1) {
    			if(pv.getCurrentPage() == 0)
    				this.currentPage =currentPage;
    			else
    				this.currentPage = pv.getCurrentPage();
    			
    			this.pdto = new SearchPageDTO(this.currentPage, totalRecord);
    			
    			map.put("aList", result);
    			map.put("pv", this.pdto);
    		} else {
    			throw new TotalCntZeroException(query);
    		}
            
        } catch (JSONException e) {
        	e.getMessage();
        }

        return map;
    }
    
  //open api xml -> jsonObject 로 변환메서드(더보기용)
  	public JSONObject apiGetSearchExecute2(int currentPage, String query, String srchPolyBizSecd, String bizTycdSel) {
  		try {
  			
  			String url = "https://www.youthcenter.go.kr/opi/empList.do?pageIndex="+currentPage+"&display=10&bizTycdSel=004001&srchPolyBizSecd="+srchPolyBizSecd+"&query="+query+"&bizTycdSel="+bizTycdSel+"&openApiVlak="+apiKey;	
  			
  			
  			System.out.println(url);
  			
  			  // Spring boot에서 제공하는 RestTemplate
              RestTemplate restTemplate = new RestTemplate();
              
              // api호출하여 결과를 가져오기
              String response = restTemplate.getForObject(url, String.class);

              // XML을 JSON Object로 변환하기
              JSONObject jobj = XML.toJSONObject(response);
              //System.out.println("--------------jobj.toString---------------");
              //{"empsInfo":{"totalCnt":537,"pageIndex":1,"emp":[{"polyBizSecd":"003002002","polyBizSjnm":"취업연수생 고용사업","splzRlmRqisCn":"저소득층, 취약계층 우대"
              //System.out.println(jobj.toString());
              
              //전체 api 파싱
              JSONObject empsInfo = jobj.getJSONObject("empsInfo");
              //{"totalCnt":537,"pageIndex":1,"emp":[{"polyBizSecd":"003002002","polyBizSjnm":"취업연수생 고용사업",
              //System.out.println("empsInfo" + empsInfo.toString());
              
  			return empsInfo;
             
  		} catch(Exception e) {
  			e.printStackTrace();
  		}
  		return null;
  	}
  	
	
    
}
