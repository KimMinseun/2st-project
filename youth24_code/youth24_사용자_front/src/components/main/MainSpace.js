import { NavLink } from 'react-router-dom';
import { MainSpaceArea, SpaceItem, SpaceList } from 'style/StyleMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot as MapClip } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { useEffect } from 'react';
import { useState } from 'react';
import SpacePopup from 'components/util/SpacePopup';

const MainSpace = () => {
  // eslint-disable-next-line no-unused-vars
  const [spaceValue, setSpaceValue] = useState('');
  const [spacePopup, setSpacePopup] = useState(false);

  const spacePopupHandle = (data, e) => {
    setSpacePopup(!spacePopup);
    e.preventDefault();
    setSpaceValue(data);
  };

  const [data, setData] = useState('');
  const [spaces, setSpaces] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `/api/opi/wantedSpace.do?pageIndex=1&display=4&pageType=1&openApiVlak=0f82733f5262955a0727d534`
    );

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

    setSpaces(spaces);
  }, [data]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MainSpaceArea>
        <div className='inner'>
          <h2>
            청년공간
            <NavLink to='/space'>더보기&nbsp;&nbsp;&gt;&gt;</NavLink>
          </h2>
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
        </div>
      </MainSpaceArea>
      {spacePopup && (
        <SpacePopup spaceValue={spaceValue} Close={setSpacePopup} />
      )}
    </>
  );
};

export default MainSpace;
