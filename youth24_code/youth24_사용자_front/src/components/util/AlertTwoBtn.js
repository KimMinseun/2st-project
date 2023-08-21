import { NavLink } from 'react-router-dom';
import { AlertArea } from 'style/StylePopup';

const AlertTwoBtn = (props) => {
  return (
    <>
      <AlertArea>
        <div className='alert_box'>
          {props.text}
          <NavLink to={props.btnOneLink}>{props.btnOneText}</NavLink>
          <NavLink to={props.btnTwoLink}>{props.btnTwoText}</NavLink>
        </div>
      </AlertArea>
    </>
  );
};

export default AlertTwoBtn;
