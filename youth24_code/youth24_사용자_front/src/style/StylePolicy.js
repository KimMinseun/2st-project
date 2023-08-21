import styled from 'styled-components';

export const SearchArea = styled.div`
  width: 100%;
  height: auto;
  padding: 80px 0px 160px 0px;

  > .inner > h2 {
    text-align: center;
  }

  > .inner > h2 > span {
    padding: 23px 40px 20px 40px;
    font-family: 'gong_m';
    font-size: 32px;
    color: #ffffff;
    background-color: #ff0000;
    border-radius: 50px;
    background: linear-gradient(-45deg, #2575fc 0%, #6a11cb 100%);
  }

  > .inner > p {
    font-size: 18px;
    margin-bottom: 40px;
    display: flex;
  }

  > .inner > p > span {
    font-family: 'gong_m';
    font-size: 18px;
    color: #584ee4;
  }

  > .inner > p > span.text {
    max-width: 200px;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  @media screen and (max-width: 700px) {
    padding: 40px 0px 80px 0px;

    > .inner > h2 > span {
      padding: 13px 20px 10px 20px;
      font-size: 18px;
    }

    > .inner > p {
      width: 100%;
      font-size: 14px;
      margin-bottom: 30px;
    }

    > .inner > p > span {
      font-size: 14px;
    }

    > .inner > p > span.text {
      max-width: 80px;
    }
  }
`;

export const SearchForm = styled.form`
  width: 100%;
  height: auto;
  padding: 80px 40px 40px 40px;
  margin-top: -20px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  transition: border 0.5s ease;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 8px 8px -4px #00000022;
  margin-bottom: 80px;

  > ul > li {
    display: flex;
    margin-bottom: 20px;
  }

  > ul > li:last-of-type {
    margin-bottom: 0px;
  }

  > ul > li > h4 {
    width: 318px;
    height: 53px;
    line-height: 53px;
    font-family: 'gong_m';
    font-size: 21px;
    color: #584ee4;
  }

  > ul > li > h4 span {
    font-family: 'gong_m';
    font-size: 21px;
    color: #584ee4;
    border: 1px solid #584ee4;
    border-radius: 30px;
    padding: 13px 30px;
  }

  > ul > li > input[type='text'] {
    width: calc(100% - 318px);
    height: auto;
    box-sizing: border-box;
    border: 2px solid #dddddd;
    border-radius: 5px;
    overflow: hidden;
    padding: 15px 20px;
    font-size: 16px;
  }

  > ul > li > input[type='text']:focus {
    outline: 5px solid #584ee433;
    border: 2px solid #584ee4;
    transition: border 0.5s, outline 0.5s ease;
  }

  > ul > li input[type='checkbox'],
  > ul > li input[type='radio'] {
    display: none;
  }

  > ul > li label {
    height: 43px;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 40px;
    border: 2px solid #dddddd;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    margin: 5px 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #999999;
    font-family: 'gong_m';
  }

  > ul > li input[type='checkbox']:checked + label,
  > ul > li input[type='radio']:checked + label {
    border: 2px solid #584ee4;
    background-color: #584ee4;
    color: #ffffff;
  }

  .policy_box > label {
    width: calc(((100% - 318px) / 7) - (60px / 7));
    margin-right: 10px;
  }

  .policy_box > label:last-of-type {
    margin-right: 0;
  }

  .policy_space_box > div {
    width: calc(100% - 318px);
    flex-wrap: wrap;
    display: flex;
    gap: 10px;
  }

  .policy_space_box div > label {
    width: calc((100% / 7) - (60px / 7));
  }

  .btn_area {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 60px;
  }

  .btn_area > button {
    width: 200px;
    box-sizing: border-box;
    padding: 15px 0;
    border-radius: 5px;
    font-family: 'gong_m';
    font-size: 18px;
  }

  .btn_area > button:nth-of-type(1) {
    border: 2px solid #999999;
    color: #999999;
  }

  .btn_area > button:nth-of-type(1):hover {
    border: 2px solid #584ee4;
    color: #584ee4;
  }

  .btn_area > button:nth-of-type(2) {
    border: 2px solid #584ee4;
    background-color: #584ee4;
    color: #ffffff;
  }

  @media screen and (max-width: 700px) {
    padding: 40px 15px 20px 15px;
    margin-top: -10px;
    margin-bottom: 40px;

    > ul > li {
      flex-wrap: wrap;
    }

    > ul > li > h4 {
      width: 100%;
      height: auto;
      line-height: 16px;
      font-size: 16px;
      margin-bottom: 10px;
    }

    > ul > li > h4 span {
      font-size: 16px;
      padding: 0;
      border: 0;
    }

    > ul > li > input[type='text'] {
      width: 100%;
    }

    .policy_box > label {
      width: calc((100% / 4) - (30px / 4));
      margin-right: 10px;
    }

    .policy_box > label:nth-of-type(4) {
      margin-right: 0px;
    }

    .policy_space_box > div {
      width: 100%;
    }

    .policy_space_box div > label {
      width: calc((100% / 4) - (30px / 3));
    }
  }
`;

