import axios from 'axios';
import { baseUrl } from 'apiurl';
import { useState } from 'react';
import { SignArea, SignupForm } from 'style/StyleJoin';
import Alert from '../util/Alert';
import { Link } from 'react-router-dom';
import AlertOneBtn from 'components/util/AlertOneBtn';

const ResetPw = () => {
  const [userInfo, SetUserInfo] = useState({
    userId: '',
    userName: '',
  });

  const { userId, userName } = userInfo;

  //const [userId, setUserId] = useState("");
  //const [userName, setUserName] = useState("");
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [phone3, setPhone3] = useState('');
  const userPhone = phone1 + phone2 + phone3;
  const [addrPopup, setAddrPopup] = useState(false);

  const handleValueChange = (e) => {
    SetUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handlePhoneChange1 = (e) => {
    const regex = e.target.value.replace(/[^0-9]/g, '');
    setPhone1(regex.slice(0, 3));
  };
  const handlePhoneChange2 = (e) => {
    const regex = e.target.value.replace(/[^0-9]/g, '');
    setPhone2(regex.slice(0, 4));
  };
  const handlePhoneChange3 = (e) => {
    const regex = e.target.value.replace(/[^0-9]/g, '');
    setPhone3(regex.slice(0, 4));
  };

  const config = { headers: { 'Content-Type': 'application/json' } };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${baseUrl}/infoCheck`,
        {
          userId: userId,
          userName: userName,
          userPhone: userPhone,
        },
        config
      )
      .then((response) => {
        console.log(response.data);
        if (response.data === '') {
          console.log('해당 정보 찾을 수 없음');
          setAddrPopup(null);
        } else {
          console.log('본인 확인 완료');
          window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
          window.sessionStorage.setItem('userPhone', JSON.stringify(userPhone));

          setAddrPopup(true);
        }
      })
      .catch((err) => {
        console.error(err.message);
        console.log('조회 실패');
      });
  };

  return (
    <>
      <SignArea>
        <div className='join_inner'>
          <h2>본인 확인</h2>
          <p>회원정보를 입력해주세요.</p>
          <SignupForm onSubmit={onSubmit}>
            <ul className='resetpw'>
              <li>
                <h4>아이디</h4>
                <input
                  type='text'
                  name='userId'
                  value={userId}
                  placeholder='아이디를 입력하세요.'
                  onChange={handleValueChange}
                />
              </li>
              <li>
                <h4>성명</h4>
                <input
                  type='text'
                  name='userName'
                  value={userName}
                  placeholder='성명을 입력하세요.'
                  onChange={handleValueChange}
                />
              </li>
              <li>
                <h4>전화번호</h4>
                <input
                  type='text'
                  placeholder='000'
                  maxLength='3'
                  id='phone1'
                  value={phone1}
                  onChange={handlePhoneChange1}
                />
                <input
                  type='text'
                  placeholder='0000'
                  maxLength='4'
                  id='phone2'
                  value={phone2}
                  onChange={handlePhoneChange2}
                />
                <input
                  type='text'
                  placeholder='0000'
                  maxLength='4'
                  id='phone3'
                  value={phone3}
                  onChange={handlePhoneChange3}
                />
                {/* <p className="ok">※ 숫자만 입력 가능합니다.</p> */}
              </li>
            </ul>
            <button
              className='submit_btn'
              type='submit'
              onClick={onSubmit}
              disabled={!userId || !userName || !phone1 || !phone2 || !phone3}
            >
              조회하기
            </button>
            {addrPopup === false ? (
              <div></div>
            ) : (
              <>
                {addrPopup === null ? (
                  <AlertOneBtn
                    offAlert={setAddrPopup}
                    text={'일치하는 회원 정보가 없습니다.'}
                  />
                ) : (
                  <Alert
                    offAlert={setAddrPopup}
                    text={'본인 확인 완료되었습니다.'}
                    btntext={<Link to='/login/resetPw/step'>확인</Link>}
                  />
                )}
              </>
            )}
          </SignupForm>
        </div>
      </SignArea>
      <SignArea>
        <div className='join_inner'>
          <h2>비밀번호 재설정</h2>
          <p>
            김누구(@@@@@@)님 계정이 확인되었습니다.
            <br />
            비밀번호를 재설정합니다.
          </p>
          <SignupForm>
            <ul className='resetpw'>
              <li>
                <h4>비밀번호</h4>
                <input type='password' placeholder='비밀번호를 입력하세요.' />
                <p>※ 영문 대문자, 소문자, 특수문자, 숫자 포함 8~16자리</p>
              </li>
              <li>
                <h4>비밀번호 재확인</h4>
                <input
                  type='password'
                  placeholder='비밀번호를 한번 더 입력하세요.'
                />
                <p>※ 비밀번호가 일치하지 않습니다.</p>
              </li>
            </ul>
            <button className='submit_btn' type='submit'>
              확인
            </button>
          </SignupForm>
        </div>
      </SignArea>
    </>
  );
};

export default ResetPw;
