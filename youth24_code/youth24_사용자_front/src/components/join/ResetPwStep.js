import axios from 'axios';
import { baseUrl } from 'apiurl';
import { useState } from 'react';
import { SignArea, SignupForm } from 'style/StyleJoin';
import Alert from '../util/Alert';
import { Link } from 'react-router-dom';

const ResetPwStep = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({
    userInfo: JSON.parse(window.sessionStorage.getItem('userInfo')),
    //userPhone: JSON.parse(window.sessionStorage.getItem("userInfo")),
  });

  //const [notAllow, setNotAllow] = useState(false);
  const [addrPopup, setAddrPopup] = useState(false);
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordValid, setUserPasswordValid] = useState(false);
  const [pwCheck, setPwCheck] = useState('');

  //객체 비구조화 할당
  const { userInfo } = user;

  const config = { headers: { 'Content-Type': 'application/json' } };

  const handlePwChange = (e) => {
    const password = e.target.value;
    setUserPassword(password);
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/i;
    if (regex.test(password)) {
      setUserPasswordValid(true);
    } else {
      setUserPasswordValid(false);
    }
  };

  const pwChange = (e) => {
    e.preventDefault();
    setPwCheck(e.target.value);
    // if (userPassword === e.target.value) {
    //   setPwCheck("");
    // } else {
    //   setPwCheck("비밀번호가 일치하지 않습니다.");
    // }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!userPassword || !userPasswordValid) {
      console.log('비밀번호를 확인해주세요.');
      return;
    }
    // if (pwCheck !== "비밀번호가 일치합니다.") {
    //   //console.log("비밀번호가 일치하지 않습니다.");
    //   //return;
    // }
    // setNotAllow(false);
    await axios
      .post(
        `${baseUrl}/pwReset`,
        {
          userId: userInfo.userId,
          userPassword: userPassword,
        },
        config
      )
      .then((response) => {
        if (response.data === 'ok') {
          console.log('비밀번호가 재설정되었습니다.');
          localStorage.setItem('userPassword', userPassword);
          setAddrPopup(true);
        } else {
          console.log('실패');
        }
      })
      .catch((error) => {
        console.error('오류 발생');
      });
  };

  return (
    <>
      <SignArea>
        <div className='join_inner'>
          <h2>비밀번호 재설정</h2>
          <p>
            {userInfo.userName}님 계정이 확인되었습니다.
            <br />
            비밀번호를 재설정합니다.
          </p>
          <SignupForm>
            <ul className='resetpw'>
              <li>
                <h4>비밀번호</h4>
                <input
                  type='password'
                  name='userPassword'
                  value={userPassword}
                  placeholder='비밀번호를 입력하세요.'
                  onChange={handlePwChange}
                />
                {!userPasswordValid && userPassword.length > 0 && (
                  <p>※ 영문, 특수문자, 숫자 포함 8~16자리</p>
                )}
              </li>
              <li>
                <h4>비밀번호 재확인</h4>
                <input
                  type='password'
                  name='passwordCheck'
                  placeholder='비밀번호를 한번 더 입력하세요.'
                  onChange={pwChange}
                />
                {pwCheck !== userPassword && pwCheck.length !== 0 && (
                  <p>※ 비밀번호가 일치하지 않습니다.</p>
                )}
                {/* <p>※ 비밀번호가 일치하지 않습니다.</p> */}
              </li>
            </ul>
            <button
              className='submit_btn'
              type='submit'
              onClick={onSubmit}
              disabled={
                !userPassword ||
                !userPasswordValid ||
                pwCheck !== userPassword ||
                pwCheck.length === 0
              }
            >
              확인
            </button>
            {addrPopup && (
              <Alert
                offAlert={setAddrPopup}
                text={'비밀번호가 재설정 되었습니다.'}
                btntext={<Link to='/login'>확인</Link>}
              />
            )}
          </SignupForm>
        </div>
      </SignArea>
    </>
  );
};

export default ResetPwStep;
