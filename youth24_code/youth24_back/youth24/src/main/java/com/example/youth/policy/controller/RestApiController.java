package com.example.youth.policy.controller;

import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import com.example.youth.member.dto.AuthInfo;
import com.example.youth.policy.dto.PolicyDTO;
import com.example.youth.policy.dto.PolicyPageDTO;
import com.example.youth.policy.scrap.service.ScrapService;
import com.example.youth.policy.search.dto.SearchPageDTO;
import com.example.youth.policy.service.PolicyService;
import com.example.youth.policy.view.dto.ViewDTO;
import com.example.youth.security.service.PrincipalDetails;

@CrossOrigin("*")
@RestController
public class RestApiController {
	@Autowired
	private PolicyPageDTO pdto;
	@Autowired
	private SearchPageDTO sdto;
	
	@Autowired
	private PolicyDTO dto;
	
	@Autowired
	private PolicyService service;
	
	@Autowired
	private ScrapService scrapService;
	
	private int currentPage;
	
	@Value("${youthPolicy-admin-key}")
	private String apiKey;

	
	@Value("${spring.servlet.multipart.location}")
	private String filePath;
	

	// api 전체 리스트 받아오기
    // http://localhost:8090/policy/list/1
    @GetMapping(value = "/policyapi/list/{currentPage}")
    public Map<String, Object> policyAllGetExecute(@PathVariable("currentPage") int currentPage, PolicyPageDTO pv) {
        Map<String, Object> map = new HashMap<>();
        
        try {

        	JSONObject empsInfo = apiGetExecute(currentPage);
            
        	System.out.println("empsInfo" + empsInfo.toString());
        	
            System.out.println(empsInfo.get("totalCnt"));
            //정책 상세리스트만 파싱
            JSONArray empList = empsInfo.getJSONArray("emp");
            System.out.println("--------------jsonList---------------");
            //[{"polyBizSecd":"003002002","polyBizSjnm":"취업연수생 고용사업","splzRlmRqisCn":"저소득층, 취약계층 우대","plcyTpNm":"취업지원",
            System.out.println(empList);
            
            List<PolicyDTO> result = new ArrayList<>();
            
            int totalRecord = (int)empsInfo.get("totalCnt");
            //10
            //System.out.println(empList.length());
            
            for (Object o : empList) {
                JSONObject emp = (JSONObject) o;
                PolicyDTO dto = makeDto(emp);
                result.add(dto);
            	String pIdOfDTO =dto.getPolicyId();
    	        String pIdOfDB = service.getPolicyIdProcess(pIdOfDTO);
    	        if(!pIdOfDTO.equals(pIdOfDB)) {
//    	        	service.insertProcess(dto);
    	        }
              
            }
            
            if(totalRecord >=1) {
    			if(pv.getCurrentPage() == 0)
    				this.currentPage =currentPage;
    			else
    				this.currentPage = pv.getCurrentPage();
    			
    			this.pdto = new PolicyPageDTO(this.currentPage, totalRecord);
    			
    			map.put("aList", result);
    			map.put("pv", this.pdto);
    		
    		}
       
        } catch (Exception e) {
            e.printStackTrace();
        }

        return map;
    }
    
    
    //정책 상세보기
	@GetMapping("/policyapi/view/{policyId}")
	public PolicyDTO viewExecute(@PathVariable("policyId") String policyId) {
		try {
			int currentPage = 1;
			JSONObject empsInfo = apiGetExecute(currentPage, policyId);
            JSONObject emp = empsInfo.getJSONObject("emp");
            System.out.println("--------------jsonList---------------");
            //[{"polyBizSecd":"003002002","polyBizSjnm":"취업연수생 고용사업","splzRlmRqisCn":"저소득층, 취약계층 우대","plcyTpNm":"취업지원",
            System.out.println(emp);
            
            PolicyDTO result = makeDto(emp);
            
//            System.out.println("result" + result.getPolicyAgentName()+result.getPolicyMajor());
           return result;
      
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
   
	}
	
	
	// 정책 상세 조회 메서드(open api xml -> jsonObject)
	public JSONObject apiGetExecute(int currentPage, String policyId) {
		try {
			
				 // 소셜 로그인 , 공공api 등의 url
	        String url = "https://www.youthcenter.go.kr/opi/empList.do?pageIndex="+currentPage+"&display=10&srchPolicyId="+policyId+"&openApiVlak="+apiKey;
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
//    	System.out.println("makeDTO"+dto.getPolicyId());
    	return dto;
    }
    
    

    //정책정보 등록여부 확인
    @PostMapping("/policy/write/idCheck")
    public String checkPolicyIdExcute(@RequestBody PolicyDTO dto) {
        String pIdOfDB = service.getPolicyIdProcess(dto.getPolicyId());
//        System.out.println("pIdOfDB : " + pIdOfDB);
//        System.out.println("policyId : "+ dto.getPolicyId());
        if(!dto.getPolicyId().equals(pIdOfDB)) {
        	return "ok";
        }else return "no";
    }
    
    
    
  //정책 	전체 조회 메서드(open api xml -> jsonObject)
  	public JSONObject apiGetExecute(int currentPage) {
  		try {
  			
  			String url = "https://www.youthcenter.go.kr/opi/empList.do?pageIndex="+currentPage+"&display=10&bizTycdSel=&srchPolyBizSecd=&openApiVlak="+apiKey;
  			
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
              System.out.println("empsInfo" + empsInfo.toString());
              
  			return empsInfo;
             
  		} catch(Exception e) {
  			e.printStackTrace();
  		}
  		return null;
  	}
  	

	// DB 내 정책 전체 리스트 받아오기
    // http://localhost:8090/policyDB/list/1
    @GetMapping(value = "/policyDB/list/{currentPage}")
    public Map<String, Object> policyDBAllGetExecute(@PathVariable("currentPage") int currentPage, PolicyPageDTO pv) {
        Map<String, Object> map = new HashMap<>();
		int totalRecord = service.countProcess();
        if(totalRecord >=1) {
			if(pv.getCurrentPage() == 0)
				this.currentPage =currentPage;
			else {
				this.currentPage = pv.getCurrentPage();
			}
				
			this.pdto = new PolicyPageDTO(this.currentPage, totalRecord);
			List<PolicyDTO> dtolist = service.listProcess(this.pdto);
			map.put("aList", service.listProcess(this.pdto));
			map.put("pv", this.pdto);
        }

        return map;
    }

	
	
    
    //DB 정책정보 상세보기(로그인)
	@GetMapping("/policy/view/{policyId}/{userKeynum}")
	public PolicyDTO viewDBExecute(@PathVariable("policyId") String policyId,@PathVariable("userKeynum") int userKeynum){
		String pkeyOfDB = service.getPolicyKeynumFromViewProcess(policyId);
//       System.out.println("pkeyOfDB : " + Integer.toString(pkeyOfDB).indexOf("null아님"));
       System.out.println("policyKeynum:" + policyId);
//       try {
//    	   Integer.toString(policyKeynum).equals(Integer.toString(pkeyOfDB));
//       } catch(NullPointerException e){
//    	   service.viewInsertProcess(policyKeynum);
//       }
       	PolicyDTO dto = service.contentProcess(policyId);
       	dto.setScrapCount(scrapService.checklistProcess(dto.getPolicyId(),userKeynum));
    	return dto;
	}
	
	   //DB 정책정보 상세보기(비로그인)
		@GetMapping("/policy/view/{policyId}")
		public PolicyDTO viewDBExecute(@PathVariable("policyId") String policyId){
			String pkeyOfDB = service.getPolicyKeynumFromViewProcess(policyId);
//	       System.out.println("pkeyOfDB : " + Integer.toString(pkeyOfDB).indexOf("null아님"));
	       System.out.println("policyKeynum:" + policyId);
//	       try {
//	    	   Integer.toString(policyKeynum).equals(Integer.toString(pkeyOfDB));
//	       } catch(NullPointerException e){
//	    	   service.viewInsertProcess(policyKeynum);
//	       }
	       
	    	return service.contentProcess(policyId);
		}
    
    //DB 정책 통계 정보 보기
	@GetMapping("/policy/view2/{policyId}")
	public ViewDTO viewDataExecute(@PathVariable("policyId") String policyId){
		service.viewUpdateProcess(policyId);
    	return service.getViewDataProcess(policyId);
	}
	
	//정책 카운트 올리기
	@PutMapping("/policy/viewCount")
	public void viewCountExecute(ViewDTO dto) {
		System.out.println(dto.getUserId());
		System.out.println(dto.getPolicyId());
		 service.viewCountProcess(dto);
	}
	
	
	
    //정책 수정용 데이터 불러오기 URL
	@GetMapping("/policy/viewUP/{policyId}")
	public PolicyDTO viewUPExecute(@PathVariable("policyId") String policyId) {
		try {
			int currentPage = 1;
			JSONObject empsInfo = apiGetExecute(currentPage, policyId);
            JSONObject emp = empsInfo.getJSONObject("emp");
            System.out.println("--------------jsonList---------------");
            //[{"polyBizSecd":"003002002","polyBizSjnm":"취업연수생 고용사업","splzRlmRqisCn":"저소득층, 취약계층 우대","plcyTpNm":"취업지원",
            System.out.println(emp);
            
            PolicyDTO result = makeDto(emp);
            
//            System.out.println("result" + result.getPolicyAgentName()+result.getPolicyMajor());
           return result;
      
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
   
	}
	
	// DB 저장된 파일 정보 삭제
	@PutMapping("/policyDB/fileDelete/{policyKeynum}")
	public void deleteFileExecute(@PathVariable("policyKeynum") int policyKeynum, HttpServletRequest request) throws IllegalStateException, IOException {
		service.deleteFileProcess(policyKeynum, filePath);
	}
	
   // 파일다운
	@GetMapping("/policy/download/{filename}")
	public ResponseEntity<Resource> downloadExecute(@PathVariable("filename") String filename) throws IOException {
		String fileName = filename.substring(filename.indexOf("_") + 1);

		// 파일명이 한글일때 인코딩 작업을 한다.
		String str = URLEncoder.encode(fileName, "UTF-8");

		// 원본파일명에서 공백이 있을 때, +로 표시가 되므로 공백을 처리해줌
		str = str.replaceAll("//+", "%20");
		Path path = Paths.get(filePath + "//" + filename);

		// 인터페이스 리소스로 임포트 하기
		Resource resource = new InputStreamResource(Files.newInputStream(path));
		System.out.println("resource:" + resource.getFilename());

		// 여러개 나오면 스프링 프레임워크에 나오는걸 선택하라고 임포트에서
		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_TYPE, "application/octet-stream")
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename="+str+";")
				.body(resource);

	}
	
	   // 파일보여주기
		@GetMapping("/policy/show/{filename}")
		public ResponseEntity<Resource> showExecute(@PathVariable("filename") String filename) throws IOException {
			String fileName = filename.substring(filename.indexOf("_") + 1);

			// 파일명이 한글일때 인코딩 작업을 한다.
			String str = URLEncoder.encode(fileName, "UTF-8");

			// 원본파일명에서 공백이 있을 때, +로 표시가 되므로 공백을 처리해줌
			str = str.replaceAll("//+", "%20");
			Path path = Paths.get(filePath + "//" + filename);
			HttpHeaders header = new HttpHeaders();
			
			// 인터페이스 리소스로 임포트 하기
			Resource resource = new InputStreamResource(Files.newInputStream(path));
			System.out.println("resource:" + resource.getFilename());
			header.add("Content-Type", Files.probeContentType(path));

			// 여러개 나오면 스프링 프레임워크에 나오는걸 선택하라고 임포트에서
			return new ResponseEntity<Resource>(resource,header,HttpStatus.OK);

		}
		
	// 삭제
	@DeleteMapping("/policyDB/delete/{policyKeynum}")
	public void deleteExecute(@PathVariable("policyKeynum") int policyKeynum, HttpServletRequest request) {
		service.deleteProcess(policyKeynum, filePath);
	}
		
	// DB 내 정책 검색 리스트 받아오기
	//http://localhost:8090/policyDB/searchlist/1
    @GetMapping(value = "/policyDB/searchlist/{currentPage}")
    public Map<String, Object> policyDBSearchGetExecute(@PathVariable("currentPage") int currentPage, @RequestParam(required = false) String searchKey, @RequestParam(required = false) String searchWord,  PolicyPageDTO pv) {
        Map<String, Object> map = new HashMap<>();
        System.out.println("searchWord"+searchWord);
        pv.setSearchKey(searchKey);
        pv.setSearchWord(searchWord);
		int totalRecord = service.countForSearchProcess(pv);
        if(totalRecord >=1) {
			if(pv.getCurrentPage() == 0)
				this.currentPage =currentPage;
			else {
				this.currentPage = pv.getCurrentPage();
			}
		
			this.pdto = new PolicyPageDTO(this.currentPage, totalRecord, searchKey, searchWord);
			List<PolicyDTO> dtolist = service.searchListProcess(this.pdto);
			map.put("aList",dtolist);
			map.put("pv", this.pdto);
        }

        return map;
    }

	// DB 내 정책 검색 리스트 받아오기(로그인)
	//http://localhost:8090/policy/1
    @ResponseBody
    @GetMapping(value = "/policy/{currentPage}/{userKeynum}")
    public Map<String, Object> policyDBSearchFinal2GetExecute(@PathVariable("currentPage") int currentPage, @RequestParam(required = false) String bizTycdSel, @RequestParam(required = false) String srchPolyBizSecd, @RequestParam(required = false) String searchWord,  SearchPageDTO pv, @PathVariable("userKeynum") int userKeynum) {
        Map<String, Object> map = new HashMap<>();
//	    	System.out.println(principal.getMembersDTO().getUserId());
        System.out.println("searchWord"+searchWord);
        System.out.println("srchPolyBizSecd"+srchPolyBizSecd);
        System.out.println("bizTycdSel"+bizTycdSel);
        
   
        String[] bizTycdSelArr = bizTycdSel.split(",");
        String[] srchPolyBizSecdArr = srchPolyBizSecd.split(",");
        
        List<String> bizTycdSelList = new ArrayList<String>(Arrays.asList(bizTycdSelArr));
        List<String> srchPolyBizSecdList = new ArrayList<String>(Arrays.asList(srchPolyBizSecdArr));
        
        for (int i=0; i < bizTycdSelArr.length; i++)
            System.out.println("bizTycdSelArr[" + i+ "]=" + bizTycdSelArr[i]);
        
        for (int i=0; i < srchPolyBizSecdArr.length; i++)
            System.out.println("srchPolyBizSecdArr[" + i+ "]=" + srchPolyBizSecdArr[i]);
  
        pv.setBizTycdSelList(bizTycdSelList);
        pv.setSrchPolyBizSecdList(srchPolyBizSecdList);
//	        pv.setSrchPolyBizSecdArr(srchPolyBizSecdArr);
//	        pv.setBizTycdSelArr(bizTycdSelArr);
        pv.setSearchWord(searchWord);
		int totalRecord = service.countForSearchFinalProcess(pv);
		System.out.println("totalRecord"+totalRecord);
        if(totalRecord >=1) {
			if(pv.getCurrentPage() == 0)
				this.currentPage =currentPage;
			else {
				this.currentPage = pv.getCurrentPage();
			}

			this.sdto = new SearchPageDTO(this.currentPage, totalRecord,  searchWord, bizTycdSelList, srchPolyBizSecdList);
			for(String item : bizTycdSelList) {
				System.out.println(item);
			}
			List<PolicyDTO> dtolist = service.searchListFinalProcess(this.sdto);
			for(PolicyDTO item : dtolist) {
				try {
					item.setScrapCount(scrapService.checklistProcess(item.getPolicyId(),userKeynum));
				} catch(Exception e) {
					System.out.println("userKeynum이 없음");
				}	
			}
			map.put("aList",dtolist);
			map.put("pv", this.sdto);
        }
        return map;
    }
	    
	// DB 내 정책 검색 리스트 받아오기(비로그인)
	//http://localhost:8090/policy/1
    @ResponseBody
    @GetMapping(value = "/policy/{currentPage}")
    public Map<String, Object> policyDBSearchFinalGetExecute(@PathVariable("currentPage") int currentPage, @RequestParam(required = false) String bizTycdSel, @RequestParam(required = false) String srchPolyBizSecd, @RequestParam(required = false) String searchWord,  SearchPageDTO pv) {
        Map<String, Object> map = new HashMap<>();
//	    	System.out.println(principal.getMembersDTO().getUserId());
        System.out.println("searchWord"+searchWord);
        System.out.println("srchPolyBizSecd"+srchPolyBizSecd);
        System.out.println("bizTycdSel"+bizTycdSel);
        
   
        String[] bizTycdSelArr = bizTycdSel.split(",");
        String[] srchPolyBizSecdArr = srchPolyBizSecd.split(",");
        
        List<String> bizTycdSelList = new ArrayList<String>(Arrays.asList(bizTycdSelArr));
        List<String> srchPolyBizSecdList = new ArrayList<String>(Arrays.asList(srchPolyBizSecdArr));
        
        for (int i=0; i < bizTycdSelArr.length; i++)
            System.out.println("bizTycdSelArr[" + i+ "]=" + bizTycdSelArr[i]);
        
        for (int i=0; i < srchPolyBizSecdArr.length; i++)
            System.out.println("srchPolyBizSecdArr[" + i+ "]=" + srchPolyBizSecdArr[i]);
  
        pv.setBizTycdSelList(bizTycdSelList);
        pv.setSrchPolyBizSecdList(srchPolyBizSecdList);
//	        pv.setSrchPolyBizSecdArr(srchPolyBizSecdArr);
//	        pv.setBizTycdSelArr(bizTycdSelArr);
        pv.setSearchWord(searchWord);
		int totalRecord = service.countForSearchFinalProcess(pv);
		System.out.println("totalRecord"+totalRecord);
        if(totalRecord >=1) {
			if(pv.getCurrentPage() == 0)
				this.currentPage =currentPage;
			else {
				this.currentPage = pv.getCurrentPage();
			}

			this.sdto = new SearchPageDTO(this.currentPage, totalRecord,  searchWord, bizTycdSelList, srchPolyBizSecdList);
			for(String item : bizTycdSelList) {
				System.out.println(item);
			}
			List<PolicyDTO> dtolist = service.searchListFinalProcess(this.sdto);
		
			map.put("aList",dtolist);
			map.put("pv", this.sdto);
        }
        return map;
    }
    

	// 메인정책 리스트 받아오기(로그인)
    // http://localhost:8090/policy/mainlist
    @GetMapping(value = "/policy/mainlist/{userKeynum}")
    public Map<String, Object> policyMainList2Execute(PolicyPageDTO pv, @PathVariable("userKeynum") int userKeynum) {
        Map<String, Object> map = new HashMap<>();
        int totalRecord = service.countformainProcess();
        this.pdto = new PolicyPageDTO(1, totalRecord);
	
		List<PolicyDTO> dtolist = service.mainlistProcess(this.pdto);
		for(PolicyDTO item : dtolist) {
			try {
				item.setScrapCount(scrapService.checklistProcess(item.getPolicyId(),userKeynum));
			} catch(Exception e) {
				System.out.println("userKeynum이 없음");
			}	
		}
		map.put("aList",dtolist);
		map.put("pv", this.pdto);

        return map;
    }
    

	// 메인정책 리스트 받아오기(비로그인)
    // http://localhost:8090/policy/mainlist
    @GetMapping(value = "/policy/mainlist")
    public Map<String, Object> policyMainListExecute(PolicyPageDTO pv) {
        Map<String, Object> map = new HashMap<>();
        int totalRecord = service.countformainProcess();
        this.pdto = new PolicyPageDTO(1, totalRecord);
	
		List<PolicyDTO> dtolist = service.mainlistProcess(this.pdto);

		map.put("aList",dtolist);
		map.put("pv", this.pdto);
   
        return map;
    }
    
}

