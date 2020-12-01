import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Wrapper = styled.input`
  width: ${({ width }) => width}px;
  border: none;
  border-bottom: 2px solid #9e9e9e;
  font-size: 20px;
  font-family: AppleSDGothicNeoM00;
  line-height: 1.7;
  text-align: left;
  color: #9e9e9e;
  &:focus {
    outline: none;
    border-bottom: 3px solid #5f5fd9;
    color: #3d3d3d;
  }
`;

export default function InputBar({ className, width }) {
  return (
    <Wrapper
      className={className}
      type="text"
      placeholder="기업명을 입력해주세요"
      width={width}
    />
  );
}

InputBar.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
};

InputBar.defaultProps = {
  className: '',
  width: '553',
};
