import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { setTime } from '../../store/Time/time';
import { get } from '../../utils/snippet';

const Box = styled.div`
  width: 201px;
  height: 127px;
  border-radius: 10px;
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
  width: 40px;
  height: 45px;
  font-family: TitilliumWeb;
  font-size: 36px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: center;
  user-select: none;
`;

const Unit = styled.span`
  width: 21px;
  height: 29px;
  font-family: AppleSDGothicNeoM00;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.7;
  letter-spacing: normal;
  text-align: left;
  user-select: none;
`;

export default function TimeButton({ time }) {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const timeSelector = useSelector(get('time'));

  useEffect(() => {
    if (timeSelector.time === time) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }, [timeSelector]);

  const timeSet = () => {
    dispatch(setTime({ time }));
  }
  return (
    <div>
      <Box onClick={timeSet} isClicked={isClicked}>
        <Time>{time}</Time>
        <Unit>초</Unit>
      </Box>
    </div>
  );
};

TimeButton.propTypes = {
  time: PropTypes.number.isRequired,
};

TimeButton.defaultProp = {
  time: 45,
};