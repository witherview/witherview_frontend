import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import Icon from '@components/Icon';

const Wrapper = styled.button`
  width: ${({ hover }) => (hover ? 296 : 159)}px;
  height: 71px;
  background-color: ${({ clicked }) => (clicked ? 'white' : '#0c0c59')};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  &: hover {
    opacity: ${({ clicked }) => (clicked ? '100%' : '60%')};
  }
`;

const WrapText = styled.div`
  width: 114px;
  padding-left: 24px;
  font-family: AppleSDGothicNeoB00;
  font-size: 24px;
  text-align: left;
  color: ${({ clicked }) => (clicked ? '#0c0c59' : 'white')};
`;

export default function SidebarButton({
  type,
  clicked,
  handleClick,
  hover,
  title,
}) {
  return (
    <Wrapper onClick={handleClick} clicked={clicked} hover={hover}>
      <Icon type={type} alt="icon" />
      {hover && <WrapText clicked={clicked}>{title}</WrapText>}
    </Wrapper>
  );
}

SidebarButton.propTypes = {
  type: PropTypes.string.isRequired,
  clicked: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  hover: PropTypes.bool,
  title: PropTypes.string,
};

SidebarButton.defaultProps = {
  clicked: false,
  hover: false,
  title: '',
};
