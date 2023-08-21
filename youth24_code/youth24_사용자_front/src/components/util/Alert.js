import { AlertArea } from 'style/StylePopup';

const Alert = (props) => {
  return (
    <>
      <AlertArea>
        <div className='alert_box one'>
          <p>{props.text}</p>
          {props.btntext}
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

export default Alert;
