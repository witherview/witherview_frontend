import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: ${({ height }) => height}px;
  width: 420px;
  display: flex;
  flex-direction: column;
  ${({ isRight }) => isRight && 'align-items: flex-end'};
  justify-content: space-between;
`;

const WrapText = styled.div`
  ${({ isRight }) => isRight && 'text-align: right'};
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`};
  font-size: ${({ size }) => size}px;
  ${({ bold }) => bold && 'font-family: AppleSDGothicNeoB00;'}
  color: ${({ color, theme: { mainPageBoldColor } }) =>
    color || mainPageBoldColor};
`;

const WrapPadding = styled.div`
  padding: ${({ padding }) => padding && '15px 0 20px 0'};
  color: ${({ theme: { wrapPaddingColor } }) => wrapPaddingColor};
`;

export default function TextBoxA({
  height,
  header,
  content,
  summary,
  isRight,
}) {
  return (
    <Wrapper height={height} isRight={isRight}>
      <WrapText lineHeight={false} size={17.5} bold color="#6e6eff">
        {header}
      </WrapText>
      {content.map((each, key) => (
        <WrapText key={`${key}content`} lineHeight="80%" size={48} bold>
          {each}
        </WrapText>
      ))}
      <WrapPadding padding>
        {summary.map((each, key) => (
          <WrapText
            isRight={isRight}
            key={`${key}summary`}
            lineHeight="130%"
            size={15}
          >
            {each}
          </WrapText>
        ))}
      </WrapPadding>
    </Wrapper>
  );
}

TextBoxA.propTypes = {
  height: PropTypes.number,
  header: PropTypes.string,
  content: PropTypes.array,
  summary: PropTypes.array,
  isRight: PropTypes.bool,
};

TextBoxA.defaultProps = {
  height: 500,
  header: '',
  content: [],
  summary: [],
  isRight: false,
};
