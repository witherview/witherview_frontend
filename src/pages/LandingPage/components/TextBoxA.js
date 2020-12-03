import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: ${({ height }) => height}px;
  width: 570px;
  display: flex;
  flex-direction: column;
  ${({ isRight }) => isRight && 'align-items: flex-end'};
  justify-content: space-between;
`;

const WrapText = styled.div`
  ${({ isRight }) => isRight && 'text-align: right'};
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`};
  font-size: ${({ size }) => size}px;
  ${({ bold }) => bold && 'font-family: AppleSDGothicNeoEB00;'}
  color: ${({ color }) => color};
`;

const WrapPadding = styled.div`
  padding: ${({ padding }) => padding && '30px 0 50px 0'};
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
      <WrapText lineHeight={false} size={24} bold color="#6e6eff">
        {header}
      </WrapText>
      {content.map((each, key) => (
        <WrapText
          key={`${key}content`}
          lineHeight="130%"
          size={65}
          bold
          color="black"
        >
          {each}
        </WrapText>
      ))}
      <WrapPadding padding>
        {summary.map((each, key) => (
          <WrapText
            isRight={isRight}
            key={`${key}summary`}
            lineHeight="130%"
            size={20}
            color="black"
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
