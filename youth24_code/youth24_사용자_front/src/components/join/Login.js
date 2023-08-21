import { SignArea } from 'style/StyleJoin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as solidUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faLock as solidLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { NavLink } from 'react-router-dom';

// som
import { baseUrl } from 'apiurl';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import AlertOneBtn from 'components/util/AlertOneBtn';

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    userId: '',
    userPassword: '',
  });

  const { userId, userPassword } = loginForm;
  const [isIdFocused, setIsIdFocused] = useState(false);
  const [isPwFocused, setIsPwFocused] = useState(false);
  const [addrPopup, setAddrPopup] = useState(false);

  /* 아이디 기억하기 */
  const [isRemember, setIsRemember] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['rememberUserId']);

  const handleLoginForm = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleIdFocus = () => {
    setIsIdFocused(true);
  };

  const handlePwFocus = () => {
    setIsPwFocused(true);
  };

  const handleIdBlur = () => {
    setIsIdFocused(false);
  };

  const handlePwBlur = () => {
    setIsPwFocused(false);
  };

  const navigator = useNavigate();

  const config = { headers: { 'Content-Type': 'application/json' } };

  useEffect(() => {
    if (cookies.rememberUserId !== undefined) {
      setLoginForm({ ...loginForm, userId: cookies.rememberUserId });
      setIsRemember(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnChange = (e) => {
    //체크박스 상태 업데이트
    setIsRemember(e.target.checked);
    if (e.target.checked) {
      //쿠키에 userId 값 저장, 유효기간 2000초
      setCookie('rememberUserId', loginForm.userId, { maxAge: 2000 });
    } else {
      //체크 안 되어 있으면 쿠키 삭제
      removeCookie('rememberUserId');
    }
  };

  //입력한 로그인 정보 보내기
  const onSubmit = async (e) => {
    //기본 동작 막음
    e.preventDefault();
    await axios
      .post(`${baseUrl}/login`, loginForm, config)
      .then((response) => {
        console.log('response: ', response.data);
        let jwtToken = response.headers.get('Authorization');
        console.log(jwtToken);

        let jwtUserName = response.data.userName;
        let jwtUserId = response.data.userId;
        let jwtUserPassword = response.data.userPassword;
        let jwtAuthRole = response.data.authRole;
        let jwtUserBirthdate = response.data.userBirthdate;
        let jwtUserPhone = response.data.userPhone;
        let jwtUserGender = response.data.userGender;
        let jwtUserAddress = response.data.userAddress;
        let jwtUserEducation = response.data.userEducation;
        let jwtUserEmpstatus = response.data.userEmpstatus;
        let jwtUserKeynum = response.data.userKeynum;

        localStorage.setItem('Authorization', jwtToken);
        localStorage.setItem('userId', jwtUserId);
        localStorage.setItem('userName', jwtUserName);
        localStorage.setItem('authRole', jwtAuthRole);
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem('userPassword', jwtUserPassword);
        localStorage.setItem('userGender', jwtUserGender);
        localStorage.setItem('userBirthdate', jwtUserBirthdate);
        localStorage.setItem('userPhone', jwtUserPhone);
        localStorage.setItem('userAddress', jwtUserAddress);
        localStorage.setItem('userEducation', jwtUserEducation);
        localStorage.setItem('userEmpstatus', jwtUserEmpstatus);
        localStorage.setItem('userKeynum', jwtUserKeynum);

        setLoginForm({ userId: '', userPassword: '' });
      })
      .then((response) => {
        //navigator('/'); 를 사용하려면 위에 const navigator = useNavigate(); 선언필요
        //페이지 리다이렉트
        console.log(localStorage.userId);
        console.log(localStorage.userPassword);
        console.log(localStorage.userBirthdate);
        navigator('/');
      })
      .catch((err) => {
        setAddrPopup(true);
        console.error(err.message);
      });
  };

  return (
    <>
      <SignArea>
        <div className='join_inner'>
          <h2>로그인</h2>
          <p>로그인 후 청년24의 다양한 서비스를 이용하세요.</p>
          <form onSubmit={onSubmit}>
            <div
              className={isIdFocused ? 'icon_input id_active' : 'icon_input'}
            >
              <FontAwesomeIcon
                icon={solidUser}
                className={isIdFocused ? 'id_active' : ''}
              ></FontAwesomeIcon>
              <input
                type='text'
                placeholder='아이디'
                name='userId'
                value={userId}
                onFocus={handleIdFocus}
                onBlur={handleIdBlur}
                onChange={handleLoginForm}
              />
            </div>
            <div
              className={isPwFocused ? 'icon_input pw_active' : 'icon_input'}
            >
              <FontAwesomeIcon
                icon={solidLock}
                className={isPwFocused ? 'pw_active' : ''}
              ></FontAwesomeIcon>
              <input
                type='password'
                placeholder='비밀번호'
                name='userPassword'
                value={userPassword}
                onFocus={handlePwFocus}
                onBlur={handlePwBlur}
                onChange={handleLoginForm}
              />
            </div>

            <label for='idSet' class='sign_checkbox'>
              <input
                type='checkbox'
                id='idSet'
                onChange={handleOnChange}
                checked={isRemember}
              />
              <span class='cbx'>
                <svg width='15px' height='15px' viewBox='0 0 15 15'>
                  <polyline points='2 5 5 9 10 3'></polyline>
                </svg>
              </span>
              <span>아이디 기억하기</span>
            </label>

            <button className='submit_btn' type='submit'>
              로그인
            </button>
            {addrPopup && (
              <AlertOneBtn
                offAlert={setAddrPopup}
                text={'아이디 또는 비밀번호를 확인해주세요.'}
              />
            )}
          </form>

          <p>
            <NavLink to='/login/findId'>아이디 찾기</NavLink>
            <span>·</span>
            <NavLink to='/login/resetPw'>비밀번호 재설정</NavLink>
            <span>·</span>
            <NavLink to='/signup'>회원가입</NavLink>
          </p>
        </div>
      </SignArea>
    </>
  );
};

export default Login;
