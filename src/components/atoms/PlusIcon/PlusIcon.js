import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Plus = styled.div`
  display: flex;
  &:after {
    content: '\\00d7';
    color: ${({ color }) => color};
    font-size: 1.7vh;
    transform: rotate(45deg);
    margin-top: 0.4vh;
    margin-left: -0.4vh;
  }
`;

export default function PlusIcon({ func, color }) {
  return <Plus onClick={func} style={{ color }} />;
}

PlusIcon.propTypes = {
  func: PropTypes.func,
  color: PropTypes.string,
};

PlusIcon.defaultProps = {
  func: () => {},
  color: 'black',
};
