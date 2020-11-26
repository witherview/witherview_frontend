import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
  height: 44px;
  margin-top: 33px;
  margin-left: 33px;
  padding: 0 18px 3px 18px;
  opacity: 0.28;
  border-radius: 10px;
  background-color: black;
  position: absolute;
  top: 0px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: AppleSDGothicNeoM00;
  font-size: 24px;
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
