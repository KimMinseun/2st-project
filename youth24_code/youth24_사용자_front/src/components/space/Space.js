import { SearchArea, SearchForm } from 'style/StylePolicy';
import SpaceData from './SpaceData';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const Space = () => {
  const [srchSpace, setSrchSpace] = useState('');
  const [srchArea, setSrchArea] = useState('');

  const handleChangeName = (e) => {
    setSrchSpace(e.target.value);
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    setSrchArea(value === 'all' ? '' : value);
  };

  const SpaceDataRef = useRef();

  const searchSpaceBtn = () => {
    SpaceDataRef.current.fetchData();
  };

  const resetSearchBtn = () => {
    window.location.reload();
  };

  useEffect(() => {
    searchSpaceBtn();
  }, []);

  return (
    <>
      <SearchArea>
        <div className='inner'>
          <h2>
            <span>청년공간</span>
          </h2>

          <SearchForm>
            <ul>
              <li>
                <h4>
                  <span>장소명</span>
                </h4>
                <input
                  type='text'
                  placeholder='검색어를 입력하세요.'
                  value={srchSpace}
                  onChange={handleChangeName}
                />
              </li>
              <li className='policy_space_box'>
                <h4>
                  <span>지역</span>
                </h4>
                <div>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpaceAll'
                    value='all'
                    defaultChecked
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpaceAll'>전체</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_01'
                    value='003002001'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_01'>서울</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_02'
                    value='003002002'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_02'>부산</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_03'
                    value='003002003'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_03'>대구</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_04'
                    value='003002004'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_04'>인천</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_05'
                    value='003002005'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_05'>광주</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_06'
                    value='003002006'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_06'>대전</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_07'
                    value='003002007'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_07'>울산</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_08'
                    value='003002008'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_08'>경기</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_09'
                    value='003002009'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_09'>강원</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_10'
                    value='003002010'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_10'>충북</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_11'
                    value='003002011'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_11'>충남</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_12'
                    value='003002012'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_12'>전북</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_13'
                    value='003002013'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_13'>전남</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_14'
                    value='003002014'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_14'>경북</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_15'
                    value='003002015'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_15'>경남</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_16'
                    value='003002016'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_16'>제주</label>
                  <input
                    type='radio'
                    name='policySpaceVal'
                    id='policySpace_17'
                    value='003002017'
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor='policySpace_17'>세종</label>
                </div>
              </li>
            </ul>

            <div className='btn_area'>
              <button type='button' onClick={resetSearchBtn}>
                초기화
              </button>
              <button type='button' onClick={searchSpaceBtn}>
                조회
              </button>
            </div>
          </SearchForm>

          {/* {srchArea} */}

          <SpaceData
            ref={SpaceDataRef}
            srchSpace={srchSpace}
            srchArea={srchArea}
          />
        </div>
      </SearchArea>
    </>
  );
};

export default Space;
