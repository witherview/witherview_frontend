import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 189px;
  height: 72px;
  font-family: TitilliumWebBold;
  font-size: 25px;
  color: ${({ highlight }) => (highlight ? '#f2886b' : 'black')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;

const Minutes = styled.div`
  width: 75px;
  height: 72px;
  border-radius: 10px;
  box-shadow: 0 6px 24px 0 rgba(4, 4, 161, 0.04);
  background-color: ${({ highlight }) => (highlight ? '#fff3ef' : '#f6f6f6')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Seconds = styled.div`
  width: 75px;
  height: 72px;
  border-radius: 10px;
  box-shadow: 0 6px 24px 0 rgba(4, 4, 161, 0.04);
  background-color: ${({ highlight }) => (highlight ? '#fff3ef' : '#f6f6f6')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function RemainTime({ time }) {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [toggle, setToggle] = useState(false);

  function numberPad(n, width = 2) {
    return n.length >= width
      ? n
      : new Array(width - n.length + 1).join('0') + n;
  }

  useEffect(() => {
    setMinute(numberPad(String(Math.floor(time / 60)), 2));
    setSecond(numberPad(String(time % 60), 2));

    if (minute <= 0) {
      setToggle(true);
    }

    if (minute > 0) {
      setToggle(false);
    }
  }, [time, minute, second]);

  return (
    <Wrapper highlight={toggle}>
      <Minutes highlight={toggle}>{minute}</Minutes>
      <div>:</div>
      <Seconds highlight={toggle}>{second}</Seconds>
    </Wrapper>
  );
}

RemainTime.propTypes = {
  time: PropTypes.number,
};

RemainTime.defaultProps = {
  time: 59,
};
