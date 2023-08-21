import DaumPostcode from 'react-daum-postcode';
import { PopupArea } from 'style/StylePopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes as solidTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

const AddressPopup = (props) => {
  const handleComplete = (data) => {
    props.setAddrValue({
      zonecode: data.zonecode,
      address: data.address,
      sido: data.sido,
    });

    props.Close(false);
  };

  return (
    <>
      <PopupArea>
        <div className='popup_box'>
          <h4 className='popup_header'>
            주소 찾기
            <button type='button' onClick={() => props.Close(false)}>
              <FontAwesomeIcon icon={solidTimes}></FontAwesomeIcon>
            </button>
          </h4>
          <DaumPostcode onComplete={handleComplete} className='post-code' />
        </div>
      </PopupArea>
    </>
  );
};

export default AddressPopup;
