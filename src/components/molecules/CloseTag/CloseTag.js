import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CloseIcon from '../../atoms/CloseIcon';
import theme from '../../../style/theme';

const Wrapper = styled.div`
  display: inline-flex;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: solid 0.2vh ${({ backgroundColor }) => backgroundColor};
  border-radius: 2vh;
  padding: 0.9vh 1.8vh;
`;
const Content = styled.p`
  color: ${({ contentColor }) => contentColor};
  display: inline-block;
  margin-right: 1.4vh;
  font-size: 2vh;
`;

export default function Tag({ func, backgroundColor, text, contentColor }) {
  return (
    <Wrapper onClick={func} backgroundColor={backgroundColor}>
      <Content contentColor={contentColor}>{text}</Content>
      <CloseIcon color={contentColor} />
    </Wrapper>
  );
}

Tag.propTypes = {
  func: PropTypes.func,
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  contentColor: PropTypes.string,
};

Tag.defaultProps = {
  func: () => {},
  backgroundColor: theme.colors.cornflower,
  text: '화학',
  contentColor: 'white',
};
