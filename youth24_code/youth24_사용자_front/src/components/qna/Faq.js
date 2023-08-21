import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaqArea } from 'style/StyleQna';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const index = parseInt(queryParams.get('q'));

    if (!isNaN(index)) {
      setActiveIndex(index - 1); // Subtract 1 from index since array indices start from 0
    }
  }, [location.search]);

  const handleClick = (index) => {
    setActiveIndex(index);
    navigate(`/qna/faq?q=${index + 1}`); // Update the URL query parameter when a title is clicked
  };

  return (
    <>
      <FaqArea>
        <li>
          <h4 onClick={() => handleClick(0)}>
            청년우대형 청약통장과 기존 청약 통장의 차이를 알고 싶습니다.
          </h4>
          <p
            style={{
              height: activeIndex === 0 ? '300px' : '0px',
              padding: activeIndex === 0 ? '20px 20px' : '0 0',
            }}
          >
            청년우대형 청약통장의 경우 청년에게 혜택을 주기 위해 이율이
            상대적으로 높고 세금이 감면되는 혜택이 있습니다. 더 자세한 내용은
            아래 링크를 확인해 주시기 바랍니다.
            <br />
            <br />
            - 주요 혜택: 우대금리 연 최대 3.3%, 이자소득 최대 5백만원 비과세,
            연간 납입 한도 240만원 범위에서 40% 소득공제
            <br />
            ‧ 청년우대형 청약통장: http://nhuf.molit.go.kr/
            <br />
            <br />※ 정책 간 중복 수혜가 불가할 수 있으니, 청년24 카카오톡 상담을
            통해 자세한 상담을 받아보시는 것을 권장 드립니다.
            <br />▶ 카카오톡 상담 바로가기: http://work.kr/kakaoyouths
          </p>
        </li>
        <li>
          <h4 onClick={() => handleClick(1)}>
            청년공간은 무료로 이용할 수 있나요?
          </h4>
          <p
            style={{
              height: activeIndex === 1 ? '300px' : '0px',
              padding: activeIndex === 1 ? '20px 20px' : '0 0',
            }}
          >
            이용하시려는 청년공간 및 공간 이용시간에 따라 비용이 발생할 수
            있습니다.
            <br />
            청년24 공간정보 검색을 통해 가까운 청년공간을 확인 부탁드립니다.
            <br />
            <br />▶ 청년24 청년공간 바로가기:
            https://www.youthcenter.go.kr/jynSpc/jynSpcList.do
            <br />▶ 청년24 바로가기: www.youthcenter.go.kr
            <br />▶ 카카오톡 상담 바로가기: http://work.kr/kakaoyouths
          </p>
        </li>
        <li>
          <h4 onClick={() => handleClick(2)}>청년내일채움공제가 무엇인가요?</h4>
          <p
            style={{
              height: activeIndex === 2 ? '500px' : '0px',
              padding: activeIndex === 2 ? '20px 20px' : '0 0',
            }}
          >
            중소‧중견기업에 정규직으로 취업한 청년들의 장기 재직과 자산형성을
            지원하는 공제로써, 청년‧기업‧정부가 공동으로 공제금을 적립하여 2년
            또는 3년간 근속한 청년에게 성과보상금 형태로 만기공제금을 지원해
            드리는 제도입니다.
            <br />더 자세한 내용은 아래 링크를 확인해 주시기 바랍니다.
            <br />
            <br />
            ▶ 청년내일채움공제: https://www.work.go.kr/youngtomorrow/index.do,
            https://www.sbcplan.or.kr/payment/prdc.do?mCode=C100000000
            <br />
            ▶ 청년재직자 내일채움공제:
            https://www.sbcplan.or.kr/payment/prdc.do?mCode=C100000000
            <br />
            <br />
            ▶ 청년내일채움공제, 청년재직자내일채움공제 비교:
            https://www.youthcenter.go.kr/youngPlcyUnif/popup/youngPlcyUnifCmpr.do?bizId1=2722&bizId2=2906&sn=
            <br />
            <br />※ 정책 간 중복 수혜가 불가할 수 있으니, 청년24 카카오톡 상담을
            통해 자세한 상담을 받아보시는 것을 권장 드립니다. ▶ 카카오톡 상담
            바로가기: http://work.kr/kakaoyouths
          </p>
        </li>
        <li>
          <h4 onClick={() => handleClick(3)}>
            청년24 상담 가능 시간을 알려주세요.
          </h4>
          <p
            style={{
              height: activeIndex === 3 ? '300px' : '0px',
              padding: activeIndex === 3 ? '20px 20px' : '0 0',
            }}
          >
            청년24 청년상담실에서는 카카오톡, 전화, 게시판을 통해 상담서비스를
            이용하실 수 있습니다.
            <br />
            카카오톡 상담은 설·추석 연휴 제외 매일 08:00~21:00에 운영됩니다.
            <br />
            전화 상담은 공휴일을 제외한 평일 09:00~18:00에 운영됩니다.
            <br /> 게시판 상담은 상시 운영하고 있습니다.
            <br />
            자세한 사항은 청년24 홈페이지 또는 카카오톡 상담에서 확인
            부탁드립니다.
            <br />
            <br />▶ 청년24 청년상담실 바로가기:
            https://www.youthcenter.go.kr/jobConslt/jobConsltMain.do
            <br />▶ 카카오톡 상담 바로가기: http://work.kr/kakaoyouths
          </p>
        </li>
      </FaqArea>
    </>
  );
};

export default Faq;
