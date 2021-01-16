/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import StudyCardView from './StudyCardView';

export default {
  title: 'Organisms/Study Card View',
  component: StudyCardView,
};
const studyCardView = (args) => <StudyCardView {...args} />;

export const CardView = studyCardView.bind({});

CardView.args = {
  title: '면접 스터디 모집합니다.',
  description: '데이터분석 / AI엔지니어 직무 관련 면접 스터디 입니다.',
  time: '9월 24일 PM 14:00',
};
