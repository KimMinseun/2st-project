import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { HeartBtn, PolicyClip, PolicyItem, PolicyList } from 'style/StyleMain';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import { useDispatch, useSelector } from 'react-redux';
import { rgb } from 'd3';
import { policyActions } from 'reduxs/actions/policy_action';
import { useEffect } from 'react';
import { ClipTabpage } from 'style/StyleSubpage';
import { useState } from 'react';
import AlertOneBtn from 'components/util/AlertOneBtn';

const Clip = () => {
  const dispatch = useDispatch();
  const [clipPopup, setClipPopup] = useState(false);
  const [clipStat, setClipStat] = useState('');

  //action 검색정보 가져오기
  const getScrapList = () => {
    dispatch(policyActions.getScrapList());
  };

  const getCuratingList = () => {
    dispatch(policyActions.getCuratingList());
  };
  const getCurating2List = () => {
    dispatch(policyActions.getCurating2List());
  };

  const curating2List = useSelector((state) => state.policy.curating2List);
  const curatingList = useSelector((state) => state.policy.curatingList);
  //reducer 검색 정보 가져오기
  const scrapList = useSelector((state) => state.policy.scrapList);
  const pv = useSelector((state) =>
    state.policy.pv2 ? state.policy.pv2 : { currentPage: 1 }
  );

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
    getScrapList();
  };
  // 스크랩 해제 버튼 클릭
  const unScrap = async (policyId, e) => {
    e.preventDefault();
    console.log(policyId);
    await dispatch(policyActions.getScrapDelete(policyId));
    console.log('스크랩 해제');
    setClipStat('해제');
    setClipPopup(true);
    getScrapList();
  };

  useEffect(() => {
    getScrapList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCuratingList();
    console.log(curatingList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCurating2List();
    console.log(curating2List);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ClipTabpage>
        <div className='tab_inner'>
          <h4>내 스크랩 목록</h4>
          {pv.totalCount === undefined ? null : pv.totalCount === 0 ? (
            <p className='no_data'>스크랩한 정책이 없습니다.</p>
          ) : (
            <p>
              <span style={{ color: rgb(88, 78, 228) }}>{pv.totalCount}</span>
              개의 스크랩한 정책이 있습니다.
            </p>
          )}
          <PolicyList>
            {scrapList &&
              scrapList.map((scrap) => {
                return (
                  <PolicyItem
                    policy={scrap}
                    key={scrap['policyDTO']['policyId']}
                  >
                    <h4>
                      <NavLink
                        to={`/policy/view/${scrap['policyDTO']['policyId']}`}
                      >
                        {scrap['policyDTO']['policyName']}
                      </NavLink>
                    </h4>
                    <ul>
                      {scrap['policyDTO']['policyBizTypeCode'].includes(
                        '003002001'
                      ) ? (
                        <li className='policy_tag1_2'>서울 </li>
                      ) : scrap['policyDTO']['policyBizTypeCode'].includes(
                          '003002002'
                        ) ? (
                        <li className='policy_tag1_2'> 부산</li>
                      ) : scrap['policyDTO']['policyBizTypeCode'].includes(
                          '003002003'
                        ) ? (
                        <li className='policy_tag1_2'>대구</li>
                      ) : scrap['policyDTO']['policyBizTypeCode'].includes(
                          '003002004'
                        ) ? (
                        <li className='policy_tag1_2'>인천</li>
                      ) : scrap['policyDTO']['policyBizTypeCode'].includes(
                          '003002005'
                        ) ? (
                        <li className='policy_tag1_2'>광주</li>
                      ) : scrap['policyDTO']['policyBizTypeCode'].includes(
                          '003002006'
                        ) ? (
                        <li className='policy_tag1_2'>대전</li>
                      ) : scrap['policyDTO']['policyBizTypeCode'].includes(
                          '003002007'
                        ) ? (
                        <li className='policy_tag1_2'>울산</li>
                      ) : scrap['policyDTO']['policyBizTypeCode'].includes(
                          '003002008'
                        ) ? (
                        <li className='policy_tag1_2'>경기</li>
                      ) : scrap['policyDTO']['policyBizTypeCode'].includes(
                          '003002009'
                        ) ? (
                        <li className='policy_tag1_2'>강원</li>
                      ) : scrap['policyDTO']['policyBizTypeCode'].includes(
                          '003002010'
                        ) ? (
                        <li className='policy_tag1_2'>충북</li>
                      ) : scrap['policyDTO']['policyBizTypeCode'].includes(
                          '003002011'
                        ) ? (
                        <li className='policy_tag1_2'>충남</li>
                      ) : scrap['policyDTO']['policyBizTypeCode'].includes(
                          '003002012'
                        ) ? (
                        <li className='policy_tag1_2'>전북</li>
                      ) : scrap['policyDTO']['policyBizTypeCode'].includes(
                          '003002013'
                        ) ? (
                        <li className='policy_tag1_2'>전남</li>
                      ) : scrap['policyDTO']['policyBizTypeCode'].includes(
                          '003002014'
                        ) ? (
                        <li className='policy_tag1_2'>경북</li>
                      ) : scrap['policyDTO']['policyBizTypeCode'].includes(
                          '003002015'
                        ) ? (
                        <li className='policy_tag1_2'>경남</li>
                      ) : scrap['policyDTO']['policyBizTypeCode'].includes(
                          '003002016'
                        ) ? (
                        <li className='policy_tag1_2'>제주</li>
                      ) : scrap['policyDTO']['policyBizTypeCode'].includes(
                          '003002017'
                        ) ? (
                        <li className='policy_tag1_2'>세종</li>
                      ) : (
                        <li className='policy_tag1_1'>중앙부처</li>
                      )}

                      {scrap['policyDTO']['policyBizTypeName'] ===
                      '취업지원' ? (
                        <li className='policy_tag2_1'>
                          {scrap['policyDTO']['policyBizTypeName']}
                        </li>
                      ) : scrap['policyDTO']['policyBizTypeName'] ===
                        '창업지원' ? (
                        <li className='policy_tag2_2'>
                          {scrap['policyDTO']['policyBizTypeName']}
                        </li>
                      ) : scrap['policyDTO']['policyBizTypeName'] ===
                        '주거·금융' ? (
                        <li className='policy_tag2_3'>
                          {scrap['policyDTO']['policyBizTypeName']}
                        </li>
                      ) : scrap['policyDTO']['policyBizTypeName'] ===
                        '생활·복지' ? (
                        <li className='policy_tag2_4'>
                          {scrap['policyDTO']['policyBizTypeName']}
                        </li>
                      ) : scrap['policyDTO']['policyBizTypeName'] ===
                        '정책참여' ? (
                        <li className='policy_tag2_5'>
                          {scrap['policyDTO']['policyBizTypeName']}
                        </li>
                      ) : (
                        <li className='policy_tag2_6'>
                          {scrap['policyDTO']['policyBizTypeName']}
                        </li>
                      )}
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
                        value={scrap.policyId}
                        onClick={
                          scrap.scrapCount === 0
                            ? (e) => {
                                Scrap(scrap.policyId, e);
                              }
                            : (e) => {
                                unScrap(scrap.policyId, e);
                              }
                        }
                      >
                        <FontAwesomeIcon
                          icon={
                            scrap.scrapCount === 0 ? regularHeart : solidHeart
                          }
                        ></FontAwesomeIcon>
                      </HeartBtn>

                      <p>{scrap['viewDTO']['viewScrapcnt']}</p>
                    </PolicyClip>
                  </PolicyItem>
                );
              })}
          </PolicyList>
          <h4 style={{ color: 'black' }}>
            <span style={{ color: rgb(88, 78, 228) }}>
              {localStorage.getItem('userName')}
            </span>
            님의 관심정책과 유사한 청년정책입니다.
          </h4>

          <PolicyList>
            {curatingList &&
              curatingList.map((element) => {
                return (
                  <PolicyItem policy={element} key={element.POLICY_ID}>
                    <h4>
                      <NavLink to={`/policy/view/${element.POLICY_ID}`}>
                        {element.POLICY_NAME}
                      </NavLink>
                    </h4>
                    <ul>
                      {element.POLICY_BIZTYPECODE ===
                      undefined ? null : element.POLICY_BIZTYPECODE.includes(
                          '003002001'
                        ) ? (
                        <li className='policy_tag1_2'>서울 </li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002002') ? (
                        <li className='policy_tag1_2'> 부산</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002003') ? (
                        <li className='policy_tag1_2'>대구</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002004') ? (
                        <li className='policy_tag1_2'>인천</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002005') ? (
                        <li className='policy_tag1_2'>광주</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002006') ? (
                        <li className='policy_tag1_2'>대전</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002007') ? (
                        <li className='policy_tag1_2'>울산</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002008') ? (
                        <li className='policy_tag1_2'>경기</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002009') ? (
                        <li className='policy_tag1_2'>강원</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002010') ? (
                        <li className='policy_tag1_2'>충북</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002011') ? (
                        <li className='policy_tag1_2'>충남</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002012') ? (
                        <li className='policy_tag1_2'>전북</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002013') ? (
                        <li className='policy_tag1_2'>전남</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002014') ? (
                        <li className='policy_tag1_2'>경북</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002015') ? (
                        <li className='policy_tag1_2'>경남</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002016') ? (
                        <li className='policy_tag1_2'>제주</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002017') ? (
                        <li className='policy_tag1_2'>세종</li>
                      ) : (
                        <li className='policy_tag1_1'>중앙부처</li>
                      )}

                      {element.POLICY_BIZTYPENAME === '취업지원' ? (
                        <li className='policy_tag2_1'>
                          {element.POLICY_BIZTYPENAME}
                        </li>
                      ) : element.POLICY_BIZTYPENAME === '창업지원' ? (
                        <li className='policy_tag2_2'>
                          {element.POLICY_BIZTYPENAME}
                        </li>
                      ) : element.POLICY_BIZTYPENAME === '주거·금융' ? (
                        <li className='policy_tag2_3'>
                          {element.POLICY_BIZTYPENAME}
                        </li>
                      ) : element.POLICY_BIZTYPENAME === '생활·복지' ? (
                        <li className='policy_tag2_4'>
                          {element.POLICY_BIZTYPENAME}
                        </li>
                      ) : element.POLICY_BIZTYPENAME === '정책참여' ? (
                        <li className='policy_tag2_5'>
                          {element.POLICY_BIZTYPENAME}
                        </li>
                      ) : (
                        <li className='policy_tag2_6'>
                          {element.POLICY_BIZTYPENAME}
                        </li>
                      )}
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
                        value={element.POLICY_ID}
                        onClick={
                          element.scrapCount === 0
                            ? (e) => {
                                Scrap(element.POLICY_ID, e);
                              }
                            : (e) => {
                                unScrap(element.POLICY_ID, e);
                              }
                        }
                      >
                        <FontAwesomeIcon
                          icon={
                            element.VIEW_SCRAPCNT === 0
                              ? regularHeart
                              : solidHeart
                          }
                        ></FontAwesomeIcon>
                      </HeartBtn>

                      <p>{element.VIEW_SCRAPCNT}</p>
                    </PolicyClip>
                  </PolicyItem>
                );
              })}
          </PolicyList>

          <h4 style={{ color: 'black' }}>
            <span style={{ color: rgb(88, 78, 228) }}>
              {localStorage.getItem('userName')}
            </span>
            님의 유사집단이 관심을 가지는 청년정책입니다.
          </h4>

          <PolicyList>
            {curating2List &&
              curating2List.map((element) => {
                return (
                  <PolicyItem policy={element} key={element.POLICY_ID}>
                    <h4>
                      <NavLink to={`/policy/view/${element.POLICY_ID}`}>
                        {element.POLICY_NAME}
                      </NavLink>
                    </h4>
                    <ul>
                      {element.POLICY_BIZTYPECODE ===
                      undefined ? null : element.POLICY_BIZTYPECODE.includes(
                          '003002001'
                        ) ? (
                        <li className='policy_tag1_2'>서울 </li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002002') ? (
                        <li className='policy_tag1_2'> 부산</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002003') ? (
                        <li className='policy_tag1_2'>대구</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002004') ? (
                        <li className='policy_tag1_2'>인천</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002005') ? (
                        <li className='policy_tag1_2'>광주</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002006') ? (
                        <li className='policy_tag1_2'>대전</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002007') ? (
                        <li className='policy_tag1_2'>울산</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002008') ? (
                        <li className='policy_tag1_2'>경기</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002009') ? (
                        <li className='policy_tag1_2'>강원</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002010') ? (
                        <li className='policy_tag1_2'>충북</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002011') ? (
                        <li className='policy_tag1_2'>충남</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002012') ? (
                        <li className='policy_tag1_2'>전북</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002013') ? (
                        <li className='policy_tag1_2'>전남</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002014') ? (
                        <li className='policy_tag1_2'>경북</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002015') ? (
                        <li className='policy_tag1_2'>경남</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002016') ? (
                        <li className='policy_tag1_2'>제주</li>
                      ) : element.POLICY_BIZTYPECODE.includes('003002017') ? (
                        <li className='policy_tag1_2'>세종</li>
                      ) : (
                        <li className='policy_tag1_1'>중앙부처</li>
                      )}

                      {element.POLICY_BIZTYPENAME === '취업지원' ? (
                        <li className='policy_tag2_1'>
                          {element.POLICY_BIZTYPENAME}
                        </li>
                      ) : element.POLICY_BIZTYPENAME === '창업지원' ? (
                        <li className='policy_tag2_2'>
                          {element.POLICY_BIZTYPENAME}
                        </li>
                      ) : element.POLICY_BIZTYPENAME === '주거·금융' ? (
                        <li className='policy_tag2_3'>
                          {element.POLICY_BIZTYPENAME}
                        </li>
                      ) : element.POLICY_BIZTYPENAME === '생활·복지' ? (
                        <li className='policy_tag2_4'>
                          {element.POLICY_BIZTYPENAME}
                        </li>
                      ) : element.POLICY_BIZTYPENAME === '정책참여' ? (
                        <li className='policy_tag2_5'>
                          {element.POLICY_BIZTYPENAME}
                        </li>
                      ) : (
                        <li className='policy_tag2_6'>
                          {element.POLICY_BIZTYPENAME}
                        </li>
                      )}
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
                        value={element.POLICY_ID}
                        onClick={
                          element.scrapCount === 0
                            ? (e) => {
                                Scrap(element.POLICY_ID, e);
                              }
                            : (e) => {
                                unScrap(element.POLICY_ID, e);
                              }
                        }
                      >
                        <FontAwesomeIcon
                          icon={
                            element.VIEW_SCRAPCNT === 0
                              ? regularHeart
                              : solidHeart
                          }
                        ></FontAwesomeIcon>
                      </HeartBtn>

                      <p>{element.VIEW_SCRAPCNT}</p>
                    </PolicyClip>
                  </PolicyItem>
                );
              })}
          </PolicyList>
        </div>
      </ClipTabpage>

      {clipPopup && (
        <AlertOneBtn
          offAlert={setClipPopup}
          text={`스크랩이 ${clipStat}되었습니다.`}
        />
      )}
    </>
  );
};

export default Clip;
