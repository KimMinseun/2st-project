import styled from 'styled-components';

import MainBackImg from 'assets/images/main_back.png';

// header, contents min-height area
export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: calc(100vh - 176px);
  ${({ location }) =>
    location.pathname === '/' &&
    `
    background-image: url(${MainBackImg});
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-size: calc(max(100%, 1920px));
  `}

  @media screen and (max-width: 700px) {
    background-image: unset;
  }
`;

// pc join bar
export const JoinArea = styled.section`
  width: 100%;
  height: auto;
  ${({ location }) =>
    location.pathname === '/'
      ? `background-color: #00000055;`
      : `background-color: #dddddd;`}

  > .inner > p {
    padding: 15px 0;
    text-align: right;
  }
  > .inner > p,
  > .inner > p * {
    font-size: 14px;
  }

  > .inner > p > span {
    padding: 0 20px;
  }

  > .inner > p > span,
  > .inner > p > a {
    ${({ location }) =>
      location.pathname === '/' ? `color: #ddd;` : `color: #666;`}
  }

  > .inner > p,
  > .inner > p > a:hover {
    ${({ location }) =>
      location.pathname === '/' ? `color: #fff;` : `color: #666;`}
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

// nav
export const NavArea = styled.header`
  position: sticky;
  top: 0px;
  width: 100%;
  height: auto;
  z-index: 1000;
  box-shadow: 0 8px 8px -4px #00000022;

  ${({ location, transparent }) =>
    location.pathname === '/'
      ? `
      background-color: ${transparent ? 'transparent' : '#ffffff'};
      transition: background-color 0.5s ease;
    `
      : `
      background-color: #ffffff;
      transition: background-color 0.5s ease;
    `}

  > .inner {
    display: flex;
    justify-content: space-between;
  }

  > .inner > a {
    display: inline-block;
    height: 70px;
  }

  > .inner > a > img {
    padding: 20px 0;
    height: 30px;
  }

  > .inner > nav {
    display: inline-block;
  }

  > .inner > nav > ul {
    width: fit-content;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  > .inner > nav > ul > li {
    width: fit-content;
    height: 100%;
    margin: 0 0 0 40px;
    display: flex;
    align-items: center;
  }

  > .inner > nav > ul > li > a {
    font-size: 18px;

    ${({ location, transparent }) =>
      location.pathname === '/'
        ? `
      color: ${transparent ? '#dddddd' : '#141414'};
    `
        : `color: #141414;
    `}
  }

  > .inner > nav > ul > li > a:hover {
    font-family: 'gong_m';

    ${({ location, transparent }) =>
      location.pathname === '/'
        ? `
      color: ${transparent ? '#ffffff' : '#584ee4'};
    `
        : `color: #584ee4;
    `}
  }

  > .inner > nav > ul > li > a.active {
    font-family: 'gong_m';
    color: #584ee4;
  }

  > .inner > nav > ul > li.mob_join_area {
    display: none;
  }

  @media screen and (max-width: 700px) {
    background-color: #ffffff;

    > .inner > a {
      height: 50px;
    }

    > .inner > a > img {
      padding: 15px 0;
      height: 20px;
    }

    > .inner > nav {
      position: absolute;
      top: 50px;
      left: 0;
      width: 100%;
      background-color: #eeeeee;
      border-radius: 0 0 20px 20px;
      border-top: 10px solid #584ee433;
      height: 0px;
      box-sizing: border-box;
      overflow: hidden;
      transition: height 0.5s ease;
    }

    > .inner > nav.active {
      height: 246px;
      transition: height 0.5s ease;
    }

    > .inner > nav > ul {
      width: 100%;
      height: auto;
      display: block;
      justify-content: unset;
    }

    > .inner > nav > ul > li {
      width: 100%;
      height: auto;
      margin: 0;
      display: block;
      align-items: unset;
    }

    > .inner > nav > ul > li.mob_join_area {
      display: block;
    }

    > .inner > nav > ul > li.mob_join_area > p,
    > .inner > nav > ul > li > a {
      font-size: 18px;
      color: #141414;
      text-align: center;
      width: 100%;
      padding: 15px 0;
      display: block;
    }

    > .inner > nav > ul > li.mob_join_area > p {
      font-size: 14px;
      background-color: #584ee499;
      color: #ffffff;
    }

    > .inner > nav > ul > li.mob_join_area > p > a {
      font-size: 14px;
      color: #ffffff;
    }

    > .inner > nav > ul > li.mob_join_area > p > span {
      font-size: 14px;
      color: #ffffff;
      margin: 0 20px;
    }

    > .inner > nav > ul > li > a:hover {
      color: #584ee4;
    }
  }
`;

// mob menu icon
export const MenuTrigger = styled.div`
  @media screen and (max-width: 700px) {
    display: block;
    margin: 15px 0;
    float: right !important;
    display: inline-block;
    transition: all 0.4s;
    box-sizing: border-box;
    position: relative;
    width: 24px;
    height: 20px;
    cursor: pointer;

    > span {
      display: inline-block;
      transition: all 0.4s;
      box-sizing: border-box;
      position: absolute;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #584ee4;
      border-radius: 2px;
    }

    > span:nth-of-type(1) {
      top: 0;
      background-color: #6a11cb;
    }

    > span:nth-of-type(2) {
      top: 8px;
      background-color: #584ee4;
    }

    > span:nth-of-type(3) {
      bottom: 0;
      background-color: #2575fc;
    }

    &.active span:nth-of-type(1) {
      -webkit-transform: translateY (6px) rotate (-45deg);
      transform: translateY(6px) rotate(-45deg);
      background-color: #584ee4;
    }

    &.active span:nth-of-type(2) {
      opacity: 0;
    }

    &.active span:nth-of-type(3) {
      -webkit-transform: translateY(-10px) rotate(45deg);
      transform: translateY(-10px) rotate(45deg);
      background-color: #584ee4;
    }
  }
`;

// footer area
export const FooterArea = styled.footer`
  width: 100%;
  height: auto;
  background-color: #444444;
  padding: 60px 0 40px 0;

  > .inner p,
  > .inner p span {
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 20px;
  }

  > .inner p span {
    margin-left: 20px;
  }

  > .inner p br {
    display: none;
  }
`;

export const PaginationArea = styled.div`
  width: 100%;
  height: auto;
  margin-top: 120px;

  > ul {
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  > ul > li > div {
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    border: 2px solid #584ee4;
    font-family: 'gong_m';
    color: #584ee4;
    border-radius: 25px;
    display: block;
    font-size: 16px;
    text-align: center;
    line-height: 48px;
    cursor: pointer;
  }

  > ul > li > div:hover {
    color: #584ee4;
    background-color: #584ee433;
  }

  > ul > li > div.activePage {
    color: #ffffff;
    background-color: #584ee4;
  }

  > ul > li > div.pagebtn {
    border: 2px solid #999999;
    color: #999999;
  }

  > ul > li > div.pagebtn:hover {
    color: #584ee4;
    background-color: #584ee433;
  }

  > ul > li > div.pagebtn.disabled {
    border: 2px solid #dddddd;
    color: #dddddd;
    background-color: #eeeeee;
    cursor: no-drop;
  }

  @media screen and (max-width: 700px) {
    margin-top: 60px;

    > ul {
      gap: 5px;
    }

    > ul > li > div {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      font-size: 11px;
      line-height: 26px;
    }
  }
`;

export const NodataArea = styled.div`
  width: 100%;
  height: auto;

  > p {
    font-size: 32px;
    color: #ccc;
    text-align: center;
    padding: 350px 0;
  }

  @media screen and (max-width: 700px) {
    > p {
      font-size: 24px;
      padding: 300px 0;
    }
  }
`;
