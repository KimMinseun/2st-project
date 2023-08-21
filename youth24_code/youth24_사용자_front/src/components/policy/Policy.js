import { NavLink, useParams } from 'react-router-dom';
import { HeartBtn, PolicyClip, PolicyItem, PolicyList } from 'style/StyleMain';
import { SearchArea, SearchForm } from 'style/StylePolicy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { policyActions } from 'reduxs/actions/policy_action';
import { useEffect } from 'react';
import { PaginationArea } from 'style/StyleLayout';
import { TagColor, TagColorArea } from 'components/util/TagColor';
import AlertOneBtn from 'components/util/AlertOneBtn';

const Policy = () => {
  const [clipPopup, setClipPopup] = useState(false);
  const [clipStat, setClipStat] = useState('');
  const dispatch = useDispatch();
  const { currentPage } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [isSearch, setIsSearch] = useState(false);
  //검색어
  const [searchWord, setSearchWord] = useState('');
  //정책유형
  const [bizTycdSel, setBizTycdSel] = useState('');
  //지역
  const [srchPolyBizSecd, setSrchPolyBizSecd] = useState('');

  //action 검색정보 가져오기
  const getPolicySearch = (
    currentPage,
    searchWord,
    bizTycdSel,
    srchPolyBizSecd
  ) => {
    console.log('getPolicySearch searchWord:', searchWord);
    console.log('getPolicySearch srchPolyBizSecd:', srchPolyBizSecd);
    console.log('getPolicySearch bizTycdSel:', bizTycdSel);
    console.log('getPolicySearch currentPage:', currentPage);
    console.log(localStorage.getItem('userId'));
    dispatch(
      policyActions.getPolicySearch(
        currentPage,
        searchWord,
        bizTycdSel,
        srchPolyBizSecd
      )
    );
  };

  const pv = useSelector((state) =>
    state.policy.pv ? state.policy.pv : { currentPage: 1 }
  );

  //reducer 검색 정보 가져오기
  const policySearch = useSelector((state) => state.policy.policySearch);

  const queryHandler = (e) => {
    setSearchWord(e.target.value);
  };

  //다중 정책 전체 체크세팅
  const bizTyAllCheck = (e) => {
    const checklist = 'input[name="bizTycdSel"]';
    if (e.target.checked) {
      const selectedEls = document.querySelectorAll(checklist);
      let result = '';
      selectedEls.forEach((el) => {
        result += el.value + ',';
      });
      setBizTycdSel(result);
    } else {
      setBizTycdSel('');
    }
    let checkPick = document.getElementsByName('bizTycdSel');
    Array.prototype.forEach.call(checkPick, function (el) {
      el.checked = false;
    });
    let checkPick2 = document.getElementsByName('bizTycdSel_all');
    Array.prototype.forEach.call(checkPick2, function (el) {
      el.checked = true;
    });
  };

  //다중정책세팅
  const bizTySingleCheck = (id) => {
    const checklist = 'input[name="bizTycdSel"]:checked';
    const totallist = 'input[name="bizTycdSel"]';
    const selectedEls = document.querySelectorAll(checklist);
    const totalEls = document.querySelectorAll(totallist);
    // 단일 선택 시 체크된 아이템을 배열에 추가
    let result = '';
    selectedEls.forEach((el) => {
      result += el.value + ',';
    });
    setBizTycdSel(result);
    if (id.target.checked) {
      let checkPick = document.getElementsByName('bizTycdSel_all');
      Array.prototype.forEach.call(checkPick, function (el) {
        el.checked = false;
      });
    }
    if (selectedEls.length === totalEls.length) {
      let checkPickAll = document.getElementsByName('bizTycdSel_all');
      Array.prototype.forEach.call(checkPickAll, function (el) {
        el.checked = true;
      });
      let checkPick = document.getElementsByName('bizTycdSel');
      Array.prototype.forEach.call(checkPick, function (el) {
        el.checked = false;
      });
    } else {
      let checkPick = document.getElementsByName('bizTycdSel_all');
      Array.prototype.forEach.call(checkPick, function (el) {
        el.checked = false;
      });
    }
    if (selectedEls.length === 0) {
      let checkPickAll = document.getElementsByName('bizTycdSel_all');
      Array.prototype.forEach.call(checkPickAll, function (el) {
        el.checked = true;
      });
    }
  };

  //다중 지역 전체 체크 세팅
  const srchAllCheck = (e) => {
    const checklist = 'input[name="srchPolyBizSecd"]';
    if (e.target.checked) {
      const selectedEls = document.querySelectorAll(checklist);
      let result = '';
      selectedEls.forEach((el) => {
        result += el.value + ',';
      });
      setSrchPolyBizSecd(result);
    } else {
      setSrchPolyBizSecd('');
    }
    let checkPick = document.getElementsByName('srchPolyBizSecd');
    Array.prototype.forEach.call(checkPick, function (el) {
      el.checked = false;
    });
    let checkPick2 = document.getElementsByName('srchPolyBizSecd_all');
    Array.prototype.forEach.call(checkPick2, function (el) {
      el.checked = true;
    });
  };

  //다중 지역 세팅
  const srchSingleCheck = (id) => {
    const checklist = 'input[name="srchPolyBizSecd"]:checked';
    const totallist = 'input[name="srchPolyBizSecd"]';
    const selectedEls = document.querySelectorAll(checklist);
    const totalEls = document.querySelectorAll(totallist);
    // 단일 선택 시 체크된 아이템을 배열에 추가
    let result = '';
    selectedEls.forEach((el) => {
      result += el.value + ',';
    });
    setSrchPolyBizSecd(result);
    if (id.target.checked) {
      let checkPick = document.getElementsByName('srchPolyBizSecd_all');
      Array.prototype.forEach.call(checkPick, function (el) {
        el.checked = false;
      });
    }
    if (selectedEls.length === totalEls.length) {
      let checkPickAll = document.getElementsByName('srchPolyBizSecd_all');
      Array.prototype.forEach.call(checkPickAll, function (el) {
        el.checked = true;
      });
      let checkPick = document.getElementsByName('srchPolyBizSecd');
      Array.prototype.forEach.call(checkPick, function (el) {
        el.checked = false;
      });
    } else {
      let checkPick = document.getElementsByName('srchPolyBizSecd_all');
      Array.prototype.forEach.call(checkPick, function (el) {
        el.checked = false;
      });
    }
    if (selectedEls.length === 0) {
      let checkPickAll = document.getElementsByName('srchPolyBizSecd_all');
      Array.prototype.forEach.call(checkPickAll, function (el) {
        el.checked = true;
      });
    }
  };

  //검색 버튼 클릭 시 처리
  const onSubmit = async (e) => {
    getPolicySearch(currentPage, searchWord, bizTycdSel, srchPolyBizSecd);
    setIsSearch(true);
  };

  // 비로그인 스크랩 버튼 클릭시 처리
  const comment = (e) => {
    e.preventDefault();
    alert('로그인이 필요한 서비스 입니다.');
  };
  // 스크랩 클릭
  const Scrap = async (policyId, e) => {
    e.preventDefault();
    console.log(policyId);
    const formData = new FormData();
    formData.append('policyId', policyId);
    formData.append('userId', localStorage.getItem('userId'));

    await dispatch(policyActions.postScrap(formData));
    setClipStat('등록');
    setClipPopup(true);
    console.log('스크랩 완료');
    getPolicySearch(currentPage, searchWord, bizTycdSel, srchPolyBizSecd);
  };
  // 스크랩 해제 버튼 클릭
  const unScrap = async (policyId, e) => {
    e.preventDefault();
    console.log(policyId);
    await dispatch(policyActions.getScrapDelete(policyId));
    console.log('스크랩 해제');
    setClipStat('해제');
    setClipPopup(true);
    getPolicySearch(currentPage, searchWord, bizTycdSel, srchPolyBizSecd);
  };

  //페이징 처리
  const pageNumbers = [];
  if (pv.totalPage <= 5) {
    for (let i = 1; i <= pv.totalPage; i++) {
      pageNumbers.push(i);
    }
  } else if (pv.currentPage < 4) {
    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(i);
    }
  } else if (pv.currentPage >= pv.totalPage - 2) {
    for (let i = pv.totalPage - 4; i <= pv.totalPage; i++) {
      pageNumbers.push(i);
    }
  } else {
    for (let i = pv.currentPage - 2; i <= pv.currentPage + 2; i++) {
      pageNumbers.push(i);
    }
  }

  const resetSearchBtn = () => {
    window.location.reload();
  };

  useEffect(() => {
    getPolicySearch(currentPage, searchWord, bizTycdSel, srchPolyBizSecd);
    setIsSearch(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SearchArea>
        <div className='inner'>
          <h2>
            <span>청년정책통합조회</span>
          </h2>

          <SearchForm onSubmit={onSubmit}>
            <ul>
              <li>
                <h4>
                  <span>정책이름 및 내용</span>
                </h4>
                <input
                  type='text'
                  placeholder='검색어를 입력하세요.'
                  name='query'
                  onChange={queryHandler}
                />
              </li>
              <li className='policy_box'>
                <h4>
                  <span>정책 유형</span>
                </h4>
                <input
                  type='checkbox'
                  id='bizTycdSel_all'
                  name='bizTycdSel_all'
                  value=''
                  onChange={(e) => bizTyAllCheck(e)}
                  defaultChecked
                />
                <label htmlFor='bizTycdSel_all'>전체</label>
                <input
                  type='checkbox'
                  id='004001'
                  name='bizTycdSel'
                  value='취업지원'
                  onChange={(e) => bizTySingleCheck(e)}
                />
                <label htmlFor='004001'>취업지원</label>
                <input
                  type='checkbox'
                  id='004002'
                  name='bizTycdSel'
                  value='창업지원'
                  onChange={(e) => bizTySingleCheck(e)}
                />
                <label htmlFor='004002'>창업지원</label>
                <input
                  type='checkbox'
                  id='004003'
                  name='bizTycdSel'
                  value='주거·금융'
                  onChange={(e) => bizTySingleCheck(e)}
                />
                <label htmlFor='004003'>주거·금융</label>
                <input
                  type='checkbox'
                  id='004004'
                  name='bizTycdSel'
                  value='생활·복지'
                  onChange={(e) => bizTySingleCheck(e)}
                />
                <label htmlFor='004004'>생활·복지</label>
                <input
                  type='checkbox'
                  id='004005'
                  name='bizTycdSel'
                  value='정책참여'
                  onChange={(e) => bizTySingleCheck(e)}
                />
                <label htmlFor='004005'>정책참여</label>
                <input
                  type='checkbox'
                  id='004006'
                  name='bizTycdSel'
                  value='코로나19'
                  onChange={(e) => bizTySingleCheck(e)}
                />
                <label htmlFor='004006'>코로나19</label>
              </li>
              <li className='policy_space_box'>
                <h4>
                  <span>시행 주체</span>
                </h4>
                <div>
                  <input
                    type='checkbox'
                    id='srchPolyBizSecd_all'
                    name='srchPolyBizSecd_all'
                    value=''
                    onChange={(e) => srchAllCheck(e)}
                    defaultChecked
                  />
                  <label htmlFor='srchPolyBizSecd_all'>전체</label>
                  <input
                    type='checkbox'
                    id='중앙부처'
                    name='srchPolyBizSecd'
                    value='중앙부처'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='중앙부처'>중앙부처</label>
                  <input
                    type='checkbox'
                    id='003002001'
                    name='srchPolyBizSecd'
                    value='003002001'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002001'>서울</label>
                  <input
                    type='checkbox'
                    id='003002002'
                    name='srchPolyBizSecd'
                    value='003002002'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002002'>부산</label>
                  <input
                    type='checkbox'
                    id='003002003'
                    name='srchPolyBizSecd'
                    value='003002003'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002003'>대구</label>
                  <input
                    type='checkbox'
                    id='003002004'
                    name='srchPolyBizSecd'
                    value='003002004'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002004'>인천</label>
                  <input
                    type='checkbox'
                    id='003002005'
                    name='srchPolyBizSecd'
                    value='003002005'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002005'>광주</label>
                  <input
                    type='checkbox'
                    id='003002006'
                    name='srchPolyBizSecd'
                    value='003002006'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002006'>대전</label>
                  <input
                    type='checkbox'
                    id='003002007'
                    name='srchPolyBizSecd'
                    value='003002007'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002007'>울산</label>
                  <input
                    type='checkbox'
                    id='003002008'
                    name='srchPolyBizSecd'
                    value='003002008'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002008'>경기</label>
                  <input
                    type='checkbox'
                    id='003002009'
                    name='srchPolyBizSecd'
                    value='003002009'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002009'>강원</label>
                  <input
                    type='checkbox'
                    id='003002010'
                    name='srchPolyBizSecd'
                    value='003002010'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002010'>충북</label>
                  <input
                    type='checkbox'
                    id='003002011'
                    name='srchPolyBizSecd'
                    value='003002011'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002011'>충남</label>
                  <input
                    type='checkbox'
                    id='003002012'
                    name='srchPolyBizSecd'
                    value='003002012'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002012'>전북</label>
                  <input
                    type='checkbox'
                    id='003002013'
                    name='srchPolyBizSecd'
                    value='003002013'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002013'>전남</label>
                  <input
                    type='checkbox'
                    id='003002014'
                    name='srchPolyBizSecd'
                    value='003002014'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002014'>경북</label>
                  <input
                    type='checkbox'
                    id='003002015'
                    name='srchPolyBizSecd'
                    value='003002015'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002015'>경남</label>
                  <input
                    type='checkbox'
                    id='003002016'
                    name='srchPolyBizSecd'
                    value='003002016'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002016'>제주</label>
                  <input
                    type='checkbox'
                    id='003002017'
                    name='srchPolyBizSecd'
                    value='003002017'
                    onChange={(e) => srchSingleCheck(e)}
                  />
                  <label htmlFor='003002017'>세종</label>
                </div>
              </li>
            </ul>

            <div className='btn_area'>
              <button type='button' onClick={resetSearchBtn}>
                초기화
              </button>
              <button
                className='btn btn-primary'
                type='button'
                onClick={onSubmit}
              >
                조회
              </button>
            </div>
          </SearchForm>

          <p>
            Total :&nbsp;
            <span>{pv.blockCount === undefined ? 0 : pv.totalCount}</span>건
          </p>
          {/* <p>
            '<span className='text'>@@@</span>'에 대한&nbsp;<span>000</span>건의
            검색결과
          </p> */}

          <PolicyList>
            {policySearch &&
              policySearch.map((policy) => {
                return (
                  <PolicyItem policy={policy} key={policy.policyId}>
                    <h4>
                      <NavLink to={`/policy/view/${policy.policyId}`}>
                        {policy.policyName}
                      </NavLink>
                    </h4>

                    <ul>
                      <li className={TagColorArea(policy.policyBizTypeCode)[0]}>
                        {TagColorArea(policy.policyBizTypeCode)[1]}
                      </li>
                      <li className={TagColor(policy.policyBizTypeName)}>
                        {policy.policyBizTypeName}
                      </li>
                    </ul>
                    <PolicyClip>
                      <HeartBtn
                        className={
                          localStorage.getItem('userId') !== null
                            ? 'full'
                            : 'none'
                        }
                        id='scrap'
                        name='scrap'
                        value={policy.policyId}
                        onClick={
                          localStorage.getItem('userId') === null
                            ? (e) => comment(e)
                            : policy.scrapCount === 0
                            ? (e) => {
                                Scrap(policy.policyId, e);
                              }
                            : (e) => {
                                unScrap(policy.policyId, e);
                              }
                        }
                      >
                        <FontAwesomeIcon
                          icon={
                            policy.scrapCount === 0 ? regularHeart : solidHeart
                          }
                        ></FontAwesomeIcon>
                      </HeartBtn>

                      <p>{policy['viewDTO']['viewScrapcnt']}</p>
                    </PolicyClip>
                  </PolicyItem>
                );
              })}
          </PolicyList>
          {pv.blockCount === undefined ? null : (
            <PaginationArea>
              <ul>
                <li>
                  <div
                    onClick={async () =>
                      getPolicySearch(
                        1,
                        searchWord,
                        bizTycdSel,
                        srchPolyBizSecd
                      )
                    }
                    className={
                      pv.currentPage === 1 ? 'pagebtn disabled' : 'pagebtn'
                    }
                  >
                    &lt; &lt;
                  </div>
                </li>
                <li>
                  <div
                    onClick={async () =>
                      getPolicySearch(
                        pv.currentPage - 1,
                        searchWord,
                        bizTycdSel,
                        srchPolyBizSecd
                      )
                    }
                    className={
                      pv.currentPage === 1 ? 'pagebtn disabled' : 'pagebtn'
                    }
                  >
                    &lt;
                  </div>
                </li>
                {/* 페이지 이동하는 것 구현 */}
                {pageNumbers.map((pnum, idx) => (
                  <li
                    aria-current={pv.currentPage === pnum ? 'page' : null}
                    key={pnum} //반복되어 수행되는 부분이기에 key값 줌
                  >
                    <div
                      className={pv.currentPage === pnum ? 'activePage' : null}
                      aria-current={
                        pv.currentPage === pnum ? 'activePage' : null
                      }
                      onClick={async () =>
                        getPolicySearch(
                          pnum,
                          searchWord,
                          bizTycdSel,
                          srchPolyBizSecd
                        )
                      }
                    >
                      {pnum}
                    </div>
                  </li>
                ))}
                <li>
                  <div
                    onClick={async () =>
                      getPolicySearch(
                        pv.currentPage + 1,
                        searchWord,
                        bizTycdSel,
                        srchPolyBizSecd
                      )
                    }
                    className={
                      pv.currentPage === pv.totalPage
                        ? 'pagebtn disabled'
                        : 'pagebtn'
                    }
                  >
                    &gt;
                  </div>
                </li>
                <li>
                  <div
                    onClick={async () =>
                      getPolicySearch(
                        pv.totalPage,
                        searchWord,
                        bizTycdSel,
                        srchPolyBizSecd
                      )
                    }
                    className={
                      pv.currentPage === pv.totalPage
                        ? 'pagebtn disabled'
                        : 'pagebtn'
                    }
                  >
                    &gt; &gt;
                  </div>
                </li>
              </ul>
            </PaginationArea>
          )}
        </div>
      </SearchArea>
      {clipPopup && (
        <AlertOneBtn
          offAlert={setClipPopup}
          text={`스크랩이 ${clipStat}되었습니다.`}
        />
      )}
    </>
  );
};

export default Policy;
