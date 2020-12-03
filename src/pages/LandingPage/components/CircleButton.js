import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background-color: ${({ clicked }) => (clicked ? '#6e6eff' : '#d3d3d3')};
`;

export default function CircleButton({ clicked, func }) {
  return <Wrapper clicked={clicked} onClick={func} />;
}

CircleButton.propTypes = {
  clicked: PropTypes.bool.isRequired,
  func: PropTypes.func.isRequired,
};
