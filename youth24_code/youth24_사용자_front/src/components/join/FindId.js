import axios from 'axios';
import { baseUrl } from 'apiurl';
import { useState } from 'react';
import { SignArea, SignupForm } from 'style/StyleJoin';
import AlertTwoBtn from '../util/AlertTwoBtn';
import AlertOneBtn from 'components/util/AlertOneBtn';

const FindId = () => {
  // const [user, setUser] = useState({
  //   userName: "",
  //   // userPhone: phone1 + phone2 + phone3,
  // });

  //서버 데이터 담을 변수
  const [userData, setUserData] = useState('');
  const [addrPopup, setAddrPopup] = useState(false);
  // const [next, setNext] = useState(false);

  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [phone3, setPhone3] = useState('');
  const userPhone = phone1 + phone2 + phone3;
  const [userName, setUserName] = useState('');

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

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const config = { headers: { 'Content-Type': 'application/json' } };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${baseUrl}/findId`,
        { userName: userName, userPhone: userPhone },
        config
      )
      .then((response) => {
        //console.log("아이디 찾기 시도");
        //console.log("아이디 : ", response.data);
        if (response.data === '불일치') {
          console.log('불일치');
          setAddrPopup(null);
          //setUserData(null);
          //alert("일치하는 회원 정보가 없습니다.");
        } else {
          console.log('일치');
          //setNext(true);
          setAddrPopup(true);
          setUserData(response.data);
          //alert(`아이디 : ${response.data}`); //문자열 + 데이터 = 벡틱 감싸야 함.
        }
      })
      .catch((err) => {
        console.error(err.message);
        //alert("해당 정보를 확인할 수 없습니다.");
      });
  };
  return (
    <>
      <SignArea>
        <div className='join_inner'>
          <h2>아이디 찾기</h2>
          <p>회원정보를 입력해주세요.</p>
          <SignupForm onSubmit={onSubmit}>
            <ul className='findid'>
              <li>
                <h4>성명</h4>
                <input
                  type='text'
                  id='userName'
                  value={userName}
                  placeholder='성명을 입력하세요.'
                  onChange={handleNameChange}
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
              disabled={!userName || !phone1 || !phone2 || !phone3}
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
                  <AlertTwoBtn
                    text={<p>아이디 : {userData}</p>}
                    btnOneText={'로그인'}
                    btnTwoText={'비밀번호 재설정'}
                    btnOneLink={'/login'}
                    btnTwoLink={'/login/resetPw'}
                  />
                )}
              </>
            )}
          </SignupForm>
        </div>
      </SignArea>
    </>
  );
};

export default FindId;
