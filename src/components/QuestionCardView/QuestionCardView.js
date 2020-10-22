import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const Box = styled.div`
  display: flex;
  width: 334px;
  height: 270px;
  border-radius: 10px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border: solid 1px ${({ clicked }) => (clicked ? '#5f5fd9;' : '#f6f6f6;')}
  background-color: #ffffff;
  box-sizing: border-box;  
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
  width: 62px;
  height: 83px;
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
  border: solid 1px #707070;
  margin-bottom: 32.5px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const TitleText = styled.span`
  max-width: 210px;
  max-height: 30px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
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
  white-space:nowrap;
  word-wrap:normal;
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

export default function QuestionCardView() {
  const [clicked, setClicked] = useState(false);
  const handleButtonClick = () => {
    setClicked(!clicked);
  };
  return (
    <Box onClick={handleButtonClick} clicked={clicked}>
      <Content>
        <Number>
          <NumberText>15</NumberText>
          <SubText>
            개의 질문이
            <br />
            존재합니다.
          </SubText>
        </Number>
        <Line />
        <Title>
          <TitleText>
            카카오 1차ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
          </TitleText>
          <Icon type="post" alt="" />
        </Title>
        <SubTitle>서비스 기획 ㅁㅁㅁㅁㅁㅁㅁㅁ</SubTitle>
      </Content>
    </Box>
  );
}
