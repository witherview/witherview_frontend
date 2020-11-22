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

  const handleQuestion = (e, title) => {
    const newQestion = questions.map((val) => {
      if (val.question === title) {
        return {
          id: val.id,
          question: val.question,
          answer: e.target.value,
          order: val.order,
          modifiedAt: val.modifiedAt,
        };
      }
      return val;
    });
    setQuestions(newQestion);
  };

  const renderCard = (card, index) => (
    <QuestionItem
      key={card.id}
      index={index}
      id={card.id}
      title={card.question}
      text={card.answer}
      moveCard={moveCard}
      handleQuestion={handleQuestion}
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
