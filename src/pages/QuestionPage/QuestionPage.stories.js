import React from 'react';
import QuestionPage from './QuestionPage';

export default {
  title: 'Pages/Self Study/Question Page',
  component: QuestionPage,
};

export const questionPage = () => (
  <QuestionPage match={{ params: { id: 1 } }} />
);
