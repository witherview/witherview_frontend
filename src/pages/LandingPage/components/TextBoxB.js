import React from 'react';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  height: ${({ height }) => height}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const wrapTextBasic = css`
  text-align: center;
  line-height: ${({ lineHeight }) => lineHeight};
  font-size: ${({ size }) => size}px;
  ${({ bold }) => bold && 'font-family: AppleSDGothicNeoB00;'}
`;

const WrapTextHeader = styled.div`
  ${wrapTextBasic}
  color: ${({ theme: { textBoxBHeaderColor } }) => textBoxBHeaderColor};
`;

const WrapTextContent = styled.div`
  ${wrapTextBasic}
  color: ${({ theme: { textBoxBContentColor } }) => textBoxBContentColor};
`;

const WrapTextSummary = styled.div`
  ${wrapTextBasic}
  color: ${({ theme: { textBoxBContentColor } }) => textBoxBContentColor};
`;

const WrapPadding = styled.div`
  padding: ${({ padding }) => padding && '0px 0 25px 0'};
`;

export default function TextBoxB({
  height = 300,
  header = '',
  content = '',
  summary = [],
}) {
  return (
    <Wrapper height={height}>
      <WrapTextHeader
        lineHeight="none"
        size={17.5}
        bold
      >
        {header}
      </WrapTextHeader>
      <WrapTextContent
        lineHeight="100%"
        size={40}
        bold
      >
        {content}
      </WrapTextContent>
      <WrapPadding padding>
        {summary.map((each, key) => (
          <WrapTextSummary
            key={`${key}-summary-B`}
            lineHeight="130%"
            size={15}
            color="black"
          >
            {each}
          </WrapTextSummary>
        ))}
      </WrapPadding>
    </Wrapper>
  );
}

TextBoxB.propTypes = {
  height: PropTypes.number,
  header: PropTypes.string,
  content: PropTypes.string,
  summary: PropTypes.array,
};
