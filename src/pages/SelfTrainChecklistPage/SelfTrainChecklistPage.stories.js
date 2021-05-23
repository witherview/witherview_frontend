import React from 'react';
import SelfTrainChecklistPage from './SelfTrainChecklistPage';

export default {
  title: 'Pages/Self Study/Check List',
  component: SelfTrainChecklistPage,
};

export const checkList = (args) => (
  <SelfTrainChecklistPage
    {...args}
    match={{
      params: { id: 1 },
    }}
  />
);
