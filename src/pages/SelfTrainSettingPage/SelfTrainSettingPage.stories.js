import React from 'react';

import SelfTrainSettingPage from './SelfTrainSettingPage';

export default {
  title: 'pages/Self Study/Study Setting',
  component: SelfTrainSettingPage,
};

export const studySetting = () => (
  <SelfTrainSettingPage
    match={{
      params: { id: 1 },
    }}
  />
);
