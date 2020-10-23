import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Wrapper = styled.input`
  width: 533px;
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

export default function InputBar({
  className,
}) {
  return (
    <Wrapper className={className} type="text" placeholder="기업명을 입력해주세요" />
  );
}

InputBar.propTypes = {
  className: PropTypes.string,
};

InputBar.defaultProps = {
  className: '',
};
