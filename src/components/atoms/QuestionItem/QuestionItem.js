/* eslint-disable no-param-reassign */
import React, { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import A from '@atoms';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 115.8vh;
  > i {
    cursor: pointer;
  }
`;

const QuestionCard = styled.div`
  position: relative;
  display: flex;
  width: 111.8vh;
  height: 6vh;
  margin: 0.5vh;
  border-radius: 1vh;
  background-color: ${({ clicked }) => (clicked ? '#5f5fd9' : '#f3f3ff')};
  align-items: center;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
  z-index: 2;
  cursor: pointer;
`;

const QusetionSymbol = styled.span`
  font-family: AppleSDGothicNeoB00;
  margin-left: 4vh;
  margin-right: 2.5vh;
  font-size: 2.4vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: left;
  color: ${({ clicked }) => (clicked ? '#ffffff' : '#0c0c59')};
`;

const TitleText = styled.span`
  font-family: AppleSDGothicNeoM00;
  font-size: 2.4vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: ${({ clicked }) => (clicked ? '#ffffff' : '#000000')};
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 4.6vh;
  ${({ clicked }) => clicked && 'transform: rotate(180deg)'}
`;

const AnswerBox = styled.div`
  width: 110vh;
  margin: 0.5vh 0.5vh 0.5vh 4.5vh;
  display: ${({ clicked }) => (clicked ? 'block' : 'none')};
  overflow: hidden;
  box-shadow: 0 0.6vh 2.4vh 0 rgba(4, 4, 161, 0.04);
  border: solid 0.3vh #f6f6f6;
  border-radius: 1vh;
  background-color: #ffffff;
  transform: translateY(-2vh);
`;

const ContenText = styled.textarea`
  width: 96.3vh;
  height: 12.4vh;
  margin: 4vh 9.6vh;
  outline: none;
  resize: none;
  border: none;
  word-break: break-all;
  text-align: justify;
  font-family: AppleSDGothicNeoM00;
  font-size: 2.4vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #000000;
`;

export default function QuestionItem({
  id,
  title,
  text,
  index,
  moveCard,
  handleQuestion,
  setQuestions,
  questions,
  setDeletedItems,
  tempId,
}) {
  const [clicked, setClicked] = useState(false);
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: 'card',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: 'card', id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const handleTitleClick = () => {
    setClicked(!clicked);
  };

  const handleDelete = () => {
    const processQuestions = questions.filter((val) => {
      if (val.id !== id || val.tempId !== tempId) {
        return val;
      }
      return undefined;
    });

    if (id) {
      setDeletedItems((items) => {
        const temp = [...items, id];
        return temp;
      });
    }

    setQuestions(processQuestions);
  };

  return (
    <>
      <div ref={ref} isDragging={isDragging}>
        <Wrapper>
          <A.Icon type="remove" alt="" func={handleDelete} />
          <QuestionCard onClick={handleTitleClick} clicked={clicked}>
            <QusetionSymbol clicked={clicked}>Q</QusetionSymbol>
            <TitleText clicked={clicked}>{title}</TitleText>
            <IconWrapper clicked={clicked}>
              <A.Icon type={clicked ? 'drop_up' : 'drop_down'} alt="" />
            </IconWrapper>
          </QuestionCard>
        </Wrapper>
        <AnswerBox clicked={clicked}>
          <ContenText
            onChange={(e) => handleQuestion(e, title)}
            value={text}
          />
        </AnswerBox>
      </div>
    </>
  );
}

QuestionItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  index: PropTypes.number.isRequired,
  moveCard: PropTypes.func.isRequired,
  handleQuestion: PropTypes.func,
  setQuestions: PropTypes.func,
  questions: PropTypes.array,
  setDeletedItems: PropTypes.func,
  tempId: PropTypes.number,
};

QuestionItem.defaultProp = {
  id: undefined,
  title: 'Sample Title',
  text: 'Sample Question',
  index: 1,
  moveCard: () => {},
  handleQuestion: () => {},
  setQuestions: '',
  questions: [],
  setDeletedItems: () => {},
  tempId: undefined,
};
