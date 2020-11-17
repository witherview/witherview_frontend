import React, { useState, useCallback } from 'react';
import update from 'immutability-helper';
import QuestionItem from '../QuestionItem';
import { QuestionMock } from '../../../mocks/QuestionMock';

export default function QuestionList() {
  /* 추후 api를 통해 받아올 list */
  const [cards, setCards] = useState(QuestionMock);
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
