import { NavLink, useLocation, useParams } from 'react-router-dom';
import { SubpageArea } from 'style/StyleSubpage';
import Faq from 'components/qna/Faq';
import List from 'components/qna/List';

const Qna = () => {
  const location = useLocation();
  const { currentPage } = useParams();

  return (
    <>
      <SubpageArea>
        <div className='inner'>
          <div className='tab_menu'>
            <h2>질문·답변</h2>
            <ul className='subpage_tab'>
              <li>
                <NavLink to='/qna/faq'>자주 묻는 질문(FAQ)</NavLink>
              </li>
              <li>
                {currentPage === undefined ? (
                  <NavLink to='/qna/list/1'>Q&A</NavLink>
                ) : (
                  <NavLink to={`/qna/list/${currentPage}`}>Q&A</NavLink>
                )}
                {/* <NavLink to='/qna/list/1'>Q&A</NavLink> */}
              </li>
            </ul>
          </div>

          {location.pathname === '/qna/faq' && <Faq />}

          {location.pathname === `/qna/list/${currentPage}` && <List />}
        </div>
      </SubpageArea>
    </>
  );
};

export default Qna;
