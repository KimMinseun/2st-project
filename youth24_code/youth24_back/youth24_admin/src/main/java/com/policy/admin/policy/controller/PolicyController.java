package com.policy.admin.policy.controller;

import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import com.policy.admin.policy.common.file.FileUpload;
import com.policy.admin.policy.dto.PolicyDTO;
import com.policy.admin.policy.dto.PolicyPageDTO;
import com.policy.admin.policy.service.PolicyService;

@CrossOrigin("*")
@RestController
public class PolicyController {
	@Autowired
	private PolicyPageDTO pdto;
	
	@Autowired
	private PolicyDTO dto;
	
	@Autowired
	private PolicyService service;
	
	private int currentPage;
	
	@Value("${youthPolicy-admin-key}")
	private String apiKey;

	
	@Value("${spring.servlet.multipart.location}")
	private String filePath;
	

	// api 전체 리스트 받아오기
    // http://localhost:8090/policy/list/1
    @GetMapping(value = "/policy/list/{currentPage}")
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
    	        	service.insertProcess(dto);
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
	@GetMapping("/policy/view/{policyId}")
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
    
    
    //open api -> PolicyDTO 형태로 DB 저장
    @PostMapping("/policy/write")
    public void insertExcute(PolicyDTO dto, HttpServletRequest req) {
   
//    	System.out.println(dto.getPolicyId());
    	MultipartFile file = dto.getFilename();
    	System.out.println("file" + file);
		
		//파일 첨부가 있으면...
		if(file!=null && !file.isEmpty()) {
			UUID random = FileUpload.saveCopyFile(file, filePath);
			dto.setPolicyImages(random + "_" + file.getOriginalFilename());
		}
		
    	dto.setIp(req.getRemoteAddr());
     	
    	String pIdOfDTO =dto.getPolicyId();
        String pIdOfDB = service.getPolicyIdProcess(pIdOfDTO);
        if(!pIdOfDTO.equals(pIdOfDB)) {
        	service.insertProcess(dto);
        	service.viewInsertProcess(dto.getPolicyId());
        	service.viewUpdateProcess(dto.getPolicyId());
        }else System.out.println("중복된 정책ID가 있습니다.");
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
  			
  			String url = "https://www.youthcenter.go.kr/opi/empList.do?pageIndex="+currentPage+"&display=10&bizTycdSel=004001&srchPolyBizSecd=003002001,003002002&openApiVlak="+apiKey;
  			
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
			for(PolicyDTO item : dtolist) {
				try {
					service.viewUpdateProcess(item.getPolicyId());
					System.out.println(item.getPolicyId());
				} catch(Exception e) {
					System.out.println("POLICY_KEYNUM 업데이트 대상 없음");
				}	
			}
			map.put("aList", dtolist);
			map.put("pv", this.pdto);
        }

        return map;
    }
	
	// DB 저장된 정보 업데이트 수정
	@PutMapping("/policyDB/update")
	public void updateExecute(PolicyDTO dto, HttpServletRequest request) throws IllegalStateException, IOException {
		MultipartFile file = dto.getFilename();
		if (file!= null && !file.isEmpty()) {
			UUID random = FileUpload.saveCopyFile(file, filePath);
			dto.setPolicyImages(random + "_" + file.getOriginalFilename());
			// C:\\download\\temp 경로에 첨부파일 저장
			file.transferTo(new File(random + "_" + file.getOriginalFilename()));
		}
		service.updateProcess(dto, filePath);
	}
	
	
    
    //DB 정책정보 상세보기
	@GetMapping("/policyDB/view/{policyKeynum}")
	public PolicyDTO viewDBExecute(@PathVariable("policyKeynum") int policyKeynum) {
		return service.contentProcess(policyKeynum);
   
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
		@GetMapping("/policyDB/download/{filename}")
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
	

}
