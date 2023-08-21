import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  pv: { currentPage: 1 },
  policySearch: [],
  searchWord: '',
  srchPolyBizSecd: '',
  bizTycdSel: '',
  policyDetail: {},
  viewDetail: {},
  policyFile: null,
  scrapCheck: '',
  pv2: { currentPage2: 1 },
  scrapList: [],
  pv3: { currentPage3: 1 },
  policyMain: [],
  curatingList: [],
  curating2List: [],
};

//변수명
const policySlice = createSlice({
  name: 'policy',
  initialState,

  reducers: {
    getPolicySearch(state, action) {
      console.log(action);
      state.policySearch = action.payload.data.aList;
      state.pv = action.payload.data.pv;
    },
    getPolicyDetail(state, action) {
      console.log('action', action);
      state.policyDetail = action.payload.data;
    },
    getViewDetail(state, action) {
      console.log('action', action);
      state.viewDetail = action.payload.data;
    },
    getPolicyDownload(state, action) {
      state.policyFile = action.payload.data;
    },
    getScrapCheck(state, action) {
      console.log('action', action);
      state.scrapCheck = action.payload.data;
    },
    getScrapList(state, action) {
      console.log(action);
      state.scrapList = action.payload.data.aList;
      state.pv2 = action.payload.data.pv;
    },
    getPolicyMain(state, action) {
      console.log(action);
      state.policyMain = action.payload.data.aList;
      state.pv3 = action.payload.data.pv;
    },
    getCuratingList(state, action) {
      console.log(action);
      state.curatingList = action.payload.data;
    },
    getCurating2List(state, action) {
      console.log(action);
      state.curating2List = action.payload.data;
    },
  },
});

//이걸을 이용해서 함수명 자동완성을 할 수 있다.
export const policyReducers = policySlice.actions;
export default policySlice.reducer;
