import styled from 'styled-components';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

// banner outline
export const BannerArea = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 1200px;
  height: 450px;
  margin: 40px auto 80px;
  background-color: #ffffff;

  @media screen and (max-width: 700px) {
    border-radius: 15px;
    width: calc(100% - 30px);
    height: auto;
    margin: 25px 15px 55px 15px;
    background-color: transparent;
  }
`;

// banner button
export const BannerStyle = styled(Slider)`
  .slick-dots {
    bottom: 0px;
    padding: 20px 0;
  }

  @media screen and (max-width: 700px) {
    .slick-dots {
      padding: 15px 0;
    }
  }
`;

// banner img, link
export const BannerImgLink = styled(NavLink)`
  width: 100%;
  min-width: 100%;
  height: auto;
  display: block;

  > img {
    width: 100%;
    min-width: 1200px;
    height: auto;
  }

  @media screen and (max-width: 700px) {
    > img {
      min-width: 100%;
    }
  }
`;

export const MainPolicyArea = styled.div`
  > .inner > h2 {
    font-family: 'gong_m';
    font-size: 32px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  > .inner > h2 > a {
    font-family: 'gong_l';
    font-size: 16px;
    color: #999999;
  }

  @media screen and (max-width: 700px) {
    > .inner > h2 {
      font-size: 20px;
      margin-bottom: 30px;
    }

    > .inner > h2 > a {
      font-size: 14px;
    }
  }
`;

export const PolicyList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 80px;
`;

export const PolicyItem = styled.div`
  flex: 0 0 calc(25% - 15px);
  width: 285px;
  height: auto;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  transition: border 0.5s ease;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 20px 20px 15px 20px;
  box-shadow: 0 8px 8px -4px #00000022;

  &:hover {
    outline: 5px solid #584ee433;
    border: 1px solid #584ee4;
    transition: border 0.5s, outline 0.5s ease;
  }

  &:nth-child(5n + 1) {
    margin-left: 0;
  }

  > h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  > h4 > a {
    display: inline-block;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  > h4 > a:hover {
    font-family: 'gong_m';
    color: #584ee4;
  }

  > ul {
    display: flex;
    justify-content: flex-start;
  }

  > ul > li {
    padding: 8px 8px 5px 8px;
    font-size: 16px;
    color: #ffffff;
    border-radius: 5px;
    margin-right: 5px;
  }

  > ul > li.policy_tag1_1 {
    background-color: #e53855;
  }

  > ul > li.policy_tag1_2 {
    background-color: #b35ff4;
  }

  > ul > li.policy_tag2_1 {
    background-color: #2c67a5;
  }

  > ul > li.policy_tag2_2 {
    background-color: #4ea4ff;
  }

  > ul > li.policy_tag2_3 {
    background-color: #ff9100;
  }

  > ul > li.policy_tag2_4 {
    background-color: #6fc827;
  }

  > ul > li.policy_tag2_5 {
    background-color: #3fa895;
  }

  > ul > li.policy_tag2_6 {
    background-color: #994455;
  }

  @media screen and (max-width: 700px) {
    flex: 0 0 100%;
    width: 100%;

    > * {
      margin-left: 0;
    }
  }
`;

// 중앙부처	  #e53855
// 지자체	    #b35ff4

// 취업지원	  #2c67a5
// 창업지원	  #4ea4ff
// 주거·금융	#ff9100
// 생활·복지	#6fc827
// 정책참여	  #3fa895

export const PolicyClip = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;

  p {
    font-size: 14px;
    color: #999999;
    line-height: 16px;
    margin-left: 10px;
  }
`;

export const HeartBtn = styled.button`
  &.full path {
    color: #584ee4;
  }

  &.none path {
    color: #999999;
  }
`;

export const MainSpaceArea = styled.div`
  > .inner > h2 {
    font-family: 'gong_m';
    font-size: 32px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  > .inner > h2 > a {
    font-family: 'gong_l';
    font-size: 16px;
    color: #999999;
  }

  @media screen and (max-width: 700px) {
    > .inner > h2 {
      font-size: 20px;
      margin-bottom: 30px;
    }

    > .inner > h2 > a {
      font-size: 14px;
    }
  }
`;

export const SpaceList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 80px;
`;

export const SpaceItem = styled.div`
  flex: 0 0 calc(25% - 15px);
  width: 285px;
  height: auto;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  transition: border 0.5s ease;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 8px 8px -4px #00000022;

  &:hover {
    outline: 5px solid #584ee433;
    border: 1px solid #584ee4;
    transition: border 0.5s, outline 0.5s ease;
  }

  &:nth-child(5n + 1) {
    margin-left: 0;
  }

  > h4 {
    font-size: 18px;
    padding: 20px 20px 15px 20px;
  }

  > h4 > a {
    display: inline-block;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  > h4 > a:hover {
    font-family: 'gong_m';
    color: #584ee4;
  }

  > div {
    display: flex;
    justify-content: space-start;
    width: 100%;
    padding: 13px 20px 10px;
    box-sizing: border-box;
    border-radius: 10px 10px 0 0;
    background-color: #584ee433;
    color: #ffffff;
  }

  > div svg {
    font-size: 16px;
    margin-right: 10px;
  }

  > div p {
    font-family: 'gong_m';
    font-size: 16px;
    line-height: 18px;
    color: #584ee4;
  }

  > div svg path {
    color: #584ee4;
  }

  &:hover > div {
    background-color: #584ee4;
    transition: 0.5s ease;
  }

  &:hover > div p {
    color: #ffffff;
  }

  &:hover > div svg path {
    color: #ffffff;
  }

  @media screen and (max-width: 700px) {
    flex: 0 0 100%;
    width: 100%;

    > * {
      margin-left: 0;
    }
  }
`;

export const MainUrlArea = styled.div`
  padding: 80px 0;
  background-color: #584ee433;

  > .inner > h2 {
    font-family: 'gong_m';
    font-size: 32px;
    margin-bottom: 60px;
    color: #584ee4;
    text-align: center;
  }

  > .inner > div {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 700px) {
    padding: 40px 0;

    > .inner > h2 {
      font-size: 20px;
      margin-bottom: 30px;
    }

    > .inner > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }

    > .inner > div img {
      height: 30px;
    }
  }
`;

export const MainInfoArea = styled.div`
  margin: 80px 0 160px 0;

  > .inner {
    display: flex;
    justify-content: space-between;
    gap: 120px;
  }

  > .inner > div > h2 {
    font-family: 'gong_m';
    font-size: 32px;
    margin-bottom: 60px;
  }

  > .inner > div > a {
    display: inline-block;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 30px;
    font-size: 18px;
  }

  .inner > div > a::before {
    content: '\u2022';
    margin-right: 15px;
  }

  > .inner > div > a:hover {
    font-family: 'gong_m';
    color: #584ee4;
  }

  > .inner > div > p {
    display: inline-block;
    width: 100%;
    margin-bottom: 30px;
    font-size: 18px;
  }

  > .inner > div > p:last-of-type {
    font-family: 'gong_m';
    font-size: 28px;
    color: #584ee4;
  }

  @media screen and (max-width: 700px) {
    > .inner {
      flex-direction: column;
      gap: 50px;
    }

    > .inner > div > h2 {
      font-size: 20px;
      margin-bottom: 30px;
    }
  }
`;
