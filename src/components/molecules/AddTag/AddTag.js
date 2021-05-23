import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PlusIcon from '../../atoms/PlusIcon';
import theme from '../../../style/theme';

const Wrapper = styled.div`
  display: inline-flex;
  background-color: 'white';
  border: solid 0.2vh ${({ borderColor }) => borderColor};
  border-radius: 2vh;
  padding: 0.9vh 1.8vh;
`;
const Content = styled.p`
  color: ${({ contentColor }) => contentColor};
  display: inline-block;
  margin-left: 1.4vh;
  font-size: 2vh;
`;

export default function Tag({ func, borderColor, contentColor }) {
  return (
    <Wrapper onClick={func} borderColor={borderColor}>
      <PlusIcon color={contentColor} />
      <Content contentColor={contentColor}>추가</Content>
    </Wrapper>
  );
}

Tag.propTypes = {
  func: PropTypes.func,
  borderColor: PropTypes.string,
  contentColor: PropTypes.string,
};

Tag.defaultProps = {
  func: () => {},
  borderColor: theme.colors.cornflower,
  contentColor: theme.colors.cornflower,
};
