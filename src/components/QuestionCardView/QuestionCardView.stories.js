/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import QuestionCardView from './QuestionCardView';

export default {
  title: 'questionCardView',
  component: QuestionCardView,
};
const questionCardView = (args) => <QuestionCardView {...args} />;

export const CardView = questionCardView.bind({});

CardView.args = {
  title: '면접 스터디 모집합니다.',
  description: '데이터분석 / AI엔지니어 직무 관련 면접 스터디 입니다.',
  time: '9월 24일 PM 14:00',
};
