import React, { useState, useCallback, useEffect } from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import QuestionItem from '../QuestionItem';

export default function QuestionList({ questions }) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(questions);
  }, []);
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
      title={card.question}
      text={card.answer}
      moveCard={moveCard}
    />
  );
  return (
    <>
      <div>{cards.map((card, i) => renderCard(card, i))}</div>
    </>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.array,
};

QuestionList.defaultProp = {
  questions: [],
};
