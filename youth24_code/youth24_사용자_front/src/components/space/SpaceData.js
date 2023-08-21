/* eslint-disable react-hooks/exhaustive-deps */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot as MapClip } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SpaceItem, SpaceList } from 'style/StyleMain';
import SpacePopup from 'components/util/SpacePopup';
import { NodataArea, PaginationArea } from 'style/StyleLayout';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';

const SpaceData = forwardRef((props, ref) => {
  const [spaceValue, setSpaceValue] = useState('');
  const [spacePopup, setSpacePopup] = useState(false);
  const [total, setTotal] = useState(''); // 전체 데이터 수

  const spacePopupHandle = (data, e) => {
    setSpacePopup(!spacePopup);
    e.preventDefault();
    setSpaceValue(data);
  };

  const [data, setData] = useState('');
  const [spaces, setSpaces] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [display, setDisplay] = useState('20'); // 한 페이지에 보이는 데이터 수

  useImperativeHandle(ref, () => ({
    fetchData,
  }));

  const fetchData = async () => {
    const response = await fetch(
      `/api/opi/wantedSpace.do?pageIndex=${pageIndex}&display=${display}&pageType=1&srchSpnm=${props.srchSpace}&srchAreaCpvn=${props.srchArea}&openApiVlak=0f82733f5262955a0727d534`
    );

    const test = `/api/opi/wantedSpace.do?pageIndex=${pageIndex}&display=${display}&pageType=1&srchSpnm=${props.srchSpace}&srchAreaCpvn=${props.srchArea}&openApiVlak=0f82733f5262955a0727d534`;
    console.log(test);

    const textData = await response.text();
    const cleanedData = textData
      .replace(/<homepage>[\s\S]*?<\/homepage>/gi, '')
      .replace(/<foodYn>[\s\S]*?<\/foodYn>/gi, '');

    setData(cleanedData);
  };

  useEffect(() => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'text/xml');
    const spaceNodes = xmlDoc.getElementsByTagName('space');
    const totalNode = xmlDoc.getElementsByTagName('totalCnt')[0];
    const totalData = totalNode ? String(totalNode.textContent) : '';

    const spaces = [];
    for (let i = 0; i < spaceNodes.length; i++) {
      const space = {
        rownum: spaceNodes[i].getElementsByTagName('rownum')[0].textContent,
        spcName: spaceNodes[i].getElementsByTagName('spcName')[0].textContent,
        areaCpvn: spaceNodes[i].getElementsByTagName('areaCpvn')[0].textContent,
        areaSggn: spaceNodes[i].getElementsByTagName('areaSggn')[0].textContent,
        address: spaceNodes[i].getElementsByTagName('address')[0].textContent,
        spcTime: spaceNodes[i].getElementsByTagName('spcTime')[0].textContent,
        telNo: spaceNodes[i].getElementsByTagName('telNo')[0].textContent,
        spcCost: spaceNodes[i].getElementsByTagName('spcCost')[0].textContent,
      };
      spaces.push(space);
    }

    setTotal(totalData);
    setSpaces(spaces);
  }, [data]);

  const [pageIndex, setPageIndex] = useState(1); // 현재 페이지 번호
  const [pages, setPages] = useState([]); // 페이지 번호 목록

  const PAGE_BUTTON_LIMIT = 5; // 최대 페이지 버튼 개수

  // 페이지 목록을 생성하는 함수
  const generatePages = () => {
    const pageCount = Math.ceil(total / display); // 전체 페이지 수
    let start = pageIndex - 2;
    let end = pageIndex + 2;
    if (start < 1) {
      start = 1;
      end = Math.min(start + PAGE_BUTTON_LIMIT - 1, pageCount);
    }
    if (end > pageCount) {
      end = pageCount;
      start = Math.max(end - PAGE_BUTTON_LIMIT + 1, 1);
    }
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    setPages(pages);
  };

  // 페이지 변경 핸들러
  const handlePageChange = (pageIndex) => {
    setPageIndex(pageIndex);
  };

  // 포커스 변경 핸들러
  const handleFocusChange = (index) => {};

  // 맨 앞으로 이동
  const handleMoveFirst = () => {
    if (pageIndex > 1) {
      setPageIndex(1);
    }
  };

  // 맨 뒤로 이동
  const handleMoveLast = () => {
    const pageCount = Math.ceil(total / display);
    if (pageIndex < pageCount) {
      setPageIndex(pageCount);
    }
  };

  // 이전 페이지로 이동
  const handleMovePrev = () => {
    if (pageIndex > 1) {
      setPageIndex(pageIndex - 1);
    }
  };

  // 다음 페이지로 이동
  const handleMoveNext = () => {
    const pageCount = Math.ceil(total / display);
    if (pageIndex < pageCount) {
      setPageIndex(pageIndex + 1);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex, display]); // pageIndex 또는 display 변경 시 fetchData 호출

  useEffect(() => {
    generatePages();
  }, [total, display, pageIndex]); // total, display, pageIndex 변경 시 generatePages 호출

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <p>
        Total :&nbsp;<span>{total}</span>건
      </p>
      {/* <p>
      '<span className='text'>@@@</span>'에 대한&nbsp;<span>{total}</span>건의
      검색결과
    </p> */}

      {total === '0' ? (
        <>
          <NodataArea>
            <p>검색 결과가 없습니다.</p>
          </NodataArea>
        </>
      ) : (
        <>
          {' '}
          <SpaceList>
            {spaces.map((space) => (
              <SpaceItem key={space.rownum}>
                <div>
                  <FontAwesomeIcon icon={MapClip}></FontAwesomeIcon>
                  <p>{space.areaSggn}</p>
                </div>
                <h4>
                  <NavLink
                    onClick={(e) => {
                      spacePopupHandle(space, e);
                    }}
                  >
                    {space.spcName}
                  </NavLink>
                </h4>
              </SpaceItem>
            ))}
          </SpaceList>
          <PaginationArea>
            <ul>
              <li>
                <div
                  className={pageIndex === 1 ? 'pagebtn disabled' : 'pagebtn'}
                  onClick={handleMoveFirst}
                >
                  &lt; &lt;
                </div>
              </li>
              <li>
                <div
                  onClick={handleMovePrev}
                  disabled={pageIndex === 1}
                  className={pageIndex === 1 ? 'pagebtn disabled' : 'pagebtn'}
                >
                  &lt;
                </div>
              </li>

              {pages.map((page, index) => (
                <li>
                  <div
                    key={page}
                    onClick={() => handlePageChange(page)}
                    onFocus={() => handleFocusChange(index)}
                    className={pageIndex === page ? 'activePage' : ''}
                  >
                    {page}
                  </div>
                </li>
              ))}
              <li>
                <div
                  onClick={handleMoveNext}
                  disabled={pageIndex === Math.ceil(total / display)}
                  className={
                    pageIndex === Math.ceil(total / display)
                      ? 'pagebtn disabled'
                      : 'pagebtn'
                  }
                >
                  &gt;
                </div>
              </li>
              <li>
                <div
                  onClick={handleMoveLast}
                  disabled={pageIndex === Math.ceil(total / display)}
                  className={
                    pageIndex === Math.ceil(total / display)
                      ? 'pagebtn disabled'
                      : 'pagebtn'
                  }
                >
                  &gt; &gt;
                </div>
              </li>
            </ul>
          </PaginationArea>
        </>
      )}

      {spacePopup && (
        <SpacePopup spaceValue={spaceValue} Close={setSpacePopup} />
      )}
    </>
  );
});

export default SpaceData;