export const PolicyViewArea = styled.div`
  width: 100%;
  height: auto;
  padding: 80px 0px 160px;

  > .inner > h2 {
    font-family: gong_m;
    font-size: 32px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
  }

  > .inner > h2 > a {
    font-family: gong_l;
    font-size: 16px;
    padding: 11px 20px 9px 20px;
    background-color: #dddddd;
    color: #666666;
    border-radius: 20px;
  }

  > .inner > h2 > a:hover {
    font-family: gong_m;
    color: #584ee4;
  }

  @media screen and (max-width: 700px) {
    padding: 40px 0 120px;

    > .inner > h2 {
      font-size: 20px;
      margin-bottom: 30px;
      height: 30px;
      line-height: 32px;
    }

    > .inner > h2 > a {
      padding: 8px 15px 8px 15px;
      font-size: 14px;
      line-height: 14px;
    }

    > .inner > h2 > a:hover {
      font-family: gong_m;
      color: #584ee4;
    }
  }
`;

export const PolicyViewInner = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;

  > ul,
  > ul > li {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  > ul > li {
    margin-bottom: 40px;
  }

  > ul > li > h4 {
    font-family: gong_m;
    font-size: 21px;
    padding: 20px;
    background-color: #dddddd;
    border-radius: 10px;
    margin-bottom: 30px;
  }

  > ul > li > dl {
    width: 100%;
    height: auto;
    display: flex;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 0 20px;
  }

  > ul > li > dl > dt {
    width: 30%;
    font-family: gong_m;
    font-size: 21px;
  }

  > ul > li > dl > dd {
    width: 70%;
    font-size: 21px;
    line-height: 30px;
  }

  > ul > li > img {
    border: 20px solid #dddddd;
    border-radius: 10px;
  }

  > ul > li.down {
    border-radius: 10px;
    box-sizing: border-box;
    border: 2px solid #dddddd;
  }

  > ul > li.down > a {
    padding: 20px;
    transition: 0.5s ease;
  }

  > ul > li.down > a:hover {
    background-color: #584ee433;
    transition: 0.5s ease;
  }

  > ul > li.down > a svg {
    margin-right: 20px;
  }

  > ul > li.down > a,
  > ul > li.down > a svg,
  > ul > li.down > a svg path {
    font-family: gong_m;
    font-size: 18px;
    color: #666666;
    text-align: center;
  }

  > ul > li:nth-of-type(1) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 0 20px;
    background-color: #eeeeee;
    border-radius: 10px;
  }

  > ul > li:nth-of-type(1) > p {
    font-family: gong_m;
    font-size: 18px;
    color: #999999;
    padding: 11px 0 9px 0;
    margin: 10px 0;
  }

  > ul > li:nth-of-type(1) > ul {
    display: flex;
  }

  > ul > li:nth-of-type(1) > ul > li {
    font-size: 18px;
    padding: 11px 20px 9px 20px;
    margin: 10px 0 10px 10px;
    border-radius: 10px;
    color: #ffffff;
  }

  > ul > li:nth-of-type(1) > ul > li.policy_tag1_1 {
    background-color: #e53855;
  }

  > ul > li:nth-of-type(1) > ul > li.policy_tag1_2 {
    background-color: #b35ff4;
  }

  > ul > li:nth-of-type(1) > ul > li.policy_tag2_1 {
    background-color: #2c67a5;
  }

  > ul > li:nth-of-type(1) > ul > li.policy_tag2_2 {
    background-color: #4ea4ff;
  }

  > ul > li:nth-of-type(1) > ul > li.policy_tag2_3 {
    background-color: #ff9100;
  }

  > ul > li:nth-of-type(1) > ul > li.policy_tag2_4 {
    background-color: #6fc827;
  }

  > ul > li:nth-of-type(1) > ul > li.policy_tag2_5 {
    background-color: #3fa895;
  }

  > ul > li:nth-of-type(1) > ul > li.policy_tag2_6 {
    background-color: #994455;
  }

  > ul > li:nth-of-type(2) {
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 30px 20px;
    border-bottom: 4px solid #dddddd;
  }

  > ul > li:nth-of-type(2) > div > h3 {
    font-family: gong_m;
    color: #584ee4;
    font-size: 28px;
    margin-bottom: 10px;
    line-height: 40px;
  }

  > ul > li:nth-of-type(2) > div > p {
    color: #666666;
    font-size: 16px;
  }

  > ul > li:nth-of-type(2) > div > p svg {
    font-size: 16px;
  }

  > ul > li:nth-of-type(2) > div > p svg path {
    color: #666666;
  }

  > ul > li:nth-of-type(2) > button svg {
    margin-bottom: 20px;
    // margin: 10px 0;
    font-size: 48px;
  }

  > ul > li:nth-of-type(2) > button svg path {
    color: #666666;
  }

  > ul > li:nth-of-type(2) > button:hover svg path {
    color: #584ee4;
  }

  > ul > li:nth-of-type(2) > button.active svg path {
    color: #584ee4;
  }

  @media screen and (max-width: 700px) {
    > ul > li {
      margin-bottom: 30px;
    }

    > ul > li > h4 {
      font-size: 18px;
      padding: 15px;
      margin-bottom: 20px;
    }

    > ul > li > dl {
      flex-direction: column;
      flex-wrap: wrap;
      margin-bottom: 15px;
      padding: 0 15px;
    }

    > ul > li > dl > dt {
      width: 100%;
      font-size: 16px;
      margin-bottom: 5px;
    }

    > ul > li > dl > dd {
      width: 100%;
      font-size: 16px;
      line-height: 25px;
      margin-bottom: 10px;
    }

    > ul > li > img {
      border: 10px solid #dddddd;
    }

    > ul > li.down > a {
      padding: 15px;
    }

    > ul > li.down > a,
    > ul > li.down > a svg,
    > ul > li.down > a svg path {
      font-size: 16px;
    }

    > ul > li:nth-of-type(1) {
      padding: 0 15px;
    }

    > ul > li:nth-of-type(1) > p {
      font-size: 14px;
      padding: 11px 0 9px 0;
    }

    > ul > li:nth-of-type(1) > ul > li {
      font-size: 14px;
      padding: 11px 10px 9px 10px;
      margin: 10px 0 10px 10px;
    }

    > ul > li:nth-of-type(2) {
      flex-wrap: wrap;
      justify-content: flex-end;
      padding: 0 15px;
    }

    > ul > li:nth-of-type(2) > div {
      width: 100%;
    }

    > ul > li:nth-of-type(2) > div > h3 {
      font-size: 21px;
      margin-bottom: 10px;
      line-height: 30px;
    }

    > ul > li:nth-of-type(2) > button {
      margin-top: 20px;
      width: fit-content;
    }

    > ul > li:nth-of-type(2) > button svg {
      margin-bottom: 20px;
      font-size: 28px;
    }

    > ul > li:nth-of-type(2) > button svg path {
      color: #666666;
    }

    > ul > li:nth-of-type(2) > button:hover svg path {
      color: #584ee4;
    }

    > ul > li:nth-of-type(2) > button.active svg path {
      color: #584ee4;
    }
  }
