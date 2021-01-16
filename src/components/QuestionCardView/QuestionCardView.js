import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '@components/IconTemp';

const Box = styled.div`
  position: relative;
  width: 33.4vh;
  height: 27vh;
  border-radius: 1vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  border: solid
    ${({ clicked }) => (clicked ? '0.3vh #5f5fd9;' : '0.1vh #f6f6f6;')};
  background-color: #ffffff;
  box-sizing: content-box;
  user-select: none;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 0 4.1vh;
`;

const IconBox = styled.div`
  width: 4vh;
  height: 3vh;
  margin: 0px 2.6vh 0 0;
  margin-left: auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  z-index: 10;
`;

const IconEach = styled.div`
  width: 0.7vh;
  height: 0.7vh;
  border-radius: 0.7vh;
  background-color: #9e9e9e;
`;

const Number = styled.div`
  width: 100%;
  height: 8.3vh;
  display: flex;
  align-items: center;
  margin-bottom: 14.5px;
`;

const NumberText = styled.div`
  float: left;
  font-family: TitilliumWeb;
  font-size: 5.5vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.51;
  letter-spacing: normal;
  text-align: left;
  color: #5f5fd9;
  margin-right: 2vh;
`;

const SubText = styled.div`
  width: 15vh;
  height: 5vh;
  float: left;
  font-family: AppleSDGothicNeoM00;
  font-size: 1.5vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #3d3d3d;
`;

const Line = styled.div`
  width: 24.3vh;
  height: 0;
  border-top: solid 0.2vh #707070;
  margin-bottom: 3.25vh;
  margin-left: 0.8vh;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const TitleText = styled.span`
  max-width: 21vh;
  max-height: 3vh;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  font-family: AppleSDGothicNeoEB00;
  font-size: 1.9vh;
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
  max-width: 25vh;
  max-height: 3vh;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  font-family: AppleSDGothicNeoB00;
  font-size: 2vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const List = styled.ul`
  width: 14.3vh;
  padding: 1.85vh 0 1.85vh 0;
  position: absolute;
  top: 3vh;
  right: 2.5vh;
  background-color: #fff;
  transition: 0.25s ease all;
  transform: scale(0);
  transform-origin: 0 1;
  border-radius: 10px;
  box-shadow: 0 1.2vh 2.4vh 0 rgba(4, 4, 161, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transform: ${({ isOpen }) => isOpen && 'scale(1)'};
`;

const Item = styled.li`
  width: 8.7vh;
  padding-top: 1.25vh;
  padding-bottom: 1.25vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Each = styled.div`
  width: 100%;
  user-select: none;
  font-family: AppleSDGothicNeoM00;
  font-size: 2vh;
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

  const handleMove = () => {
    history.push(`/question/${id}`);
  };

  const toggle = (set) => setIsOpen(set);

  return (
    <>
      <Box onClick={() => handleMove()}>
        <IconBox isOpen={isOpen} onMouseOver={() => toggle(true)}>
          <IconEach />
          <IconEach />
          <IconEach />
        </IconBox>
        <List isOpen={isOpen} onMouseLeave={() => toggle(false)}>
          <Item>
            <Each onClick={() => handleDelete(id)}>삭제</Each>
          </Item>
        </List>
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
