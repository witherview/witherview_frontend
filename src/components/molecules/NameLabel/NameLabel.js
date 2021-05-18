import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
  height: 4.4vh;
  margin-top: 3.3vh;
  margin-left: 3.3vh;
  padding: 0 1.8vh 0.3vh 1.8vh;
  opacity: 0.28;
  border-radius: 1vh;
  background-color: black;
  position: absolute;
  top: 0;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: AppleSDGothicNeoM00;
  font-size: 1.9vh;
`;

export default function NameLabel({ name }) {
  return (
    <Wrapper>
      {name}
      님
    </Wrapper>
  );
}

NameLabel.propTypes = {
  name: PropTypes.string,
};

NameLabel.defaultProps = {
  name: '홍길동',
};
