import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { setTime } from '../../store/Time/time';

const Box = styled.div`
  width: 201px;
  height: 127px;
  border-radius: 10px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border: ${(props) => (props.isClicked ? 'solid 3px #5f5fd9;' : 'none')};
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  color: ${(props) => (props.isClicked ? '#5f5fd9;' : 'black')};
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
`;

const TimeButton = ({ time }) => {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const { timeState } = useSelector((state) => ({
    timeState: state.time.time,
  }));
  useEffect(() => {
    if (timeState === time) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }, [timeState]);

  function timeSet() {
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
export default TimeButton;

TimeButton.propTypes = {
  time: PropTypes.number.isRequired,
};

TimeButton.defaultProp = {
  time: '45',
};
