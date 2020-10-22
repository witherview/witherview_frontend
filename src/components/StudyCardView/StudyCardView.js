import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Box = styled.div`
  width: 374px;
  height: 382px;
  border-radius: 20px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border: solid 1px #f6f6f6;
  background-color: white;
  box-sizing:border-box;
  display:flex;
  &:hover {
    color: white;
    background-color: black;
  }
`;

const Content = styled.div`
  padding: 40px;
  display: flex;
  flex-direction:column;
  justify-content:space-around;
  &:hover {
    border-radius: 20px;
    background-image: linear-gradient(to bottom, #2323de, #4848da);
    box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);

    & > div, & > div > span {
      color: #ffffff;
    }
    & > div > div {
      color: #0c0c59;
    }
    & : nth-child(4) {
      background: #fcfcfc;
    }
  }
`;

const Title = styled.div`
  display:inline-block;
  font-family: AppleSDGothicNeoEB00;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: black;
  word-break:break-all;
  justify-self: flex-start;
`;

const Description = styled.div`
  display:inline-block;
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: black;
  word-break:break-all;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
`;

const TimeText = styled.span`
  text-align: left;
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: normal;
  color: #3d3d3d;
  word-break:break-all;
  margin-left: 27px;
`;

const Button = styled.div`
  width: 296px;
  height: 55px;
  border-radius: 10px;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #5f5fd9;
  
`;

export default function StudyCardView({ title, description, time }) {
  const [type, setType] = useState('time_black');
  const hoverIn = () => {
    setType('time_white');
  };

  const hoverOut = () => {
    setType('time_black');
  };
  return (
    <Box onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
      <Content>
        <Title>
          {title}
        </Title>
        <Description>
          {description}
        </Description>
        <Time>
          <Icon type={type} alt="" />
          <TimeText>
            {time}
          </TimeText>
        </Time>
        <Button>
          <ButtonText>
            입장하기
          </ButtonText>
        </Button>
      </Content>
    </Box>
  );
}

StudyCardView.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

StudyCardView.defaultProp = {
  title: '예시 방입니다.',
  description: '예시 내용입니다.',
  time: '20201022',
};
