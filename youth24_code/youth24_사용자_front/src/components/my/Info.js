import axios from 'axios';
import AddressPopup from 'components/util/AddressPopup';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SignupForm } from 'style/StyleJoin';
import { baseUrl } from 'apiurl';
import { InfoTabpage, UserDeleteArea } from 'style/StyleSubpage';
import Alert from 'components/util/Alert';
import AlertTwoBtn2 from 'components/util/AlertTwoBtn2';
import AlertOneBtn from 'components/util/AlertOneBtn';
//import bcrypt from "bcrypt";

const Info = () => {
  const [addrPopup, setAddrPopup] = useState(false);
  const [addrValue, setAddrValue] = useState({
    zonecode: '',
    address: '',
    inputaddr: '',
    sido: '',
  });

  const userAddress =
    addrValue.zonecode +
    '/' +
    addrValue.address +
    '/' +
    addrValue.inputaddr +
    '/' +
    addrValue.sido;

  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [phone3, setPhone3] = useState('');
  const userPhone = phone1 + phone2 + phone3;
  const [userEducation, setUserEducation] = useState('');
  const [userEmpstatus, setUserEmpstatus] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordValid, setUserPasswordValid] = useState(false);

  //만 나이 계산
  const [age, setAge] = useState(0);
  useEffect(() => {
    const today = new Date();
    const birthDate = new Date(localStorage.getItem('userBirthdate'));
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  }, []);

  const [pwCheck, setPwCheck] = useState('');
  const [pwPopup, setPwPopup] = useState(false);
  const [infoPopup, setInfoPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);

  useEffect(() => {
    const localPhone1 = localStorage.getItem('userPhone')?.substring(0, 3);
    const localPhone2 = localStorage.getItem('userPhone')?.substring(3, 7);
    const localPhone3 = localStorage.getItem('userPhone')?.substring(7, 11);
    const localuserEducation = localStorage.getItem('userEducation');
    const localuserEmpstatus = localStorage.getItem('userEmpstatus');

    if (localPhone1) {
      setPhone1(localPhone1);
    }
    if (localPhone2) {
      setPhone2(localPhone2);
    }
    if (localPhone3) {
      setPhone3(localPhone3);
    }

    const localuserAddress1 = localStorage.getItem('userAddress');
    if (localuserAddress1) {
      const addressArray = localuserAddress1.split('/');
      setAddrValue((prev) => ({
        ...prev,
        zonecode: addressArray[0],
        address: addressArray[1],
        inputaddr: addressArray[2],
        sido: addressArray[3],
      }));
    }
    if (localuserEducation) {
      setUserEducation(localuserEducation);
    }
    if (localuserEmpstatus) {
      setUserEmpstatus(localuserEmpstatus);
    }
  }, []);

  const handlePhoneChange1 = (e) => {
    const regex = e.target.value.replace(/[^0-9]/g, '');
    setPhone1(regex.slice(0, 3));
    localStorage.setItem('phone1', setPhone1(regex.slice(0, 3)));
  };
  const handlePhoneChange2 = (e) => {
    const regex = e.target.value.replace(/[^0-9]/g, '');
    setPhone2(regex.slice(0, 4));
  };
  const handlePhoneChange3 = (e) => {
    const regex = e.target.value.replace(/[^0-9]/g, '');
    setPhone3(regex.slice(0, 4));
  };

  const handleInputaddr = (e) => {
    setAddrValue({ ...addrValue, inputaddr: e.target.value });
  };

  const addrPopupHandle = () => {
    setAddrPopup(!addrPopup);
  };

  const handleEducationChange = (e) => {
    setUserEducation(e.target.value);
  };

  const handleEmpstatusChange = (e) => {
    setUserEmpstatus(e.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({
    userId: localStorage.userId,
    // userPassword: "",
    userName: '',
    userPhone: '',
    userAddress: '',
    userEducation: '',
    userEmpstatus: '',
  });

  const config = { headers: { 'Content-Type': 'application/json' } };

  //회원정보 가져오기
  const info = async () => {
    // console.log("정보수정 get 시작");
    return await axios
      .get(
        `${baseUrl}/editInfo/${localStorage.userId}/${localStorage.userName}`,
        config
      )
      .then((response) => {
        setUser({
          ...response.data,
          userPhone: '',
          userAddress: '',
          userEducation: '',
          userEmpstatus: '',
        });
        console.log('get 수행 완료');
      })
      .catch((err) => {
        console.error(err.message);
        console.log('get 실패');
      });
  };

  useEffect(() => {
    info();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNewPassword = (e) => {
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
  };

  //회원정보 수정
  const onSubmit = async (e) => {
    console.log(`${localStorage.userId}`);
    console.log('submit 시작');
    e.preventDefault();
    await axios
      .post(
        `${baseUrl}/editInfo`,
        {
          userId: `${localStorage.userId}`,
          userName: `${localStorage.userName}`,
          userPhone: userPhone,
          userAddress: userAddress,
          userDistrict: addrValue.sido,
          userEducation: userEducation,
          userEmpstatus: userEmpstatus,
        },
        config
      )
      .then((response) => {
        if (response.data === 'ok') {
          localStorage.setItem('userId', `${localStorage.userId}`);
          localStorage.setItem('userPhone', userPhone);
          localStorage.setItem('userAddress', userAddress);
          localStorage.setItem('userEducation', userEducation);
          localStorage.setItem('userEmpstatus', userEmpstatus);

          console.log(localStorage.userPhone);
          console.log(localStorage.userAddress);
          console.log(localStorage.userEducation);
          console.log(localStorage.userEmpstatus);
          console.log('회원정보 수정 완료');
          setInfoPopup(true);
          //navigator("/");
          //window.location.replace("/");
        } else {
          console.log('수정 실패');
        }
      })
      .catch((err) => {
        console.error(err.message);
        alert('해당 정보를 확인할 수 없습니다.');
      });
  };

  //비밀번호 변경
  const pwonSubmit = async (e) => {
    e.preventDefault();
    console.log(localStorage.userId);
    await axios
      .post(
        `${baseUrl}/passwordUpdate`,
        { userId: localStorage.userId, userPassword: userPassword },
        config
      )
      .then((response) => {
        if (response.data === 'ok') {
          console.log('변경 완료');
          localStorage.setItem('userPassword', userPassword);
          setPwPopup(true);
        } else {
          console.log('실패');
        }
      })
      .catch((error) => {
        console.error('오류 발생');
      });
  };

  //회원 탈퇴
  const handleDeleteSubmit = async (e) => {
    console.log('탈퇴 시도할게');
    e.preventDefault();
    //setDeletePopup(true);
    await axios
      .post(
        `${baseUrl}/delete`,
        {
          userId: `${localStorage.userId}`,
          userName: `${localStorage.userName}`,
        },
        config
      )
      .then((response) => {
        if (response.data === 'ok') {
          console.log('완료');
          // alert("회원탈퇴가 완료되었습니다. 감사합니다.");
          window.location.href = '/logout';
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <>
      <InfoTabpage>
        <div className='tab_inner'>
          <h4>회원정보 수정</h4>
          <p>
            {localStorage.userName}(<span>{localStorage.userId}</span>)님의
            회원정보입니다.
            <br />
            <span>
              {localStorage.getItem('userBirthdate')?.substring(0, 4)}-
              {localStorage.getItem('userBirthdate')?.substring(5, 7)}-
              {localStorage.getItem('userBirthdate')?.substring(8, 10)} (만{' '}
              {age}
              세) {localStorage.userGender}
            </span>
          </p>
          <SignupForm onSubmit={onSubmit}>
            <ul className='info_mob'>
              <li>
                <h4>전화번호</h4>
                <input
                  type='text'
                  placeholder='000'
                  id='phone1'
                  value={phone1}
                  onChange={handlePhoneChange1}
                />
                <input
                  type='text'
                  placeholder='000'
                  id='phone2'
                  value={phone2}
                  onChange={handlePhoneChange2}
                />
                <input
                  type='text'
                  placeholder='000'
                  id='phone3'
                  value={phone3}
                  onChange={handlePhoneChange3}
                />
              </li>
              <li>
                <h4>주소</h4>
                <input
                  type='text'
                  value={addrValue.zonecode}
                  placeholder='우편번호'
                  readOnly
                />
                <button type='button' onClick={addrPopupHandle}>
                  주소조회
                </button>
                <input
                  type='text'
                  value={addrValue.address}
                  placeholder='주소'
                  readOnly
                />
                <input
                  type='text'
                  value={addrValue.inputaddr}
                  onChange={handleInputaddr}
                  placeholder='상세주소를 입력하세요.'
                />
                <input type='text' value={addrValue.sido} />
              </li>
              <li>
                <h4>학력</h4>
                <select value={userEducation} onChange={handleEducationChange}>
                  <option value=''>학력을 선택해주세요.</option>
                  <option value='고등학교 졸업 미만'>고등학교 졸업 미만</option>
                  <option value='고등학교 졸업'>고등학교 졸업</option>
                  <option value='대학교 재학중'>대학교 재학중</option>
                  <option value='대학교 졸업 예정'>대학교 졸업 예정</option>
                  <option value='대학교 졸업'>대학교 졸업</option>
                  <option value='석·박사'>석·박사</option>
                </select>
              </li>
              <li>
                <h4>구직상태</h4>
                <select value={userEmpstatus} onChange={handleEmpstatusChange}>
                  <option value=''>구직상태를 선택해주세요.</option>
                  <option value='구직중'>구직중</option>
                  <option value='근로중'>근로중</option>
                </select>
              </li>
              {/* <li>
                <h4>비밀번호</h4>
                <input type="password" placeholder="비밀번호를 입력하세요." />
              </li> */}
            </ul>
            <button
              className='submit_btn'
              type='submit'
              onClick={onSubmit}
              disabled={
                !userPhone ||
                !addrValue.address ||
                !userEducation ||
                !userEmpstatus
              }
            >
              수정
            </button>
            {infoPopup && (
              <AlertOneBtn
                offAlert={setInfoPopup}
                text={'회원정보가 수정되었습니다.'}
              />
            )}
          </SignupForm>
        </div>

        <div className='tab_inner'>
          <h4>비밀번호 변경</h4>
          <SignupForm onSubmit={pwonSubmit}>
            <ul className='info_pw_mob'>
              <li>
                <h4>새로운 비밀번호</h4>
                <input
                  type='password'
                  name='newPassword'
                  value={userPassword}
                  placeholder='새로운 비밀번호를 입력하세요.'
                  onChange={handleNewPassword}
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
                  placeholder='비밀번호를 한 번 더 입력하세요.'
                  onChange={pwChange}
                />
                {pwCheck !== userPassword && pwCheck.length !== 0 && (
                  <p>※ 비밀번호가 일치하지 않습니다.</p>
                )}
                {/* <div>{pwCheck && <span>{pwCheck}</span>}</div>
                <p>※ 비밀번호가 일치하지 않습니다.</p> */}
              </li>
            </ul>
            <button
              className='submit_btn'
              type='submit'
              onClick={pwonSubmit}
              disabled={
                !userPasswordValid ||
                pwCheck !== userPassword ||
                pwCheck.length === 0
              }
            >
              확인
            </button>
            {pwPopup && (
              <Alert
                offAlert={setPwPopup}
                text={'비밀번호가 재설정 되었습니다. 다시 로그인해주세요.'}
                btntext={<Link to='/logout'>확인</Link>}
              />
            )}
          </SignupForm>
        </div>

        <UserDeleteArea>
          <p>
            탈퇴하시면 계정정보 및 스크랩 리스트가 삭제됩니다. 탈퇴하시겠습니까?
            {/* <NavLink to="/">회원탈퇴</NavLink> */}
            <NavLink type='button' onClick={() => setDeletePopup(true)}>
              회원탈퇴
            </NavLink>
            {deletePopup && (
              <AlertTwoBtn2
                offAlert={setDeletePopup}
                func={handleDeleteSubmit}
                text={
                  <p>
                    탈퇴 후 해당 계정을 다시 복구할 수 없습니다. <br />
                    정말 탈퇴 하시겠습니까?
                  </p>
                }
                btnOneText={'취소'}
                btnTwoText={'탈퇴'}
              />
            )}
          </p>
        </UserDeleteArea>
      </InfoTabpage>

      {/* 주소찾기 popup */}
      {addrPopup ? (
        <AddressPopup setAddrValue={setAddrValue} Close={setAddrPopup} />
      ) : (
        ''
      )}
    </>
  );
};
export default Info;
