import { StyleReset } from 'style/StyleReset';
import BaseLayout from 'components/layout/BaseLayout';
import Main from 'components/main/Main';
import Login from 'components/join/Login';
import Signup from 'components/join/Signup';
import FindId from 'components/join/FindId';
import { Route, Routes } from 'react-router-dom';
import ResetPw from 'components/join/ResetPw';
import ResetPwStep from 'components/join/ResetPwStep';
import PageNotFound from 'components/util/PageNotFound';
import PrivateRoute from 'access/PrivateRoute';
import Logout from 'components/join/Logout';
import My from 'components/my/My';
import Qna from 'components/qna/Qna';
import Policy from 'components/policy/Policy';
import Space from 'components/space/Space';
import PolicyView from 'components/policy/PolicyView';
import BoardView from 'components/qna/board_view';
import BoardWrite from 'components/qna/board_write';
import BoardUpdate from 'components/qna/board_update';

function App() {
  return (
    <>
      <StyleReset />
      <Routes>
        {/* -------------------- 사용자 영역 -------------------- */}
        <Route path='/' element={<BaseLayout />}>
          {/* 메인 */}
          <Route index element={<Main />} />

          {/* 로그인 */}
          <Route
            path='login'
            element={<PrivateRoute isAuth={false} RouteComponent={Login} />}
          />

          <Route
            path='logout'
            element={<PrivateRoute isAuth={true} RouteComponent={Logout} />}
          />

          {/* 로그인 / 아이디 찾기 */}
          <Route
            path='login/findId'
            element={<PrivateRoute isAuth={false} RouteComponent={FindId} />}
          />

          {/* 로그인 / 비밀번호 재설정 */}
          <Route
            path='login/resetPw'
            element={<PrivateRoute isAuth={false} RouteComponent={ResetPw} />}
          />

          {/* 로그인 / 비밀번호 재설정 */}
          <Route
            path='login/resetPw/step'
            element={
              <PrivateRoute isAuth={false} RouteComponent={ResetPwStep} />
            }
          />

          {/* 회원가입 */}
          <Route
            path='signup'
            element={<PrivateRoute isAuth={false} RouteComponent={Signup} />}
          />

          {/* 청년정책통합조회 */}
          <Route
            path='policy/:currentPage'
            element={<PrivateRoute isAuth={false} RouteComponent={Policy} />}
          />

          {/* 청년정책상세조회 */}
          <Route
            path='policy/view/:policyId'
            element={
              <PrivateRoute isAuth={false} RouteComponent={PolicyView} />
            }
          />

          {/* 청년공간 */}
          <Route
            path='space'
            element={<PrivateRoute isAuth={false} RouteComponent={Space} />}
          />

          {/* 질문·답변 / 자주 묻는 질문(FAQ) */}
          <Route
            path='qna/faq'
            element={<PrivateRoute isAuth={false} RouteComponent={Qna} />}
          />

          {/* 질문·답변 / Q&A */}
          <Route
            path='qna/list/:currentPage'
            element={<PrivateRoute isAuth={false} RouteComponent={Qna} />}
          />
          {/* 질문답변글 상세보기 */}
          <Route
            path='qna/view/:qnaKeynum'
            element={<PrivateRoute isAuth={false} RouteComponent={BoardView} />}
          />
          {/* 질문 글쓰기 */}
          <Route
            path='qna/write'
            element={
              <PrivateRoute isAuth={false} RouteComponent={BoardWrite} />
            }
          />
          {/* 질문 수정하기 */}
          <Route
            path='qna/update/:qnaKeynum'
            element={
              <PrivateRoute isAuth={true} RouteComponent={BoardUpdate} />
            }
          />

          {/* 마이페이지 / 회원정보 관리 */}
          <Route
            path='my/info'
            element={<PrivateRoute isAuth={false} RouteComponent={My} />}
          />

          {/* 마이페이지 / 스크랩한 정책 */}
          <Route
            path='my/clip/:userKeynum'
            element={<PrivateRoute isAuth={false} RouteComponent={My} />}
          />
        </Route>

        <Route>
          <Route path='/*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