`;

export const PolicyChartArea = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 30px 100px;

  .gender_box {
    display: flex;
    margin-right: 100px;
  }

  .gender_box > * {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }

  .gender_box > * > p {
    font-family: gong_m;
    font-size: 16px;
    text-align: center;
    line-height: 20px;
    margin-bottom: 30px;
  }

  .gender_box > * > p span {
    font-size: 14px;
    color: #999999;
  }

  .gender_box > * > div {
    position: relative;
    width: 120px;
    height: 180px;
    background-color: #dddddd;
  }

  .gender_box > * > div img {
    position: absolute;
    width: 120px;
    height: 180px;
    top: 0;
    z-index: 50;
  }

  .gender_box > * > div > div {
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 40;
  }

  .age_box {
    width: calc(100% - 365px);
  }

  @media screen and (max-width: 700px) {
    padding: 0;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

    .gender_box {
      margin-top: 40px;
      display: flex;
      margin-right: 0;
      width: 100%;
      justify-content: center;
    }

    .gender_box > * {
      display: flex;
      flex-direction: column;
      margin: 0 20px;
    }

    .gender_box > * > p {
      font-family: gong_m;
      font-size: 16px;
      text-align: center;
      line-height: 20px;
      margin-bottom: 30px;
    }

    .gender_box > * > p span {
      font-size: 14px;
      color: #999999;
    }

    .gender_box > * > div {
      position: relative;
      width: 120px;
      height: 180px;
      background-color: #dddddd;
    }

    .gender_box > * > div img {
      position: absolute;
      width: 120px;
      height: 180px;
      top: 0;
      z-index: 50;
    }

    .gender_box > * > div > div {
      position: absolute;
      width: 100%;
      bottom: 0;
      z-index: 40;
    }

    .age_box {
      width: 100%;
      margin-top: 40px;
    }
  }
`;
