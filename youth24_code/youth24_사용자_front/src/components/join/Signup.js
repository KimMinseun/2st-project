import { SignArea, SignupForm } from 'style/StyleJoin';
import AddressPopup from 'components/util/AddressPopup';

//import AlertTwoBtn from "components/util/AlertTwoBtn";
//import Alert from "components/Alert";

// som
import { baseUrl } from 'apiurl';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from 'components/util/Alert';

const Signup = () => {
  const [userId, setUserId] = useState('');
  const [usableId, setUsableId] = useState(null);
  const [userPassword, setUserPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [userNameValid, setUserNameValid] = useState(false);
  const [userIdValid, setUserIdValid] = useState(false);
  const [userPasswordValid, setUserPasswordValid] = useState(false);
  // const [notIdCheck, setNotIdCheck] = useState(true);
  const [pwCheck, setPwCheck] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [phone3, setPhone3] = useState('');
  const userPhone = phone1 + phone2 + phone3;
  const [addrValue, setAddrValue] = useState({
    zonecode: '',
    address: '',
    sido: '',
  });
  const [inputaddr, setInputaddr] = useState('');
  const userAddress =
    addrValue.zonecode +
    '/' +
    addrValue.address +
    '/' +
    inputaddr +
    '/' +
    addrValue.sido;
  const [birth1, setBirth1] = useState('');
  const [birth2, setBirth2] = useState('');
  const [birth3, setBirth3] = useState('');
  const userBirthdate = birth1 + '-' + birth2 + '-' + birth3;
  const [userGender, setUserGender] = useState('');
  const [userEducation, setUserEducation] = useState('');
  const [userEmpstatus, setUserEmpstatus] = useState('');
  const [addrPopup, setAddrPopup] = useState(false);
  const [addrPopuptwo, setAddrPopuptwo] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addrPopupHandle = () => {
    setAddrPopup(!addrPopup);
  };

  //초기화
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({
    userId: '',
    userPassword: '',
    userName: '',
    userBirthdate: '',
    userGender: '',
    userAddress: '',
    userDistrict: '',
    userPhone: '',
    userEducation: '',
    userEmpstatus: '',
  });

  const config = { headers: { 'Content-Type': 'application/json' } };

  const idCheck = async (e) => {
    e.preventDefault();
    console.log('아이디 중복체크 시도');
    await axios
      .post(`${baseUrl}/user/signup/idCheck`, { userId: userId }, config)
      .then((response) => {
        if (response.data === 'retry') {
        } else if (response.data === 'no') {
          setUsableId(false);
        } else if (response.data === 'ok') {
          setUsableId(true);
        }
      })
      .catch((err) => {
        console.log('실패........');
        console.error(err.message);
      });
  };

  const idCheckReset = () => {
    setUsableId(null);
    setUserId('');
    setUserIdValid(false);
  };

  const onSubmit = async (e) => {
    console.log('시도');
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    await axios
      .post(
        `${baseUrl}/signup`,
        //객체로 담음
        {
          userId: userId,
          userPassword: userPassword,
          userName: userName,
          userPhone: userPhone,
          userAddress: userAddress,
          userBirthdate: userBirthdate,
          userGender: userGender,
          userDistrict: addrValue.sido,
          userEducation: userEducation,
          userEmpstatus: userEmpstatus,
        },
        config
      )
      .then((response) => {
        setUser({
          userId: '',
          userPassword: '',
          userName: '',
          userBirthdate: '',
          userGender: '',
          userAddress: '',
          userDistrict: '',
          userPhone: '',
          userEducaiton: '',
          userEmpstatus: '',
        });
        setAddrPopuptwo(true);
        //localStorage.setItem("userPassword", userPassword);
        window.sessionStorage.setItem(
          'userBirthdate',
          JSON.stringify(userBirthdate)
        );
      })
      .catch((err) => {
        console.log('실패');
        console.error(err.message);
      });
  };

  const handleIdChange = (e) => {
    const id = e.target.value;
    setUserId(id);
    const regex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{4,12}$/i;
    if (regex.test(id)) {
      setUserIdValid(true);
      // setNotIdCheck(false);
    } else {
      setUserIdValid(false);
      // setNotIdCheck(true);
    }
  };

  const [checkPw, setCheckPw] = useState('');

  const handlePwChange = (e) => {
    const password = e.target.value;
    setUserPassword(password);
    const regex =
      // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/i;
    if (regex.test(password)) {
      setUserPasswordValid(true);
    } else {
      setUserPasswordValid(false);
    }

    if (checkPw !== e.target.value) {
      setPwCheck('※ 비밀번호가 일치하지 않습니다.');
    } else {
      setPwCheck('');
    }
  };

  const pwChange = (e) => {
    e.preventDefault();
    setPwCheck(e.target.value);
    setCheckPw(e.target.value);
    if (userPassword !== e.target.value) {
      setPwCheck('※ 비밀번호가 일치하지 않습니다.');
    } else {
      setPwCheck('');
    }
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setUserName(name);
    const regex = /[^ㄱ-ㅎ|가-힣]/;
    if (regex.test(name)) {
      setUserNameValid(false);
    } else {
      setUserNameValid(true);
    }
  };

  const handleInputaddr = (e) => {
    setInputaddr(e.target.value);
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

  const handleBirthChange1 = (e) => {
    const regex = e.target.value.replace(/[^0-9]/g, '');
    setBirth1(regex.slice(0, 4));
  };

  const handleBirthChange2 = (e) => {
    const regex = e.target.value.replace(/[^0-9]/g, '');
    setBirth2(regex.slice(0, 2));
  };

  const handleBirthChange3 = (e) => {
    const regex = e.target.value.replace(/[^0-9]/g, '');
    setBirth3(regex.slice(0, 2));
  };

  const handleGenderChange = (e) => {
    setUserGender(e.target.value);
  };

  const handleEducationChange = (e) => {
    setUserEducation(e.target.value);
  };

  const handleEmpstatusChange = (e) => {
    setUserEmpstatus(e.target.value);
  };

  return (
    <>
      <SignArea>
        <div className='join_inner'>
          <h2>회원가입</h2>
          <p>청년24 회원가입을 환영합니다.</p>
          <SignupForm onSubmit={onSubmit}>
            <ul className='signup'>
              <li>
                <h4>아이디</h4>
                <input
                  type='text'
                  name='userId'
                  placeholder='아이디를 입력하세요.'
                  value={userId}
                  onChange={handleIdChange}
                  readOnly={usableId === true}
                />
                {usableId !== true && (
                  <button
                    disabled={!userIdValid}
                    className='submit_btn'
                    type='submit'
                    onClick={idCheck}
                  >
                    중복확인
                  </button>
                )}
                {usableId === true && (
                  <button
                    className='submit_btn'
                    type='submit'
                    onClick={idCheckReset}
                  >
                    아이디 재설정
                  </button>
                )}
                {!userId ||
                  (!userIdValid && userId.length > 0 && (
                    <p>아이디를 확인해주세요. (영문소문자/숫자 포함, 4~12자)</p>
                  ))}

                {usableId === null && <p>※ 아이디 중복확인을 진행해주세요.</p>}
                {usableId === false && (
                  <p>
                    ※ 이미 존재하는 아이디입니다. 다른 아이디를 사용해주세요.
                  </p>
                )}
                {usableId === true && <p>※ 사용 가능한 아이디입니다.</p>}
              </li>
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
                  placeholder='비밀번호를 한 번 더 입력하세요.'
                  onChange={pwChange}
                />
                <div>{pwCheck && <span>{pwCheck}</span>}</div>
              </li>
              <li>
                <h4>성명</h4>
                <input
                  type='text'
                  name='userName'
                  value={userName}
                  placeholder='성명을 입력하세요.'
                  onChange={handleNameChange}
                />
                {!userNameValid && userName.length > 0 && (
                  <p>※ 한글만 입력 가능합니다.</p>
                )}
              </li>
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
                  placeholder='0000'
                  id='phone2'
                  value={phone2}
                  onChange={handlePhoneChange2}
                />
                <input
                  type='text'
                  placeholder='0000'
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
                  placeholder='상세주소를 입력하세요.'
                  value={inputaddr}
                  onChange={handleInputaddr}
                />
                <input type='text' value={addrValue.sido} />
              </li>
              <li>
                <h4>생년월일</h4>
                <input
                  type='text'
                  placeholder='0000'
                  maxLength='4'
                  id='birth1'
                  value={birth1}
                  onChange={handleBirthChange1}
                />
                <input
                  type='text'
                  placeholder='00'
                  maxLength='2'
                  id='birth2'
                  value={birth2}
                  onChange={handleBirthChange2}
                />
                <input
                  type='text'
                  placeholder='00'
                  maxLength='2'
                  id='birth3'
                  value={birth3}
                  onChange={handleBirthChange3}
                />
              </li>
              <li>
                <h4>성별</h4>
                <select value={userGender} onChange={handleGenderChange}>
                  <option value=''>성별을 선택해주세요.</option>
                  <option value='남성'>남성</option>
                  <option value='여성'>여성</option>
                </select>
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
            </ul>
            <button
              disabled={
                !usableId ||
                !userPassword ||
                !userName ||
                !userPhone ||
                !userBirthdate ||
                !addrValue.address ||
                !userEducation ||
                !userGender ||
                !userEmpstatus ||
                isSubmitting
              }
              className='submit_btn'
              type='submit'
            >
              회원가입
            </button>
            {addrPopuptwo && (
              <Alert
                offAlert={setAddrPopuptwo}
                text={'회원가입이 완료되었습니다.'}
                btntext={<Link to='/login'>확인</Link>}
              />
            )}
          </SignupForm>
        </div>
      </SignArea>

      {/* 주소찾기 popup */}
      {addrPopup ? (
        <AddressPopup setAddrValue={setAddrValue} Close={setAddrPopup} />
      ) : (
        ''
      )}
    </>
  );
};

export default Signup;
