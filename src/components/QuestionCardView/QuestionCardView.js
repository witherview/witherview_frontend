import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '@components/Icon';
import { deleteQuestionListAPI, getQuestionListAPI } from '@repository/questionListRepository';
import { SetReload } from '@store/Question/question';
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
  z-index: 9;
`;

const Content = styled.div`
  padding: 0 41px;
`;

const IconBox = styled.div`
  width: 20px;
  height: 7px;
  margin: 23px 26px 0 0;
  margin-left: auto;
  background-color: red;
  z-index: 10;
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

const Delete = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 165px;
  top: 40px;
  width: 143px;
  height: 86px;
  border-radius: 10px;
  box-shadow: 0 12px 24px 0 rgba(4, 4, 161, 0.15);
  background-color: #ffffff;
  z-index: 1000;
`;

const DeleteText = styled.div`
  margin-left: 28px;
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #f2886b;
`;

export default function QuestionCardView({ id, number, title, description, handleDelete }) {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const history = useHistory();
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      setClicked(!clicked);
    }
  };

  const handleMove = (e) => {
    if (e.target === e.currentTarget) {
      console.log("bye");
      history.push(`/question/${id}`);
    }
  }

 

  return (
    <>
      <Box onClick={handleMove}>
      <IconBox onClick={handleClick} />
        <Content onClick={handleMove}>
          { clicked && (
              <Delete onClick={(e)=>handleDelete(e, id)}>
                <DeleteText>
                  삭제
                </DeleteText>
              </Delete>
          )}
          
          {/* <Icon type="check_on" alt="" /> */}
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
