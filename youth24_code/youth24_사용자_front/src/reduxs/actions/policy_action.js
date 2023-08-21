import axios from 'axios';
import { baseUrl } from '../../apiurl';
import { policyReducers } from '../reducers/policy_reducer';

function getPolicySearch(currentPage, searchWord, bizTycdSel, srchPolyBizSecd) {
  if (localStorage.getItem('userKeynum') !== null) {
    return async (dispatch) => {
      const data = await axios
        .get(
          `${baseUrl}/policy/${currentPage}/${localStorage.getItem(
            'userKeynum'
          )}?searchWord=${searchWord}&srchPolyBizSecd=${srchPolyBizSecd}&bizTycdSel=${bizTycdSel}`
        )
        .then((response) => response.data);
      console.log(data);
      dispatch(policyReducers.getPolicySearch({ data }));
    };
  } else {
    return async (dispatch) => {
      const data = await axios
        .get(
          `${baseUrl}/policy/${currentPage}?searchWord=${searchWord}&srchPolyBizSecd=${srchPolyBizSecd}&bizTycdSel=${bizTycdSel}`
        )
        .then((response) => response.data);
      console.log(data);
      dispatch(policyReducers.getPolicySearch({ data }));
    };
  }
}
function postScrap(formData) {
  return async () => {
    await axios
      .post(`${baseUrl}/policy/scrap/save`, formData)
      .then((response) => response.data);
  };
}
function getPolicyDetail(policyId) {
  if (localStorage.getItem('userKeynum') !== null) {
    return async (dispatch) => {
      //data 값을 reduce를 이용해서 store에 저장해야함
      const data = await axios
        .get(
          `${baseUrl}/policy/view/${policyId}/${localStorage.getItem(
            'userKeynum'
          )}`
        )
        .then((response) => response.data); // backend에서 /board/view/ 이렇게 요청하도록 되어있어서 이렇게 주소를 써줌 -> 결과값을 받아옴 .then()
      dispatch(policyReducers.getPolicyDetail({ data }));
    };
  } else {
    return async (dispatch) => {
      //data 값을 reduce를 이용해서 store에 저장해야함
      const data = await axios
        .get(`${baseUrl}/policy/view/${policyId}`)
        .then((response) => response.data); // backend에서 /board/view/ 이렇게 요청하도록 되어있어서 이렇게 주소를 써줌 -> 결과값을 받아옴 .then()
      dispatch(policyReducers.getPolicyDetail({ data }));
    };
  }
}

function getViewDetail(policyId) {
  return async (dispatch) => {
    //data 값을 reduce를 이용해서 store에 저장해야함
    const data = await axios
      .get(`${baseUrl}/policy/view2/${policyId}`)
      .then((response) => response.data); // backend에서 /board/view/ 이렇게 요청하도록 되어있어서 이렇게 주소를 써줌 -> 결과값을 받아옴 .then()
    dispatch(policyReducers.getViewDetail({ data }));
  };
}
//backend에서 결과값을 받아야하니 변수를 선언해주어야함
function getPolicyDownload(policyImages) {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/policy/download/${policyImages}`, {
        responseType: 'blob', // backend에서 stream을 통해서 받도록 "application/octet-stream" 이렇게 해두어서 이렇게 받아줘야함
      })
      .then((response) => response.data); // data에 담아서 넘겨줌
    // data 값을 reduce에 저장시켜줘야함 -> store에 저장하기 위해서
    //dispatch(boardActions.getBoardDownload(data)); // 이렇게 넘겨줘도 가능
    return data; // store에 저장안하고 일회성으로 할 거면 이렇게 하고 board_view.js에서만 사용하게끔 할 수 있음
  };
}
function updatePolicyCount(formData) {
  return async () => {
    await axios
      .put(`${baseUrl}/policy/viewCount`, formData)
      .then((response) => response.data);
  };
}
function getScrapCheck(policyId, userKeynum) {
  return async (dispatch) => {
    //data 값을 reduce를 이용해서 store에 저장해야함
    const data = await axios
      .get(
        `${baseUrl}/policy/scrap/check?policyId=${policyId}&userKeynum=${userKeynum}`
      )
      .then((response) => response.data); // backend에서 /board/view/ 이렇게 요청하도록 되어있어서 이렇게 주소를 써줌 -> 결과값을 받아옴 .then()
    dispatch(policyReducers.getScrapCheck({ data }));
  };
}
function getScrapDelete(policyId) {
  return async (dispatch) => {
    await axios
      .delete(
        `${baseUrl}/policy/scrap/delete?policyId=${policyId}&userKeynum=${localStorage.getItem(
          'userKeynum'
        )}`
      )
      .then((response) => response.data);
  };
}

function getPolicyShow(policyImages) {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/policy/show/${policyImages}`)
      .then((response) => response.data);
    return data;
  };
}

