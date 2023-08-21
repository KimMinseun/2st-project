import styled from 'styled-components';
import LockIcon from 'assets/images/lock.png';

export const FaqArea = styled.ul`
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 10px;

  > li {
    width: 100%;
    height: auto;
  }

  > li > h4 {
    width: 100%;
    padding: 20px 20px 17px 20px;
    font-size: 18px;
    font-family: 'gong_m';
    background-color: #eeeeee;
    border-bottom: 10px solid #dddddd;
    box-sizing: border-box;
    cursor: pointer;
  }

  > li > p {
    width: 100%;
    height: auto;
    font-size: 18px;
    background-color: #ffffff;
    box-sizing: border-box;
    overflow: hidden;
    transition: height 0.5s, padding 0.5s ease;
    line-height: 30px;
  }

  @media screen and (max-width: 700px) {
  }
`;

export const QnaHeader = styled.ul`
  display: flex;

  width: 100%;
  height: auto;
  overflow: hodden;
  background-color: #584ee433;
  border-radius: 10px 10px 0 0;
  border-bottom: 10px solid #eeeeee;

  > li {
    box-sizing: border-box;
    font-family: 'gong_m';
    font-size: 18px;
    padding: 22px 20px 18px 20px;
    color: #584ee4;
    text-align: center;
  }

  > li:nth-of-type(1) {
    width: 100px;
    text-align: left;
  }

  > li:nth-of-type(2),
  > li:nth-of-type(4),
  > li:nth-of-type(5) {
    width: 130px;
  }

  > li:nth-of-type(3) {
    width: calc(100% - 490px);
    text-align: left;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const QnaBody = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;

  > li {
    padding: 20px 0 13px 0;
    font-size: 18px;
    border-bottom: 4px solid #eeeeee;
  }

  > li > p {
    display: flex;
  }

  > li > p > * {
    padding: 0 20px;
    box-sizing: border-box;
    text-align: center;
  }

  > li > p > span:nth-of-type(1) {
    width: 100px;
    text-align: left;
  }

  > li > p > span:nth-of-type(2),
  > li > p > span:nth-of-type(4),
  > li > p > span:nth-of-type(5) {
    width: 130px;
  }

  > li > p > span:nth-of-type(2) {
    font-family: 'gong_m';
    color: #ea2e2e;
  }

  > li > p.ok > span:nth-of-type(2) {
    font-family: 'gong_m';
    color: #30b441;
  }

  > li > p > span:nth-of-type(3) {
    width: calc(100% - 490px);
    text-align: left;
  }

  > li > p > span > a {
    font-family: 'gong_m';
    max-width: calc(100% - 100px);
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  >li>p>span>a: hover {
    color: #584ee4;
  }

  > li > p.lock > span:nth-of-type(3):after {
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;
    background-image: url(${LockIcon});
    background-size: 18px 18px;
    margin-left: 5px;
    top: -1px;
    position: relative;
  }

  @media screen and (max-width: 700px) {
    > li {
      font-size: 16px;
    }

    > li > p {
      flex-direction: column;
    }

    > li > p > * {
      padding: 0;
      text-align: left;
    }

    > li > p > span:nth-of-type(1) {
      width: 100%;
    }

    > li > p > span:nth-of-type(2),
    > li > p > span:nth-of-type(4),
    > li > p > span:nth-of-type(5) {
      width: 100%;
    }

    > li > p > span:nth-of-type(3) {
      width: 100%;
    }

    > li > p > span > a {
      width: 100%;
      max-width: calc(100% - 28px);
    }

    >li>p>span>a: hover {
      color: #584ee4;
    }

    > li > p.lock > span:nth-of-type(3):after {
      content: '';
      display: inline-block;
      width: 18px;
      height: 18px;
      background-image: url(${LockIcon});
      background-size: 18px 18px;
      margin-left: 5px;
      top: -1px;
      position: relative;
    }
  }
`;

export const QnaWriteBtn = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  > p {
    font-size: 18px;
    padding-top: 30px;
  }

  > a {
    padding: 15px 20px;
    border-radius: 10px;
    background-color: #584ee4;
    font-size: 18px;
    color: #ffffff;
  }

  @media screen and (max-width: 700px) {
  }
`;

export const QnaViewArea = styled.div`
  width: 100%;
  height: auto;
  padding: 80px 0px 160px 0px;

  > .inner > h2 {
    font-family: 'gong_m';
    font-size: 32px;
    margin-bottom: 60px;
  }

  > .inner > h4 {
    font-family: 'gong_m';
    font-size: 21px;
    margin-bottom: 40px;
    color: #584ee4;
  }

  > .inner > h4:after {
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;
    background-image: url(${LockIcon});
    background-size: 18px 18px;
    margin-left: 10px;
    top: 3px;
    position: relative;
  }

  > .inner > h4 span {
    float: right;
    color: #999999;
    font-size: 16px;
  }

  > .inner > .qna_cont {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 40px;
    border-radius: 10px;
    background-color: #ddd;
    margin-bottom: 20px;
    line-height: 30px;
    font-size: 18px;
  }

  > .inner > .qna_btn_area {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  > .inner > .qna_btn_area > a {
    background-color: #dddddd;
    padding: 15px 40px;
    border-radius: 10px;
    font-family: 'gong_m';
    color: #666666;
  }

  @media screen and (max-width: 700px) {
  }
`;

export const SubpageArea = styled.div`
  @media screen and (max-width: 700px) {
  }
`;
