import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PlusIcon from '../../atoms/PlusIcon';
import CloseIcon from '../../atoms/CloseIcon';
import theme from '../../../style/theme';

const Wrapper = styled.div`
  display: inline-flex;
  border-radius: 2vh;
  padding: 0.9vh 1.8vh;
  background-color: ${({ isAddingTag, tagColor }) =>
    isAddingTag ? `white` : tagColor};
  border: ${({ isAddingTag, tagColor }) =>
    isAddingTag ? `solid 0.2vh ${tagColor}` : ''};
`;
const Content = styled.p`
  color: ${({ contentColor }) => contentColor};
  display: inline-block;
  font-size: 2vh;
  margin-top: 0.3vh;
  margin-left: ${({ isAddingTag }) => isAddingTag && `1.4vh`};
  margin-right: ${({ isAddingTag }) => !isAddingTag && `1.4vh`};
`;

export default function Tag({
  func,
  tagColor,
  contentColor,
  isAddingTag,
  closeTagText,
}) {
  if (isAddingTag) {
    return (
      <Wrapper onClick={func} tagColor={tagColor} isAddingTag={isAddingTag}>
        <PlusIcon color={contentColor} />
        <Content contentColor={contentColor} isAddingTag={isAddingTag}>
          추가
        </Content>
      </Wrapper>
    );
  }

  return (
    <Wrapper onClick={func} tagColor={tagColor} isAddingTag={isAddingTag}>
      <Content contentColor={contentColor} isAddingTag={isAddingTag}>
        {closeTagText}
      </Content>
      <CloseIcon color={contentColor} />
    </Wrapper>
  );
}

Tag.propTypes = {
  func: PropTypes.func,
  closeTagText: PropTypes.string,
  tagColor: PropTypes.string,
  contentColor: PropTypes.string,
  isAddingTag: PropTypes.bool,
};

Tag.defaultProps = {
  func: () => {},
  closeTagText: '화학',
  tagColor: theme.colors.cornflower,
  contentColor: theme.colors.white,
  isAddingTag: false,
};
