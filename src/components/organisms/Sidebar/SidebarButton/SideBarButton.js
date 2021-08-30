import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import A from '@atoms';

const Wrapper = styled.button`
  position: relative;
  width: 100%;
  height: 7.1vh;
  background: ${({ clicked }) => (clicked ? '#fff' : 'inherit')};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;

  i {
    position: absolute;
    left: 3.6vh;
  }

  div {
    position: absolute;
    left: 8.5vh;
    color: ${({ clicked }) => (clicked ? '#0c0c59' : 'white')};

    font-family: AppleSDGothicNeoB00;
    font-size: 1.8vh;
    word-break: keep-all;
    text-overflow: clip;
  }

  &: hover {
    opacity: ${({ clicked }) => (clicked ? '100%' : '60%')};
  }
  cursor: pointer;
`;

export default function SideBarButton({ type, clicked, func, isHover, text }) {
  return (
    <Wrapper onClick={func} clicked={clicked}>
      <A.Icon className="icon" type={type} alt="icon" />
      {isHover && <div className="sideText">{text}</div>}
    </Wrapper>
  );
}

SideBarButton.propTypes = {
  type: PropTypes.string.isRequired,
  clicked: PropTypes.bool,
  func: PropTypes.func.isRequired,
  isHover: PropTypes.bool,
  text: PropTypes.string,
};

SideBarButton.defaultProps = {
  clicked: false,
};
