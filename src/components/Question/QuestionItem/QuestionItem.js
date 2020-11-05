/* eslint-disable no-param-reassign */
import React, { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../../Icon';

const QuestionCard = styled.div`
  position: relative;
  display: flex;
  width: 1158px;
  height: 60px;
  margin: 5px;
  border-radius: 10px;
  background-color: ${({ clicked }) => (clicked ? '#5f5fd9' : '#f3f3ff')};
  align-items: center;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
  z-index: 2;
`;

const QusetionSymbol = styled.span`
  font-family: AppleSDGothicNeoB00;
  margin-left: 40px;
  margin-right: 25px;
  font-size: 24px;
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
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: ${({ clicked }) => (clicked ? '#ffffff' : '#000000')};
`;

const IconWrapper = styled.span`
  margin-left: auto;
  margin-right: 46px;
`;

const AnswerBox = styled.div`
  width: 1153px;
  margin: 5px;
  box-shadow: 0 6px 24px 0 rgba(4, 4, 161, 0.04);
  border: solid 3px #f6f6f6;
  border-radius: 10px;
  background-color: #ffffff;
  transform: translateY(-20px);
`;

const ContenText = styled.div`
  width: 963px;
  height: auto;
  margin: 70px 96px;
  outline: none;
  resize: none;
  border: none;
  word-break: break-all;
  text-align: justify;
  font-family: AppleSDGothicNeoM00;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #000000;
`;

export default function QuestionItem({
  id, text, index, moveCard,
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
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
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

  return (
    <>
      <div ref={ref} isDragging={isDragging}>
        <QuestionCard onClick={handleTitleClick} clicked={clicked}>
          <QusetionSymbol clicked={clicked}>Q</QusetionSymbol>
          <TitleText clicked={clicked}>
            {text}
          </TitleText>
          <IconWrapper>
            <Icon type={clicked ? 'arrow_up' : 'arrow_down'} alt="" />
          </IconWrapper>
        </QuestionCard>
        <AnswerBox>
          <ContenText contentEditable="true">
            안녕하십니까! 플러스엑스 예비 UX 디자이너 홍길동 인사드립니다.
          </ContenText>
        </AnswerBox>
      </div>
    </>
  );
}

QuestionItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  index: PropTypes.number,
  moveCard: PropTypes.func,
};

QuestionItem.defaultProp = {
  id: 1,
  text: 'Sample Question',
  index: 1,
  moveCard: () => {},
};
