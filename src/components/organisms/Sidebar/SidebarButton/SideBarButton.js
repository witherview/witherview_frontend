import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import A from '@atoms';

const Wrapper = styled.button`
  width: 100%;
  height: 7.1vh;
  background-color: ${({ clicked }) => (clicked ? 'white' : '#0c0c59')};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  &: hover {
    opacity: ${({ clicked }) => (clicked ? '100%' : '60%')};
  }
  cursor: pointer;
`;

export default function SideBarButton({ type, clicked, func }) {
  return (
    <Wrapper onClick={func} clicked={clicked}>
      <A.Icon type={type} alt="icon" />
    </Wrapper>
  );
}

SideBarButton.propTypes = {
  type: PropTypes.string.isRequired,
  clicked: PropTypes.bool,
  func: PropTypes.func.isRequired,
};

SideBarButton.defaultProps = {
  clicked: false,
};
