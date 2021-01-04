import React from 'react';
import AloneQuestionCheckList from './AloneQuestionCheckList';

export default {
  title: 'Pages/Self Study/Check List',
  component: AloneQuestionCheckList,
};

export const checkList = (args) => (
  <AloneQuestionCheckList
    {...args}
    match={{
      params: { id: 1 },
    }}
  />
);
