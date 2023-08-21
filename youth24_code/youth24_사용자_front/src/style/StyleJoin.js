import styled from 'styled-components';

// banner outline
export const SignArea = styled.div`
  width: 100%;
  height: auto;
  padding: 160px 0 320px;
  background-color: #eeeeee;
  box-sizing: border-box;

  > .join_inner {
    width: 600px;
    height: auto;
    box-sizing: border-box;
    padding: 80px 40px;
    margin: auto;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 8px 8px 0px #00000011;
  }

  > .join_inner > h2 {
    font-family: 'gong_m';
    font-size: 32px;
    color: #584ee4;
    text-align: center;
    margin-bottom: 20px;
  }

  > .join_inner > p:nth-of-type(1) {
    font-size: 18px;
    text-align: center;
    margin-bottom: 60px;
    line-height: 30px;
  }

  .icon_input {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 2px solid #dddddd;
    display: flex;
    overflow: hidden;
  }

  .icon_input,
  .icon_input * {
    transition: 0.1s ease;
  }

  .icon_input.id_active,
  .icon_input.pw_active {
    border: 2px solid #584ee4;
  }

  .icon_input > svg {
    width: 70px;
    font-size: 24px;
    padding: 20px 0;
    margin: 0;
  }

  .icon_input > svg > path {
    color: #999999;
  }

  .icon_input > input {
    width: calc(100% - 70px);
    border: 0;
    padding: 0 30px;
    font-family: 'gong_m';
    font-size: 16px;
  }

  .icon_input > input:focus {
    outline: none;
  }

  .icon_input > .fa-user.id_active,
  .icon_input > .fa-lock.pw_active {
    background-color: #584ee4;
  }

  .icon_input > .fa-user.id_active > path,
  .icon_input > .fa-lock.pw_active > path {
    color: #ffffff;
  }

  .icon_input:last-of-type {
    margin-bottom: 30px;
  }

  .sign_checkbox {
    width: fit-content;
    display: flex;
    margin: 0 0 40px 0;
    cursor: pointer;
  }

  .sign_checkbox .cbx {
    position: relative;
    display: block;
    float: left;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    background-color: #eee;
    background-image: linear-gradient(#eee, #eee);
    box-shadow: inset 0 1px 1px hsla(0, 0%, 100%, 0.15),
      inset 0 -1px 1px rgba(0, 0, 0, 0.15);
    transition: all 0.15s ease;
  }

  .sign_checkbox .cbx svg {
    position: absolute;
    top: 3px;
    left: 3px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #fff;
    stroke-width: 2;
    stroke-dasharray: 17;
    stroke-dashoffset: 17;
    transform: translateZ(0);
  }

  .sign_checkbox .cbx + span {
    font-size: 14px;
    line-height: 17px;
    float: left;
    margin-left: 10px;
    user-select: none;
  }

  .sign_checkbox input[type='checkbox'] {
    position: absolute;
    opacity: 0;
  }

  .sign_checkbox input[type='checkbox']:checked + .cbx {
    background-color: #584ee4;
    background-image: linear-gradient(#584ee4, #584ee4);
  }

  .sign_checkbox input[type='checkbox']:checked + .cbx svg {
    stroke-dashoffset: 0;
    transition: all 0.15s ease;
  }

  .sign_checkbox .cbx + span {
    font-size: 16px;
    line-height: 20px;
  }

  > .join_inner .submit_btn {
    width: 100%;
    padding: 20px 0;
    background-color: #584ee4;
    border: 0;
    border-radius: 10px;
    color: #ffffff;
    font-size: 18px;
    letter-spacing: 1px;
  }

  > .join_inner .submit_btn:disabled {
    background-color: #dddddd;
    color: #999999;
    cursor: no-drop;
  }

  > .join_inner > p:nth-of-type(2),
  > .join_inner > p:nth-of-type(2) > a {
    font-family: 'gong_m';
    font-size: 16px;
    margin-top: 60px;
    text-align: center;
    color: #999999;
  }

  > .join_inner > p:nth-of-type(2) > a:hover {
    color: #584ee4;
  }

  > .join_inner > p:nth-of-type(2) > span {
    margin: 0 15px;
  }

  @media screen and (max-width: 700px) {
    padding: 80px 10px 160px;
    min-height: calc(100vh - 250px);

    > .join_inner {
      width: 100%;
      padding: 60px 10px;
    }

    > .join_inner > h2 {
      font-size: 24px;
      margin-bottom: 15px;
    }

    > .join_inner > p:nth-of-type(1) {
      font-size: 14px;
      margin-bottom: 40px;
      line-height: 22px;
    }

    .icon_input {
      margin-bottom: 15px;
    }

    .icon_input > svg {
      width: 50px;
      font-size: 18px;
      padding: 15px 0;
      margin: 0;
    }

    .icon_input > svg > path {
      color: #999999;
    }

    .icon_input > input {
      width: calc(100% - 50px);
      border: 0;
      padding: 0 20px;
      font-size: 16px;
    }

    > .join_inner .submit_btn {
      padding: 15px 0;
    }

    > .join_inner > p:nth-of-type(2),
    > .join_inner > p:nth-of-type(2) > a {
      font-size: 14px;
      margin-top: 40px;
    }

    > .join_inner > p:nth-of-type(2) > span {
      margin: 0 7px;
    }
  }
`;

