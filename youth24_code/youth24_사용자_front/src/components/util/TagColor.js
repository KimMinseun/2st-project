export const TagColor = (text) => {
  switch (text) {
    case '취업지원':
      return 'policy_tag2_1';
    case '창업지원':
      return 'policy_tag2_2';
    case '주거·금융':
      return 'policy_tag2_3';
    case '생활·복지':
      return 'policy_tag2_4';
    case '정책참여':
      return 'policy_tag2_5';
    default:
      return 'policy_tag2_6';
  }
};

export const TagColorArea = (num) => {
  const colorArr = ['policy_tag1_2', ''];
  if (num === '003002001') {
    colorArr[1] = '서울';
  } else if (num === '003002002') {
    colorArr[1] = '부산';
  } else if (num === '003002003') {
    colorArr[1] = '대구';
  } else if (num === '003002004') {
    colorArr[1] = '인천';
  } else if (num === '003002005') {
    colorArr[1] = '광주';
  } else if (num === '003002006') {
    colorArr[1] = '대전';
  } else if (num === '003002007') {
    colorArr[1] = '울산';
  } else if (num === '003002008') {
    colorArr[1] = '경기';
  } else if (num === '003002009') {
    colorArr[1] = '강원';
  } else if (num === '003002010') {
    colorArr[1] = '충북';
  } else if (num === '003002011') {
    colorArr[1] = '충남';
  } else if (num === '003002012') {
    colorArr[1] = '전북';
  } else if (num === '003002013') {
    colorArr[1] = '전남';
  } else if (num === '003002014') {
    colorArr[1] = '경북';
  } else if (num === '003002015') {
    colorArr[1] = '경남';
  } else if (num === '003002016') {
    colorArr[1] = '제주';
  } else if (num === '003002017') {
    colorArr[1] = '세종';
  } else {
    colorArr[0] = 'policy_tag1_1';
    colorArr[1] = '중앙부처';
  }

  return colorArr;
};
