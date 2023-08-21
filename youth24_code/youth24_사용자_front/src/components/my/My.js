import Info from 'components/my/Info';
import Clip from 'components/my/Clip';
import { NavLink, useLocation } from 'react-router-dom';
import { SubpageArea } from 'style/StyleSubpage';

const My = () => {
  const location = useLocation();

  return (
    <>
      <SubpageArea>
        <div className='inner'>
          <div className='tab_menu'>
            <h2>마이페이지</h2>
            <ul className='subpage_tab'>
              <li>
                <NavLink to='/my/info'>회원정보 관리</NavLink>
              </li>
              <li>
                <NavLink to={`/my/clip/${localStorage.getItem('userKeynum')}`}>
                  스크랩한 정책
                </NavLink>
              </li>
            </ul>
          </div>

          {location.pathname === '/my/info' && <Info />}
          {location.pathname ===
            `/my/clip/${localStorage.getItem('userKeynum')}` && <Clip />}
        </div>
      </SubpageArea>
    </>
  );
};

export default My;
