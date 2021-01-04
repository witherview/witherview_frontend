import React from 'react';
import SelfTrainPage from './SelfTrainPage';

export default {
  title: 'Pages/Self Study/Study Train',
  component: SelfTrainPage,
};

export const selfTrain = () => (
  <SelfTrainPage match={{
    params: { id: 1 },
  }}
  />
);
