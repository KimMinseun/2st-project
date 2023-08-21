import React, { useState } from 'react';

const Time = () => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const handleButtonClick = (time) => {
    if (start && end) {
      // 시작시간과 끝시간이 이미 설정된 경우, 초기화
      setStart(null);
      setEnd(null);
    } else if (!start) {
      // 시작시간 설정
      setStart(time);
    } else {
      // 끝시간 설정
      setEnd(time);
    }
  };

  const getButtonColor = (time) => {
    if (start && end) {
      // 시작시간과 끝시간이 모두 설정된 경우
      if (time >= start && time <= end) {
        return '#ff0000'; // 선택된 시간 범위의 버튼 색상
      }
    } else if (start && time === start) {
      // 시작시간만 설정된 경우
      return '#ff0000'; // 선택된 시작시간 버튼 색상
    }
    return null; // 기본 버튼 색상
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = 0; i < 24; i++) {
      buttons.push(
        <button
          key={i}
          style={{ backgroundColor: getButtonColor(i) }}
          onClick={() => handleButtonClick(i)}
        >
          {i}시
        </button>
      );
    }
    return buttons;
  };

  return <div>{renderButtons()}</div>;
};

export default Time;
