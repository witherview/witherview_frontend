import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Plus = styled.div`
  &:after {
    content: '\\002B';
    color: ${({ color }) => color};
    font-size: 17px;
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
