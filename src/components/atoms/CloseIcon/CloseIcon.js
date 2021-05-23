import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Close = styled.div`
  &:after {
    content: '\\00d7';
    color: ${({ color }) => color};
    font-size: 1.7vh;
    display: flex;
    margin-top: 0.4vh;
  }
`;

export default function CloseIcon({ func, color }) {
  return <Close onClick={func} style={{ color }} />;
}

CloseIcon.propTypes = {
  func: PropTypes.func,
  color: PropTypes.string,
};

CloseIcon.defaultProps = {
  func: () => {},
  color: 'black',
};
