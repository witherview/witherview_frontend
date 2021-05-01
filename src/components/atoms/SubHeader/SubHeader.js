/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: left;
  color: ${({ color }) => color};
`;

export default function SubHeader({
  subHeaderText, children, fontSize = 24, subTitleColor = '#6e6eff',
}) {
  return (
    <>
      <HeaderText fontSize={fontSize} color={subTitleColor}>
        {subHeaderText}
        &nbsp;
      </HeaderText>
      {children}
    </>
  );
}

SubHeader.propTypes = {
  subHeaderText: PropTypes.string,
  children: PropTypes.element.isRequired,
  fontSize: PropTypes.number,
  subTitleColor: PropTypes.string,
};
