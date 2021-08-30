import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { displayModal } from '@store/Modal/modal';
import { MODALS } from '@utils/constant';
import Modal from '@organisms/Modal/Modal';

const Box = styled.div`
  position: relative;
  width: 33.4vh;
  height: 27vh;
  border-radius: 1vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  border: ${({
    theme: {
      self: {
        questionlist: { border },
      },
    },
  }) => `solid 1px ${border}`};
  box-sizing: content-box;
  user-select: none;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 0 4.1vh;
  color: ${({
    theme: {
      self: {
        questionlist: { contentColor },
      },
    },
  }) => contentColor};
`;

const IconBox = styled.div`
  width: 4vh;
  height: 3vh;
  margin: 0 2.6vh 0 0;
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
  margin-bottom: 1.45vh;
`;

const NumberText = styled.div`
  float: left;
  font-family: TitilliumWeb;
  font-size: 5.5vh;
  color: #6e6eff;
  margin-right: 2vh;
`;

const SubText = styled.div`
  width: 15vh;
  height: 5vh;
  float: left;
  font-family: AppleSDGothicNeoM00;
  font-size: 1.9vh;
  line-height: 1.5;
  text-align: left;
  color: ${({
    theme: {
      self: {
        questionlist: { subTextColor },
      },
    },
  }) => subTextColor};
`;

const Line = styled.div`
  width: 24.3vh;
  height: 0;
  border-top: solid 0.2vh #707070;
  margin-bottom: 3.25vh;
  margin-left: 0.8vh;
`;

const Title = styled.div`
  margin-bottom: 1.2vh;
  display: flex;
  align-items: center;
`;

const TitleText = styled.span`
  margin-right: 1.5vh;
  max-width: 21vh;
  max-height: 3vh;
  font-family: AppleSDGothicNeoEB00;
  font-size: 2.2vh;
  font-weight: bold;
  color: ${({
    theme: {
      self: {
        questionlist: { titleTextColor },
      },
    },
  }) => titleTextColor};
`;

const SubTitle = styled.div`
  display: inline-block;
  max-width: 25vh;
  max-height: 3vh;
  font-family: AppleSDGothicNeoB00;
  font-size: 1.8vh;
  color: ${({
    theme: {
      self: {
        questionlist: { subTitleColor },
      },
    },
  }) => subTitleColor};
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
  border-radius: 1vh;
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
  title,
  description,
  handleDelete,
  job,
  length,
}) {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const handleMove = () => {
    history.push(`/self/question/${id}`);
  };

  const toggle = (set) => setIsOpen(set);

  return (
    <>
      {select && (
        <Modal
          modalName={MODALS.QUESTIONLIST_EDIT_MODAL}
          questionListEdit={{
            id,
            title,
            description,
            job,
          }}
        />
      )}
      <Box onClick={() => handleMove()}>
        <IconBox isOpen={isOpen} onMouseOver={() => toggle(true)}>
          <IconEach />
          <IconEach />
          <IconEach />
        </IconBox>
        <List isOpen={isOpen} onMouseLeave={() => toggle(false)}>
          <Item>
            <Each
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(id);
              }}
            >
              삭제
            </Each>
          </Item>
          <Item>
            <Each
              onClick={(e) => {
                e.stopPropagation();
                setSelect(true);
                dispatch(
                  displayModal({ modalName: MODALS.QUESTIONLIST_EDIT_MODAL }),
                );
              }}
            >
              수정
            </Each>
          </Item>
        </List>
        <Content>
          <Number>
            <NumberText>{length}</NumberText>
            <SubText>
              개의 질문이
              <br />
              존재합니다.
            </SubText>
          </Number>
          <Line />
          <Title>
            <TitleText>{title}</TitleText>
          </Title>
          <SubTitle>{description}</SubTitle>
        </Content>
      </Box>
    </>
  );
}

QuestionCardView.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleDelete: PropTypes.func,
  job: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
};

QuestionCardView.defaultProp = {
  id: 0,
  title: '예시 제목입니다.',
  description: '예시 내용입니다.',
  handleDelete: () => {},
};
