import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { setStandardTime } from '@store/Train/train';
import { get } from '@utils/snippet';

const Box = styled.div`
  width: 20.1vh;
  height: 12.7vh;
  border-radius: 1vh;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border: ${({ isClicked }) => (isClicked ? 'solid 3px #5f5fd9;' : 'none')};
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  color: ${({ isClicked }) => (isClicked ? '#5f5fd9;' : 'black')};
`;

const Time = styled.span`
  width: 100%;
  height: 4.5vh;
  font-family: TitilliumWeb;
  font-size: 3.1vh;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: center;
  user-select: none;
`;

const Unit = styled.span`
  width: 2.1vh;
  height: 2.9vh;
  font-family: AppleSDGothicNeoM00;
  font-size: 1.9vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.7;
  letter-spacing: normal;
  text-align: left;
  user-select: none;
`;

export default function TimeButton({ time, unit }) {
  // TODO: Atomic Desgin Pattern에 따르면 컴포넌트는 상태를 들고 있는게 좋지 않다고 함 - 추후 리펙토링 예정
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const { standardTime } = useSelector(get('train'));

  useEffect(() => {
    if (standardTime === time) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }, [standardTime]);

  const timeSet = () => {
    dispatch(setStandardTime({ standardTime: time }));
  };

  return (
    <div>
      <Box onClick={timeSet} isClicked={isClicked}>
        <Time>{time}</Time>
        {unit && <Unit>{unit}</Unit>}
      </Box>
    </div>
  );
}

TimeButton.propTypes = {
  time: PropTypes.number.isRequired,
  unit: PropTypes.string,
};

TimeButton.defaultProp = {
  time: 45,
  unit: '',
};
