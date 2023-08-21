import { NavLink, useLocation } from 'react-router-dom';
import * as sl from 'style/StyleLayout';
import LogoColor from 'assets/images/logo_color.png';
import LogoWhite from 'assets/images/logo_white.png';
import { useEffect, useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [isTransparent, setIsTransparent] = useState(true);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // 스크롤 위치 감지
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);

      if (innerWidth > 700) {
        setIsActive(false);
      }
    };

    window.addEventListener('resize', resizeListener);
  });

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <sl.JoinArea location={location}>
        <div className='inner'>
          {localStorage.getItem('userId') === null ? (
            <>
              <p>
                <NavLink to='/login'>로그인</NavLink>
                <span>|</span>
                <NavLink to='/signup'>회원가입</NavLink>
              </p>
            </>
          ) : (
            <>
              <p>
                {localStorage.getItem('userName')}(
                {localStorage.getItem('userId')})님께서 접속중입니다.
                <span>|</span>
                <NavLink to='/logout'>로그아웃</NavLink>
              </p>
            </>
          )}
        </div>
      </sl.JoinArea>

      <sl.NavArea location={location} transparent={isTransparent}>
        <div className='inner'>
          <NavLink to='/'>
            <img
              src={
                location.pathname === '/' && isTransparent && innerWidth > 700
                  ? LogoWhite
                  : LogoColor
              }
              alt='logo'
            />
          </NavLink>

          <sl.MenuTrigger
            onClick={handleClick}
            className={isActive ? 'active' : ''}
          >
            <span></span>
            <span></span>
            <span></span>
          </sl.MenuTrigger>

          <nav className={isActive ? 'active' : ''}>
            <ul>
              <li>
                <NavLink to='policy/1' onClick={handleClick}>
                  청년정책통합조회
                </NavLink>
              </li>
              <li>
                <NavLink to='space' onClick={handleClick}>
                  청년공간
                </NavLink>
              </li>
              <li>
                <NavLink to='qna/faq' onClick={handleClick}>
                  질문·답변
                </NavLink>
              </li>
              <li>
                <NavLink to='my/info' onClick={handleClick}>
                  마이페이지
                </NavLink>
              </li>
              <li className='mob_join_area'>
                {localStorage.getItem('userName') === null ? (
                  <>
                    <p>
                      <NavLink to='/login' onClick={handleClick}>
                        로그인
                      </NavLink>
                      <span>|</span>
                      <NavLink to='/signup' onClick={handleClick}>
                        회원가입
                      </NavLink>
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      {localStorage.getItem('userName')}(
                      {localStorage.getItem('userId')})님
                      <span>|</span>
                      <a href='/'>로그아웃</a>
                    </p>
                  </>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </sl.NavArea>
    </>
  );
};

export default Header;
