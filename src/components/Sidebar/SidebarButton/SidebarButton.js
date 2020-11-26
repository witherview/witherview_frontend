import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import Icon from '../../Icon';

const Wrapper = styled.button`
  width: 100%;
  height: 71px;
  background-color: ${({ clicked }) => (clicked ? 'white' : '#0c0c59')};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline:none;
  &: hover {
    opacity: ${({ clicked }) => (clicked ? '100%' : '60%')};
  }
`;

export default function SidebarButton({ type, clicked, handleClick }) {
  return (
    <Wrapper onClick={handleClick} clicked={clicked}>
      <Icon type={type} alt="icon" />
    </Wrapper>
  );
}

SidebarButton.propTypes = {
  type: PropTypes.string.isRequired,
  clicked: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

SidebarButton.defaultProps = {
  clicked: false,
};
