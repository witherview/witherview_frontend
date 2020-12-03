import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 310px;
  width: 482px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 50px;
`;

const WrapIcon = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 64px;
  background-color: #eef0ff;
  width: 105px;
  height: 105px;
  border-radius: 20px;
`;

const WrapContent = styled.div`
  width: 100%;
  height: 256px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border: solid 1px #f6f6f6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapInnerContent = styled.div`
  height: 117px;
  width: 360px;
`;

const WrapText = styled.div`
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`};
  font-size: ${({ size }) => size}px;
  ${({ bold }) => bold && 'font-family: AppleSDGothicNeoEB00;'}
  color: ${({ color }) => color};
`;

const WrapPadding = styled.div`
  padding: ${({ padding }) => padding && '30px 0 30px 0'};
`;

export default function TextBoxC({ header, summary }) {
  return (
    <Wrapper>
      <WrapIcon />
      <WrapContent>
        <WrapInnerContent>
          <WrapPadding padding>
            <WrapText size={28} bold>
              {header}
            </WrapText>
          </WrapPadding>
          <div>
            {summary.map((each, key) => (
              <WrapText
                key={`${key}-summary-C`}
                size={19}
                lineHeight="130%"
                color="#3d3d3d"
              >
                {each}
              </WrapText>
            ))}
          </div>
        </WrapInnerContent>
      </WrapContent>
    </Wrapper>
  );
}

TextBoxC.propTypes = {
  header: PropTypes.string,
  summary: PropTypes.array,
};

TextBoxC.defaultProps = {
  header: '',
  summary: [],
};
