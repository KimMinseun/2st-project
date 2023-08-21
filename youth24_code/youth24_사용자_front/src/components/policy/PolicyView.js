import { NavLink, useParams } from 'react-router-dom';
import { PolicyViewArea, PolicyViewInner } from 'style/StylePolicy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye as solidEye } from '@fortawesome/free-solid-svg-icons/faEye';
// import { faDownload as solidDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import PolicyChartView from './PolicyChartView';
import { useDispatch, useSelector } from 'react-redux';
import { policyActions } from 'reduxs/actions/policy_action';
import { useEffect } from 'react';
import { baseUrl } from 'apiurl';
import { TagColor, TagColorArea } from 'components/util/TagColor';
import AlertOneBtn from 'components/util/AlertOneBtn';
import { useState } from 'react';

const PolicyView = () => {
  const [clipPopup, setClipPopup] = useState(false);
  const [clipStat, setClipStat] = useState('');
  const { policyId } = useParams();
  const dispatch = useDispatch();
  const userKeynum = localStorage.getItem('userKeynum');

  //정책 상세정보 가져오기
  const getPolicyDetail = (policyId) => {
    console.log(localStorage.getItem('userId'));
    dispatch(policyActions.getPolicyDetail(policyId));
  };

  //정책 통계정보 가져오기
  const getViewDetail = (policyId) => {
    dispatch(policyActions.getViewDetail(policyId));
  };

  // 정책 이미지 가져오기
  // const getPolicyShow = (policyImages) => {
  //   dispatch(policyActions.getPolicyShow(policyImages));
  // };
  const policyDBDetail = useSelector((state) => state.policy.policyDetail);
  // const pv = useSelector((state) => state.policy.pv);
  const viewDetail = useSelector((state) => state.policy.viewDetail);

  // const scrapCheck = useSelector((state) => state.policy.scrapCheck);

  const comment = (e) => {
    e.preventDefault();
    alert('로그인이 필요한 서비스 입니다.');
  };

  const Scrap = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('policyId', policyId);
    formData.append('userId', localStorage.getItem('userId'));
    console.log(policyId);
    await dispatch(policyActions.postScrap(formData));
    setClipStat('등록');
    setClipPopup(true);
    console.log('스크랩 완료');
    getPolicyDetail(policyId);
    getViewDetail(policyId);
    // window.location.replace(`/policy/view/${policyId}`);
  };

  const unScrap = async (e) => {
    e.preventDefault();
    await dispatch(
      policyActions.getScrapDelete(policyId, localStorage.getItem('userKeynum'))
    );
    dispatch(policyActions.getPolicyDetail(policyId));
    console.log('스크랩 해제');
    setClipStat('해제');
    setClipPopup(true);
    getPolicyDetail(policyId);
    getViewDetail(policyId);
    // window.location.replace(`/policy/view/${policyId}`);
  };

  //   download
  // const handleDownload = async () => {
  //   const boardFile = await dispatch(
  //     policyActions.getPolicyDownload(policyDBDetail.policyImages)
  //   );
  //   console.log(boardFile);
  //   const fileName = policyDBDetail.policyImages.substring(
  //     policyDBDetail.policyImages.indexOf('_') + 1
  //   );
  //   const url = window.URL.createObjectURL(new Blob([boardFile]), {
  //     type: 'application/octet-stream',
  //   });
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.setAttribute('download', fileName);
  //   link.style.cssText = 'display:none';
  //   document.body.appendChild(link);
  //   link.click();
  //   link.remove();
  // };

  console.log('이전 URL: ' + window.history.previousURL);

  // const historyBackLink = () => {
  //   window.history.back();
  //   if (document.referrer.split('/')[2] !== window.location.host) {
  //     window.location.href =
  //       window.location.protocol + '//' + window.location.host;
  //   }
  // };

  useEffect(() => {
    dispatch(policyActions.getPolicyDetail(policyId));
  }, [dispatch, policyId]);

  useEffect(() => {
    const formData = new FormData();
    formData.append('policyId', policyId);
    formData.append('userId', localStorage.getItem('userId'));
    console.log(policyId);
    dispatch(policyActions.updatePolicyCount(formData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(policyActions.getViewDetail(policyId));
  }, [dispatch, policyId]);

  useEffect(() => {
    if (userKeynum !== null) {
      dispatch(policyActions.getScrapCheck(policyId, userKeynum));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, policyId]);

  return (
    <>
      <PolicyViewArea>
        <div className='inner'>
          {/* <h2>
            청년정책통합조회 › 정책상세
            <NavLink to='/' onClick={historyBackLink}>
              뒤로가기
            </NavLink>
          </h2> */}
          <h2>
            청년정책통합조회 › 정책상세
            <NavLink to={`/policy/1`}>뒤로가기</NavLink>
          </h2>
          <PolicyViewInner>
            <ul>
              <li>
                <p>{policyId}</p>
                <ul>
                  <li
                    className={
                      TagColorArea(policyDBDetail.policyBizTypeCode)[0]
                    }
                  >
                    {TagColorArea(policyDBDetail.policyBizTypeCode)[1]}
                  </li>
                  <li className={TagColor(policyDBDetail.policyBizTypeName)}>
                    {policyDBDetail.policyBizTypeName}
                  </li>
                </ul>
              </li>
              <li>
                <div>
                  <h3> {policyDBDetail.policyName}</h3>

                  <p>
                    <FontAwesomeIcon icon={solidEye} />
                    &nbsp;{viewDetail.viewCnt}&nbsp;&nbsp;·&nbsp;&nbsp;
                    <FontAwesomeIcon icon={solidHeart} />
                    &nbsp;{viewDetail.viewScrapcnt}
                  </p>
                </div>
                {localStorage.getItem('userId') === null ? (
                  <button className='full' onClick={comment}>
                    <FontAwesomeIcon icon={regularHeart} />
                  </button>
                ) : policyDBDetail.scrapCount === 0 ? (
                  <button className='active' onClick={Scrap}>
                    <FontAwesomeIcon icon={regularHeart} />
                  </button>
                ) : (
                  <button className='active' onClick={unScrap}>
                    <FontAwesomeIcon icon={solidHeart} />
                  </button>
                )}
                {/* <button className='active'>
                  <FontAwesomeIcon icon={regularHeart} />
                  <FontAwesomeIcon icon={solidHeart} />
                </button> */}
              </li>
              <li>
                <dl>
                  <dt>정책소개</dt>
                  <dd style={{ whiteSpace: 'pre-wrap' }}>
                    {policyDBDetail.policyIntroduce}
                  </dd>
                </dl>
                <dl>
                  <dt>정책부서</dt>
                  <dd>{policyDBDetail.policyAgentName}</dd>
                </dl>
                <dl>
                  <dt>지원규모</dt>
                  <dd style={{ whiteSpace: 'pre-wrap' }}>
                    {policyDBDetail.policyVolume === 'null'
                      ? '미정'
                      : policyDBDetail.policyVolume}
                  </dd>
                </dl>
                <dl>
                  <dt>지원내용</dt>
                  <dd style={{ whiteSpace: 'pre-wrap' }}>
                    {policyDBDetail.policyContent}
                  </dd>
                </dl>
              </li>
              <li>
                <h4>지원자격</h4>
                <dl>
                  <dt>연령</dt>
                  <dd>{policyDBDetail.policyAge}</dd>
                </dl>
                <dl>
                  <dt>취업상태</dt>
                  <dd>{policyDBDetail.policyEmpStatus}</dd>
                </dl>
                <dl>
                  <dt>학력</dt>
                  <dd>{policyDBDetail.policyEducation}</dd>
                </dl>
                <dl>
                  <dt>전공</dt>
                  <dd>{policyDBDetail.policyMajor}</dd>
                </dl>
              </li>
              <li>
                <h4>지원방법</h4>
                <dl>
                  <dt>신청기간</dt>
                  <dd>{policyDBDetail.policyRequestPeriod}</dd>
                </dl>
                <dl>
                  <dt>신청절차</dt>
                  <dd style={{ whiteSpace: 'pre-wrap' }}>
                    {policyDBDetail.policyRequestProcess}
                  </dd>
                </dl>
                <dl>
                  <dt>심사발표</dt>
                  <dd style={{ whiteSpace: 'pre-wrap' }}>
                    {policyDBDetail.policyPrstnDtl}
                  </dd>
                </dl>
              </li>

              {/* 이미지 값 있으면 li 렌더 */}
              {policyDBDetail.policyImages !== null ? (
                <li>
                  <img
                    src={`${baseUrl}/policy/show/${policyDBDetail.policyImages}`}
                    alt=''
                  />
                </li>
              ) : null}

              {/* 첨부파일 값 있으면 li 렌더 */}
              {/* {policyDBDetail.policyImages !== null ? (
                <li className='down'>
                  <a onClick={handleDownload}>
                    <FontAwesomeIcon icon={solidDownload} />
                    {policyDBDetail.policyImages
                      ? policyDBDetail.policyImages.substring(
                          policyDBDetail.policyImages.indexOf('_') + 1
                        )
                      : null}
                  </a>
                </li>
              ) : null} */}

              {/* {policyDBDetail.policyImages !== null ? (
                <li className='down'>
                  <a
                    href={require('assets/images/mainlogo_01.png')}
                    download='test.png'
                  >
                    <FontAwesomeIcon icon={solidDownload} />
                    {policyDBDetail.policyImages
                      ? policyDBDetail.policyImages.substring(
                          policyDBDetail.policyImages.indexOf('_') + 1
                        )
                      : null}
                  </a>
                </li>
              ) : null} */}
              <li>
                <h4>조회 통계</h4>
                <PolicyChartView />
              </li>
            </ul>
          </PolicyViewInner>
        </div>
      </PolicyViewArea>
      {clipPopup && (
        <AlertOneBtn
          offAlert={setClipPopup}
          text={`스크랩이 ${clipStat}되었습니다.`}
        />
      )}
    </>
  );
};

export default PolicyView;
