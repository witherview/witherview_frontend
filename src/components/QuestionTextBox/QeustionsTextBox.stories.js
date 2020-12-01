import React from 'react';
import QuestionTextBox from './QuestionTextBox';

export default {
  title: 'QuestionTextBox',
  component: QuestionTextBox,
};

export const QuestionTextBoxDefault = () => <QuestionTextBox order={1} question="test" width={1025} />;