export const SignupForm = styled.form`
  > ul {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 60px;
  }

  > ul > li {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
  }

  > ul > li > h4 {
    width: 100%;
    font-family: 'gong_m';
    font-size: 18px;
    color: #666666;
  }

  > ul > li > input,
  > ul > li > select,
  > ul > li > button {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    border: 2px solid #dddddd;
    border-radius: 5px;
    overflow: hidden;
    padding: 15px 20px;
    font-size: 16px;
  }

  > ul > li > select {
    font-family: 'gong_m';
    color: #584ee4;
  }

  > ul > li > input:focus,
  > ul > li > select:focus {
    outline: 5px solid #584ee433;
    border: 2px solid #584ee4;
    transition: border 0.5s, outline 0.5s ease;
  }

  > ul > li > button {
    border: 2px solid #584ee4;
    font-family: 'gong_m';
    color: #584ee4;
    transition: background-color 0.5s, outline 0.1s ease;
  }

  > ul > li > button:hover {
    background-color: #584ee433;
    transition: background-color 0.5s, outline 0.1s ease;
  }

  > ul > li > span {
    width: 20px;
    text-align: center;
    font-size: 14px;
  }

  > ul > li > input:read-only {
    background-color: #dddddd;
    color: #999999;
    cursor: no-drop;
  }

  > ul > li > p {
    width: 100%;
    padding: 15px;
    background-color: #eeeeee;
    border-radius: 10px;
    line-height: 23px;
    font-size: 14px;
    color: #666666;
  }

  > ul > li > p.no {
    font-family: 'gong_m';
    color: #ea2e2e;
  }

  > ul > li > p.ok {
    font-family: 'gong_m';
    color: #30b441;
  }

  > ul.signup > li:nth-of-type(1) > input,
  > ul.signup > li:nth-of-type(1) > button {
    width: calc(50% - (15px / 2));
  }

  > ul.signup > li:nth-of-type(5) > input,
  > ul.signup > li:nth-of-type(7) > input {
    width: calc((100% / 3) - 10px);
    text-align: center;
  }

  > ul.signup > li:nth-of-type(6) > input:nth-of-type(1),
  > ul.signup > li:nth-of-type(6) > button {
    width: calc(50% - (15px / 2));
  }

  > ul.findid > li:nth-of-type(2) > input {
    width: calc((100% / 3) - 10px);
    text-align: center;
  }

  > ul.resetpw > li:nth-of-type(3) > input {
    width: calc((100% / 3) - 10px);
    text-align: center;
  }

  > ul.info_mob > li:nth-of-type(1) > input {
    width: calc((100% / 3) - 10px);
    text-align: center;
  }

  > ul.info_mob > li:nth-of-type(2) > input:nth-of-type(1),
  > ul.info_mob > li:nth-of-type(2) > button {
    width: calc(50% - (15px / 2));
  }

  @media screen and (max-width: 700px) {
  }
`;
