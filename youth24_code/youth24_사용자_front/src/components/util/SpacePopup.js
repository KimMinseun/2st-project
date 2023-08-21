import { PopupArea, SpacePopupInner } from 'style/StylePopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes as solidTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { useEffect } from 'react';
import Marker from 'assets/images/marker.png';

const SpacePopup = (props) => {
  useEffect(() => {
    const { kakao } = window;
    if (kakao) {
      const mapContainer = document.getElementById('map');
      const mapOptions = {
        center: new kakao.maps.LatLng(37.54699, 127.09598),
        level: 4,
      };
      const map = new kakao.maps.Map(mapContainer, mapOptions);

      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.addressSearch(
        props.spaceValue.address,
        function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            const imageSrc = Marker;
            const imageSize = new kakao.maps.Size(64, 69);
            const imageOption = { offset: new kakao.maps.Point(27, 69) };

            const markerImage = new kakao.maps.MarkerImage(
              imageSrc,
              imageSize,
              imageOption
            );

            const marker = new kakao.maps.Marker({
              position: coords,
              image: markerImage,
            });

            marker.setMap(map);

            map.setCenter(coords);
          }
        }
      );
    }
  }, [props.spaceValue.address]);

  return (
    <>
      <PopupArea>
        <div className='popup_box'>
          <h4 className='popup_header'>
            청년공간 상세
            <button type='button' onClick={() => props.Close(false)}>
              <FontAwesomeIcon icon={solidTimes}></FontAwesomeIcon>
            </button>
          </h4>
          <SpacePopupInner>
            <h2>{props.spaceValue.spcName}</h2>
            <h4>{props.spaceValue.address}</h4>

            <p>
              이용시간<span>{props.spaceValue.spcTime}</span>
            </p>
            <p>
              연락처<span>{props.spaceValue.telNo}</span>
            </p>
            <p>
              이용요금<span>{props.spaceValue.spcCost}</span>
            </p>
          </SpacePopupInner>
          <div id='map' style={{ width: '100%', height: '350px' }}></div>
        </div>
      </PopupArea>
    </>
  );
};

export default SpacePopup;
