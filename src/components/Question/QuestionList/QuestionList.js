import React, { useState, useCallback } from 'react';
import update from 'immutability-helper';
import QuestionItem from '../QuestionItem';

export default function QuestionList() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: '1번제목',
      text: '1번내용',
    },
    {
      id: 2,
      title: '2번제목',
      text: '2번내용',
    },
    {
      id: 3,
      title: '3번제목',
      text: '3번내용',
    },
    {
      id: 4,
      title: '4번제목',
      text: '4번내용',
    },
  ]);
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex];
    setCards(update(cards, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragCard],
      ],
    }));
  }, [cards]);
  const renderCard = (card, index) => (
    <QuestionItem
      key={card.id}
      index={index}
      id={card.id}
      title={card.title}
      text={card.text}
      moveCard={moveCard}
    />
  );
  return (
    <>
      <div>{cards.map((card, i) => renderCard(card, i))}</div>
    </>
  );
}
