import React, { useCallback } from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import QuestionItem from '../QuestionItem';

export default function QuestionList({ questions, setQuestions }) {
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const dragCard = questions[dragIndex];
    setQuestions(update(questions, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragCard],
      ],
    }));
  }, [questions]);
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
      <div>{questions.map((card, i) => renderCard(card, i))}</div>
    </>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.array,
  setQuestions: PropTypes.func,
};

QuestionList.defaultProp = {
  questions: [],
};
