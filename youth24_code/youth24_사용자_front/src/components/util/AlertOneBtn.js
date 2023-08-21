import { NavLink } from 'react-router-dom';
import { AlertArea } from 'style/StylePopup';

const AlertOneBtn = (props) => {
  return (
    <>
      <AlertArea>
        <div className='alert_box one'>
          <p>{props.text}</p>
          <NavLink onClick={() => props.offAlert(false)}>확인</NavLink>
        </div>
      </AlertArea>

      {/* <div>
        <p>test : {props.text}</p>
        <button onClick={() => props.offAlert(false)}>
          test : {props.btntext}
        </button>
        <button onClick={() => props.func()}>
          test : 값으로 함수를 보낼 수 있을까?
        </button>
      </div> */}
    </>
  );
};

export default AlertOneBtn;
