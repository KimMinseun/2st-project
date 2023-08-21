import styled from 'styled-components';

export const SubpageArea = styled.div`
  width: 100%;
  height: auto;
  padding: 80px 0 160px;

  > .inner > .tab_menu {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
  }

  > .inner > .tab_menu > h2 {
    font-family: 'gong_m';
    font-size: 32px;
  }

  > .inner > .tab_menu > ul {
    display: flex;
    justify-content: space-between;
  }

  > .inner > .tab_menu > ul > li {
    padding-left: 20px;
  }

  > .inner > .tab_menu > ul > li > a {
    display: block;
    padding: 15px 25px 13px 25px;
    font-size: 18px;
    border: 2px solid #dddddd;
    background-color: #dddddd;
    border-radius: 30px;
    color: #999999;
    transition: 0.3s ease;
  }

  > .inner > .tab_menu > ul > li > a:hover {
    font-family: 'gong_m';
    color: #584ee4;
  }

  > .inner > .tab_menu > ul > li > a.active {
    font-family: 'gong_m';
    border: 2px solid #584ee4;
    color: #ffffff;
    background: linear-gradient(-45deg, #2575fc 0%, #6a11cb 100%);
    transition: 0.3s ease;
  }

  > .inner > .tab_menu > ul > li > a.active:hover {
    color: #ffffff;
  }

  @media screen and (max-width: 700px) {
    padding: 40px 0 120px;

    > .inner > .tab_menu {
      align-content: center;
      margin-bottom: 30px;
    }

    > .inner > .tab_menu > h2 {
      font-size: 20px;
      line-height: 35px;
    }

    > .inner > .tab_menu > ul > li {
      padding-left: 10px;
    }

    > .inner > .tab_menu > ul > li > a {
      padding: 10px 8px 8px 8px;
      font-size: 14px;
    }
  }
`;

export const InfoTabpage = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 60px;

  > .tab_inner {
    width: calc(50% - 30px);
    margin-bottom: 60px;
    height: auto;
  }

  > .tab_inner > h4 {
    margin-bottom: 30px;
    font-size: 21px;
    font-family: 'gong_m';
    color: #584ee4;
    padding: 20px;
    background-color: #eeeeee;
    border-radius: 10px;
  }

  > .tab_inner > p {
    font-size: 21px;
    line-height: 30px;
    margin-bottom: 30px;
  }

  > .tab_inner > p > span:nth-of-type(1) {
    font-family: 'gong_m';
    color: #584ee4;
  }

  > .tab_inner > p > span:nth-of-type(2) {
    font-size: 16px;
  }

  .tab_inner .submit_btn {
    width: 100%;
    padding: 20px 0;
    background-color: #584ee4;
    border-radius: 10px;
    color: #ffffff;
    font-size: 18px;
    letter-spacing: 1px;
  }

  .tab_inner .submit_btn:disabled {
    background-color: #dddddd;
    color: #999999;
    cursor: no-drop;
  }

  @media screen and (max-width: 700px) {
    > .tab_inner {
      width: 100%;
    }

    > .tab_inner > h4 {
      font-size: 18px;
      padding: 15px;
    }

    > .tab_inner > p {
      font-size: 18px;
      line-height: 25px;
    }

    > .tab_inner > p > span:nth-of-type(2) {
      font-size: 14px;
    }

    .tab_inner .submit_btn {
      padding: 15px 0;
      font-size: 16px;
      letter-spacing: 1px;
    }
  }
`;

export const UserDeleteArea = styled.div`
  width: 100%;
  border-top: 2px solid #dddddd;
  margin-top: 80px;
  padding-top: 30px;

  > p {
    font-size: 18px;
    text-align: right;
    color: #999999;
  }

  > p > a {
    font-family: 'gong_m';
    font-size: 18px;
    text-align: right;
    color: #888888;
    margin-left: 20px;
    transition: 0.5s ease;
  }

  > p > a:hover {
    color: #ea2e2e;
    transition: 0.5s ease;
  }

  @media screen and (max-width: 700px) {
    > p {
      font-size: 16px;
      line-height: 25px;
      text-align: left;
    }

    > p > a {
      font-size: 16px;
    }
  }
`;

export const ClipTabpage = styled.div`
  .tab_inner > h4 {
    margin-bottom: 30px;
    font-size: 21px;
    font-family: 'gong_m';
    color: #584ee4;
    padding: 20px;
    background-color: #eeeeee;
    border-radius: 10px;
  }
  .tab_inner >  p {
    font-size: 21px;
    margin-bottom: 40px;
    display: flex;

  .tab_inner > p > span {
    color: rgb(88, 78, 228);
`;