function getScrapList() {
  // 함수명 없이 바로 사용한다.
  // board_reducer에 있는 친구를 사용한다.
  return async (dispatch) => {
    ////경로를 써준다...백엔드를 요청하고 결과값을 받을때까지 기다린다.(await)
    const data = await axios
      .get(`${baseUrl}/my/clip/${localStorage.getItem('userKeynum')}`)
      .then((response) => response.data); // 넘겨주는 값을 받을 때는 무조건 response.data를 사용한다.
    console.log(data);
    dispatch(policyReducers.getScrapList({ data }));
  };
}

function getPolicyMain() {
  if (localStorage.getItem('userKeynum') !== null) {
    return async (dispatch) => {
      const data = await axios
        .get(`${baseUrl}/policy/mainlist/${localStorage.getItem('userKeynum')}`)
        .then((response) => response.data);
      console.log(data);
      dispatch(policyReducers.getPolicyMain({ data }));
    };
  } else {
    return async (dispatch) => {
      const data = await axios
        .get(`${baseUrl}/policy/mainlist`)
        .then((response) => response.data);
      console.log(data);
      dispatch(policyReducers.getPolicyMain({ data }));
    };
  }
}

function getCuratingList() {
  return async (dispatch) => {
    //data 값을 reduce를 이용해서 store에 저장해야함
    const data = await axios
      .get(
        `http://localhost:5000/?k=4&user_keynum=${localStorage.getItem(
          'userKeynum'
        )}`
      )
      .then((response) => response.data); // backend에서 /board/view/ 이렇게 요청하도록 되어있어서 이렇게 주소를 써줌 -> 결과값을 받아옴 .then()
    dispatch(policyReducers.getCuratingList({ data }));
  };
}
function getCurating2List() {
  let gender_col = '';
  let age_col = '';
  let education_col = '';
  let employment_col = '';

  if (localStorage.getItem('userGender') === '여성') {
    gender_col = 'VIEW_GENDERCNT_F';
  } else {
    gender_col = 'VIEW_GENDERCNT_M';
  }

  const today = new Date();
  const birthDate = new Date(localStorage.getItem('userBirthdate'));
  let calculatedAge = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    calculatedAge--;
  }

  if (9 < calculatedAge && calculatedAge < 20) {
    age_col = 'VIEW_AGECNT_10';
  } else if (19 < calculatedAge && calculatedAge < 30) {
    age_col = 'VIEW_AGECNT_20';
  } else if (29 < calculatedAge && calculatedAge < 40) {
    age_col = 'VIEW_AGECNT_30';
  } else if (39 < calculatedAge && calculatedAge < 50) {
    age_col = 'VIEW_AGECNT_40';
  } else if (49 < calculatedAge && calculatedAge < 60) {
    age_col = 'VIEW_AGECNT_50';
  } else {
    age_col = 'VIEW_AGECNT_60';
  }

  if (localStorage.getItem('userEducation') === '고등학교 졸업 미만') {
    education_col = 'VIEW_EDUCNT_LESHSC';
  } else if (localStorage.getItem('userEducation') === '고등학교 졸업') {
    education_col = 'VIEW_EDUCNT_HSCGDT';
  } else if (localStorage.getItem('userEducation') === '대학교 재학중') {
    education_col = 'VIEW_EDUCNT_CLG';
  } else if (localStorage.getItem('userEducation') === '대학교 졸업 예정') {
    education_col = 'VIEW_EDUCNT_PLTCLGGDT';
  } else if (localStorage.getItem('userEducation') === '대학교 졸업') {
    education_col = 'VIEW_EDUCNT_CLGGDT';
  } else {
    education_col = 'VIEW_EDUCNT_MSTNPHD';
  }

  if (localStorage.getItem('userEmpstatus') === '무직') {
    employment_col = 'VIEW_UNEMPLOYMENT';
  } else {
    employment_col = 'VIEW_EMPLOYMENT';
  }

  return async (dispatch) => {
    //data 값을 reduce를 이용해서 store에 저장해야함
    const data = await axios
      .get(
        `http://localhost:5000/user?k=4&gender_col=${gender_col}&age_col=${age_col}&education_col=${education_col}&employment_col=${employment_col}`
      )
      .then((response) => response.data); // backend에서 /board/view/ 이렇게 요청하도록 되어있어서 이렇게 주소를 써줌 -> 결과값을 받아옴 .then()
    dispatch(policyReducers.getCurating2List({ data }));
  };
}

export const policyActions = {
  getPolicySearch,
  postScrap,
  getPolicyDetail,
  getViewDetail,
  getPolicyDownload,
  updatePolicyCount,
  getScrapCheck,
  getScrapDelete,
  getPolicyShow,
  getScrapList,
  getPolicyMain,
  getCuratingList,
  getCurating2List,
};
