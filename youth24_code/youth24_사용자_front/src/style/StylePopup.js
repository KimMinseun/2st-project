import styled from 'styled-components';
// popup
export const PopupArea = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  background-color: #00000055;

  display: flex;
  justify-content: center;
  align-items: center;

  .popup_box {
    width: 500px;
    height: auto;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
  }

  .popup_header {
    padding: 20px 15px 12px 15px;
    border-bottom: 10px solid #dddddd;
    display: flex;
    justify-content: space-between;
    font-family: 'gong_m';
    font-size: 18px;
    line-height: 24px;
  }

  .popup_header > button > svg {
    margin: 0;
    padding: 0;
    font-size: 21px;
  }

  .post-code {
    width: 100%;
    height: 500px !important;
  }

  @media screen and (max-width: 700px) {
    .popup_box {
      width: 100%;
      height: 100%;
      border-radius: 0;
    }

    .post-code {
      width: 100%;
      height: calc(100% - 66px) !important;
    }
  }
`;

// alert
export const AlertArea = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  background-color: #00000055;

  display: flex;
  justify-content: center;
  align-items: center;

  .alert_box {
    width: 500px;
    height: auto;
    background-color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    overflow: hidden;
  }

  .alert_box > p {
    font-family: 'gong_m';
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 60px 20px 50px 20px;
    font-size: 18px;
    text-align: center;
    line-height: 30px;
    color: #584ee4;
    border-bottom: 2px solid #584ee4;
    transition: 0.5s ease;
  }

  .alert_box > a {
    font-family: 'gong_m';
    box-sizing: border-box;
    width: calc(50% - 1px);
    padding: 20px;
    font-size: 18px;
    color: #584ee4;
    text-align: center;
  }

  .alert_box > a:hover {
    background-color: #584ee433;
    transition: 0.5s ease;
  }

  .alert_box > a:nth-of-type(1) {
    border-right: 2px solid #584ee4;
  }

  .alert_box.one > a:nth-of-type(1) {
    width: 100%;
    border-right: 0;
  }

  @media screen and (max-width: 700px) {
    .alert_box {
      width: calc(100% - 30px);
      margin: 0 15px;
    }

    .alert_box > p,
    .alert_box > a {
      font-size: 16px;
    }
  }
`;

export const SpacePopupInner = styled.ul`
  width: 100%;
  height: auto;
  padding: 20px;
  box-sizing: border-box;

  > h2 {
    font-family: 'gong_m';
    font-size: 21px;
    color: #584ee4;
    margin-bottom: 10px;
  }

  > h4 {
    font-size: 18px;
    color: #999999;
    margin-bottom: 40px;
  }

  > p {
    font-family: 'gong_m';
    font-size: 18px;
    margin-bottom: 10px;
    justify-content: space-between;
    display: flex;
  }

  > p > span {
    font-family: 'gong_l';
    max-width: 350px;
    line-height: 30px;
    text-align: right;
  }

  @media screen and (max-width: 700px) {
  }
`;
