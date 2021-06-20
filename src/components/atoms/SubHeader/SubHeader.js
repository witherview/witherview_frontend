import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: inline-block;
  .header-text {
    font-family: AppleSDGothicNeoB00;
    font-size: ${({ fontSize }) => fontSize};
    line-height: 1.42;
    color: ${({ color }) => color};
  }
`;

export default function SubHeader({
  subHeaderText,
  children,
  fontSize = '24px',
  subTitleColor = '#6e6eff',
}) {
  return (
    <>
      <Container fontSize={fontSize} color={subTitleColor}>
        <div className="header-text">
          {subHeaderText}
          &nbsp;
        </div>
        {children}
      </Container>
    </>
  );
}

SubHeader.propTypes = {
  subHeaderText: PropTypes.string,
  children: PropTypes.element.isRequired,
  fontSize: PropTypes.string,
  subTitleColor: PropTypes.string,
};
