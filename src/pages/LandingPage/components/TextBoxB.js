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
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`};
  font-size: ${({ size }) => size}px;
  ${({ bold }) => bold && 'font-family: AppleSDGothicNeoEB00;'}
  color: ${({ color }) => color};
`;

const WrapPadding = styled.div`
  padding: ${({ padding }) => padding && '30px 0 50px 0'};
`;

export default function TextBoxB({
  height, header, content, summary,
}) {
  return (
    <Wrapper height={height}>
      <WrapText lineHeight={false} size={24} bold color="#6e6eff">
        {header}
      </WrapText>
      <WrapText lineHeight="130%" size={65} bold color="black">
        {content}
      </WrapText>
      <WrapPadding padding>
        {summary.map((each, key) => (
          <WrapText
            key={`${key}-summary-B`}
            lineHeight={false}
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
