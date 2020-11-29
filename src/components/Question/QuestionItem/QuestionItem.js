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
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 46px;
  ${({ clicked }) => (clicked && 'transform: rotate(180deg)')}
`;

const AnswerBox = styled.div`
  width: 1153px;
  margin: 5px;
  display: ${({ clicked }) => (clicked ? 'block' : 'none')};
  overflow: hidden;
  box-shadow: 0 6px 24px 0 rgba(4, 4, 161, 0.04);
  border: solid 3px #f6f6f6;
  border-radius: 10px;
  background-color: #ffffff;
  transform: translateY(-20px);
`;

const ContenText = styled.div`
  width: 963px;
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
  id, title, text, index, moveCard,
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

  return (
    <>
      <div ref={ref} isDragging={isDragging}>
        <QuestionCard onClick={handleTitleClick} clicked={clicked}>
          <QusetionSymbol clicked={clicked}>Q</QusetionSymbol>
          <TitleText clicked={clicked}>{title}</TitleText>
          <IconWrapper clicked={clicked}>
            <Icon type={clicked ? 'drop_up' : 'drop_down'} alt="" />
          </IconWrapper>
        </QuestionCard>
        <AnswerBox clicked={clicked}>
          <ContenText contentEditable="true">{text}</ContenText>
        </AnswerBox>
      </div>
    </>
  );
}

QuestionItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  index: PropTypes.number.isRequired,
  moveCard: PropTypes.func.isRequired,
};

QuestionItem.defaultProp = {
  id: 1,
  title: 'Sample Title',
  text: 'Sample Question',
  index: 1,
  moveCard: () => {},
};
