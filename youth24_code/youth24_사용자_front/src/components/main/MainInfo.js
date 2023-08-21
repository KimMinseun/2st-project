import { MainInfoArea } from 'style/StyleMain';

const MainInfo = () => {
  return (
    <>
      <MainInfoArea>
        <div className='inner'>
          <div>
            <h2>자주 묻는 질문(FAQ)</h2>
            <a href='/qna/faq?q=1'>
              청년우대형 청약통장과 기존 청약 통장의 차이를 알고 싶습니다.
            </a>
            <a href='/qna/faq?q=2'>청년공간은 무료로 이용할 수 있나요?</a>
            <a href='/qna/faq?q=3'>청년내일채움공제가 무엇인가요?</a>
          </div>
          <div>
            <h2>방문·전화상담 안내</h2>
            <p>(12345) 서울특별시 강남구 청년로 24 청년24</p>
            <p>평일 09:00 ~ 18:00 (공휴일 제외)</p>
            <p>1234-0000</p>
          </div>
        </div>
      </MainInfoArea>
    </>
  );
};

export default MainInfo;
