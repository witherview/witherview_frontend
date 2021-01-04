import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import Icon from '@components/IconTemp';

const Wrapper = styled.button`
  width: ${({ hover }) => (hover ? 29.6 : 15.9)}vh;
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

const WrapText = styled.div`
  width: 11.4vh;
  padding-left: 1.9vh;
  font-family: AppleSDGothicNeoB00;
  font-size: 1.9vh;
  text-align: left;
  color: ${({ clicked }) => (clicked ? '#0c0c59' : 'white')};
`;

export default function SidebarButton({
  type, clicked, func, hover, title,
}) {
  return (
    <Wrapper onClick={func} clicked={clicked} hover={hover}>
      <Icon type={type} alt="icon" />
      {hover && <WrapText clicked={clicked}>{title}</WrapText>}
    </Wrapper>
  );
}

SidebarButton.propTypes = {
  type: PropTypes.string.isRequired,
  clicked: PropTypes.bool,
  func: PropTypes.func.isRequired,
  hover: PropTypes.bool,
  title: PropTypes.string,
};

SidebarButton.defaultProps = {
  clicked: false,
  hover: false,
  title: '',
};
