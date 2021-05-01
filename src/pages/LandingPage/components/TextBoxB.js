import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: ${({ height }) => height}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const WrapText = styled.div`
  text-align: center;
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`};
  font-size: ${({ size }) => size}px;
  ${({ bold }) => bold && 'font-family: AppleSDGothicNeoB00;'}
  color: ${({ color }) => color};
`;

const WrapPadding = styled.div`
  padding: ${({ padding }) => padding && '0px 0 25px 0'};
`;

export default function TextBoxB({ height, header, content, summary }) {
  return (
    <Wrapper height={height}>
      <WrapText lineHeight={false} size={17.5} bold color="#6e6eff">
        {header}
      </WrapText>
      <WrapText lineHeight="100%" size={40} bold color="black">
        {content}
      </WrapText>
      <WrapPadding padding>
        {summary.map((each, key) => (
          <WrapText
            key={`${key}-summary-B`}
            lineHeight="130%"
            size={15}
            color="black"
          >
            {each}
          </WrapText>
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

TextBoxB.defaultProps = {
  height: 300,
  header: '',
  content: '',
  summary: [],
};
