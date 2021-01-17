import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import { numberPad } from '@utils/snippet';

const Wrapper = styled.div`
  width: 18.9vh;
  height: 7.2vh;
  font-family: TitilliumWebBold;
  font-size: 1.9vh;
  color: ${({ highlight }) => (highlight ? '#f2886b' : 'black')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;

const Minutes = styled.div`
  width: 7.5vh;
  height: 7.2vh;
  font-family: TitilliumWebBold;
  border-radius: 1vh;
  box-shadow: 0 6px 24px 0 rgba(4, 4, 161, 0.04);
  background-color: ${({ highlight }) => (highlight ? '#fff3ef' : '#f6f6f6')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Seconds = styled.div`
  width: 7.5vh;
  height: 7.2vh;
  font-family: TitilliumWebBold;
  border-radius: 1vh;
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
      :
      <Seconds highlight={toggle}>{second}</Seconds>
    </Wrapper>
  );
}

RemainTime.propTypes = {
  time: PropTypes.number,
};

RemainTime.defaultProps = {
  time: 0,
};
