import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Plus = styled.div`
  &:after {
    content: '\\00d7';
    color: ${({ color }) => color};
    display: flex;
    font-size: 1.7vh;
    transform: rotate(45deg);
    margin-top: 0.4vh;
    margin-left: -0.4vh;
  }
`;

const Close = styled.div`
  &:after {
    content: '\\00d7';
    color: ${({ color }) => color};
    font-size: 1.7vh;
    display: flex;
    margin-top: 0.4vh;
  }
`;

export default function TagIcon({ func, color, isAddingTag }) {
  return (
    <div>
      {isAddingTag ? (
        <Plus onClick={func} style={{ color }} />
      ) : (
        <Close onClick={func} style={{ color }} />
      )}
    </div>
  );
}

TagIcon.propTypes = {
  func: PropTypes.func,
  color: PropTypes.string,
  isAddingTag: PropTypes.bool,
};

TagIcon.defaultProps = {
  func: () => {},
  color: 'black',
  isAddingTag: false,
};
