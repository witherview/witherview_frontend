import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const Box = styled.div`
  position: relative;
  width: 334px;
  height: 270px;
  border-radius: 10px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border: solid  ${({ clicked }) => (clicked ? '3px #5f5fd9;' : '1px #f6f6f6;')};
  background-color: #ffffff;
  box-sizing: content-box;
  user-select: none;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 26px 41px;
`;

const Number = styled.div`
  width: 100%;
  height: 83px;
  display: flex;
  align-items: center;
  margin-bottom: 14.5px;
`;

const NumberText = styled.div`
  float: left;
  font-family: TitilliumWeb;
  font-size: 55px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.51;
  letter-spacing: normal;
  text-align: left;
  color: #5f5fd9;
  margin-right: 20px;
`;

const SubText = styled.div`
  width: 150px;
  height: 50px;
  float: left;
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #3d3d3d;
`;

const Line = styled.div`
  width: 243px;
  height: 0;
  border-top: solid 2px #707070;
  margin-bottom: 32.5px;
  margin-left: 8px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const TitleText = styled.span`
  max-width: 210px;
  max-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  font-family: AppleSDGothicNeoEB00;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const SubTitle = styled.div`
  display: inline-block;
  max-width: 250px;
  max-height: 30px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  font-family: AppleSDGothicNeoB00;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const StyledIcon = styled.div`
  display: inline-block;
  position: absolute;
  top: -18px;
  left: -18px;
`;

export default function QuestionCardView({ number, title, description }) {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <Box onClick={handleButtonClick} clicked={clicked}>
        {clicked && (<StyledIcon><Icon type="check_on" alt="" /></StyledIcon>)}
        <Content>
          <Number>
            <NumberText>{number}</NumberText>
            <SubText>
              개의 질문이
              <br />
              존재합니다.
            </SubText>
          </Number>
          <Line />
          <Title>
            <TitleText>
              {title}
            </TitleText>
            <Icon type="post" alt="" />
          </Title>
          <SubTitle>{description}</SubTitle>
        </Content>
      </Box>
    </>
  );
}

QuestionCardView.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

QuestionCardView.defaultProp = {
  number: 1,
  title: '예시 제목입니다.',
  description: '예시 내용입니다.',
};
