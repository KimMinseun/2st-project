import { NavLink } from 'react-router-dom';
import {
  HeartBtn,
  MainPolicyArea,
  PolicyClip,
  PolicyItem,
  PolicyList,
} from 'style/StyleMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import { useDispatch, useSelector } from 'react-redux';
import { policyActions } from 'reduxs/actions/policy_action';
import { useEffect } from 'react';
import { useState } from 'react';
import AlertOneBtn from 'components/util/AlertOneBtn';

const MainPolicy = () => {
  const [clipPopup, setClipPopup] = useState(false);
  const [clipStat, setClipStat] = useState('');
  const dispatch = useDispatch();
  //action 검색정보 가져오기
  const getPolicyMain = () => {
    dispatch(policyActions.getPolicyMain());
  };
  // const pv = useSelector((state) =>
  //   state.policy.pv3 ? state.policy.pv3 : { currentPage: 1 }
  // );

  //reducer 검색 정보 가져오기
  const policyMain = useSelector((state) => state.policy.policyMain);

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
    getPolicyMain();
  };
  // 스크랩 해제 버튼 클릭
  const unScrap = async (policyId, e) => {
    e.preventDefault();
    console.log(policyId);
    await dispatch(policyActions.getScrapDelete(policyId));
    console.log('스크랩 해제');
    setClipStat('해제');
    setClipPopup(true);
    getPolicyMain();
  };

  useEffect(() => {
    getPolicyMain();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MainPolicyArea>
        <div className='inner'>
          <h2>
            인기 청년정책
            <NavLink to={`/policy/1`}>더보기&nbsp;&nbsp;&gt;&gt;</NavLink>
          </h2>
          <PolicyList>
            {policyMain &&
              policyMain.map((policy) => {
                return (
                  <PolicyItem policy={policy} key={policy.policyId}>
                    <h4>
                      <NavLink to={`/policy/view/${policy.policyId}`}>
                        {policy.policyName}
                      </NavLink>
                    </h4>
                    <ul>
                      {policy.policyBizTypeCode.includes('003002001') ? (
                        <li className='policy_tag1_2'>서울 </li>
                      ) : policy.policyBizTypeCode.includes('003002002') ? (
                        <li className='policy_tag1_2'> 부산</li>
                      ) : policy.policyBizTypeCode.includes('003002003') ? (
                        <li className='policy_tag1_2'>대구</li>
                      ) : policy.policyBizTypeCode.includes('003002004') ? (
                        <li className='policy_tag1_2'>인천</li>
                      ) : policy.policyBizTypeCode.includes('003002005') ? (
                        <li className='policy_tag1_2'>광주</li>
                      ) : policy.policyBizTypeCode.includes('003002006') ? (
                        <li className='policy_tag1_2'>대전</li>
                      ) : policy.policyBizTypeCode.includes('003002007') ? (
                        <li className='policy_tag1_2'>울산</li>
                      ) : policy.policyBizTypeCode.includes('003002008') ? (
                        <li className='policy_tag1_2'>경기</li>
                      ) : policy.policyBizTypeCode.includes('003002009') ? (
                        <li className='policy_tag1_2'>강원</li>
                      ) : policy.policyBizTypeCode.includes('003002010') ? (
                        <li className='policy_tag1_2'>충북</li>
                      ) : policy.policyBizTypeCode.includes('003002011') ? (
                        <li className='policy_tag1_2'>충남</li>
                      ) : policy.policyBizTypeCode.includes('003002012') ? (
                        <li className='policy_tag1_2'>전북</li>
                      ) : policy.policyBizTypeCode.includes('003002013') ? (
                        <li className='policy_tag1_2'>전남</li>
                      ) : policy.policyBizTypeCode.includes('003002014') ? (
                        <li className='policy_tag1_2'>경북</li>
                      ) : policy.policyBizTypeCode.includes('003002015') ? (
                        <li className='policy_tag1_2'>경남</li>
                      ) : policy.policyBizTypeCode.includes('003002016') ? (
                        <li className='policy_tag1_2'>제주</li>
                      ) : policy.policyBizTypeCode.includes('003002017') ? (
                        <li className='policy_tag1_2'>세종</li>
                      ) : (
                        <li className='policy_tag1_1'>중앙부처</li>
                      )}

                      {policy.policyBizTypeName === '취업지원' ? (
                        <li className='policy_tag2_1'>
                          {policy.policyBizTypeName}
                        </li>
                      ) : policy.policyBizTypeName === '창업지원' ? (
                        <li className='policy_tag2_2'>
                          {policy.policyBizTypeName}
                        </li>
                      ) : policy.policyBizTypeName === '주거·금융' ? (
                        <li className='policy_tag2_3'>
                          {policy.policyBizTypeName}
                        </li>
                      ) : policy.policyBizTypeName === '생활·복지' ? (
                        <li className='policy_tag2_4'>
                          {policy.policyBizTypeName}
                        </li>
                      ) : policy.policyBizTypeName === '정책참여' ? (
                        <li className='policy_tag2_5'>
                          {policy.policyBizTypeName}
                        </li>
                      ) : (
                        <li className='policy_tag2_6'>
                          {policy.policyBizTypeName}
                        </li>
                      )}

                      {/* <li>{getScrapCheck(policy.policyId)}</li> */}
                      {/* <li>{scrapCheck}</li> */}
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
        </div>
      </MainPolicyArea>

      {clipPopup && (
        <AlertOneBtn
          offAlert={setClipPopup}
          text={`스크랩이 ${clipStat}되었습니다.`}
        />
      )}
    </>
  );
};

export default MainPolicy;
