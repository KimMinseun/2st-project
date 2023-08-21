import { MainUrlArea } from 'style/StyleMain';

const MainUrl = () => {
  return (
    <>
      <MainUrlArea>
        <div className='inner'>
          <h2>연관 사이트 바로가기</h2>
          <div>
            <a
              href='https://www.moel.go.kr/index.do'
              target='_blank'
              rel='noreferrer'
            >
              <img src={require('assets/images/mainlogo_01.png')} alt='logo' />
            </a>
            <a
              href='https://www.hrd.go.kr/hrdp/ma/pmmao/newIndexRenewal.do'
              target='_blank'
              rel='noreferrer'
            >
              <img src={require('assets/images/mainlogo_02.png')} alt='logo' />
            </a>
            <a
              href='https://www.ei.go.kr/ei/eih/cm/hm/main.do'
              target='_blank'
              rel='noreferrer'
            >
              <img src={require('assets/images/mainlogo_03.png')} alt='logo' />
            </a>
            <a
              href='https://www.keis.or.kr/main/index.do'
              target='_blank'
              rel='noreferrer'
            >
              <img src={require('assets/images/mainlogo_04.png')} alt='logo' />
            </a>
            <a
              href='https://www.work.go.kr/seekWantedMain.do'
              target='_blank'
              rel='noreferrer'
            >
              <img src={require('assets/images/mainlogo_05.png')} alt='logo' />
            </a>
          </div>
        </div>
      </MainUrlArea>
    </>
  );
};

export default MainUrl;
