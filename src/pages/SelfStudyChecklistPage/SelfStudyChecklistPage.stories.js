import React from 'react';
import SelfStudyChecklistPage from './SelfStudyChecklistPage';

export default {
  title: 'Pages/Self Study/Check List',
  component: SelfStudyChecklistPage,
};

export const checkList = (args) => (
  <SelfStudyChecklistPage
    {...args}
    match={{
      params: { id: 1 },
    }}
  />
);
