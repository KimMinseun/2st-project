package com.policy.admin.policy.common.exception;

import org.json.JSONException;

public class TotalCntZeroException extends JSONException {

	public TotalCntZeroException(String message) {
		super("검색결과가 없습니다.");
		// TODO Auto-generated constructor stub
	}
	

}

