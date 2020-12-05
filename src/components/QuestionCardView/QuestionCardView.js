import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '@components/Icon';

const Box = styled.div`
  position: relative;
  width: 334px;
  height: 270px;
  border-radius: 10px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border: solid ${({ clicked }) => (clicked ? '3px #5f5fd9;' : '1px #f6f6f6;')};
  background-color: #ffffff;
  box-sizing: content-box;
  user-select: none;
  cursor: pointer;
  z-index: 9;
`;

const Content = styled.div`
  padding: 0 41px;
`;

const IconBox = styled.div`
  width: 40px;
  height: 30px;
  margin: 0px 26px 0 0;
  margin-left: auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  z-index: 10;
`;

const IconEach = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 7px;
  background-color: #9e9e9e;
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
  text-overflow: ellipsis;
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

const List = styled.ul`
  width: 143px;
  padding: 18.5px 0px 18.5px 0px;
  position: absolute;
  top: 30px;
  right: 25px;
  z-index: 101;
  background-color: #fff;
  transition: 0.25s ease all;
  transform: scale(0);
  transform-origin: 0 1;
  border-radius: 10px;
  box-shadow: 0 12px 24px 0 rgba(4, 4, 161, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transform: ${({ isOpen }) => isOpen && 'scale(1)'};
`;

const Item = styled.li`
  width: 87px;
  padding-top: 12.5px;
  padding-bottom: 12.5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Each = styled.div`
  width: 100%;
  user-select: none;
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  color: #9e9e9e;
  &:hover {
    color: #f2886b;
    text-decoration: none;
  }
`;

export default function QuestionCardView({
  id,
  number,
  title,
  description,
  handleDelete,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const handleMove = (e) => {
    if (e.target === e.currentTarget) {
      history.push(`/question/${id}`);
    }
  };
  const toggle = (set) => setIsOpen(set);
  return (
    <>
      <Box onClick={handleMove}>
        <IconBox isOpen={isOpen} onMouseOver={() => toggle(true)}>
          <IconEach />
          <IconEach />
          <IconEach />
        </IconBox>
        <List isOpen={isOpen} onMouseLeave={() => toggle(false)}>
          <Item>
            <Each onClick={() => handleDelete()}>삭제</Each>
          </Item>
        </List>
        <Content onClick={handleMove}>
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
            <TitleText>{title}</TitleText>
            <Icon type="post" alt="" />
          </Title>
          <SubTitle>{description}</SubTitle>
        </Content>
      </Box>
    </>
  );
}

QuestionCardView.propTypes = {
  id: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleDelete: PropTypes.func,
};

QuestionCardView.defaultProp = {
  id: 0,
  number: 1,
  title: '예시 제목입니다.',
  description: '예시 내용입니다.',
  handleDelete: () => {},
};
