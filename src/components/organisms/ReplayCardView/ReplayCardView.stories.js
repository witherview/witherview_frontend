/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ReplayCardView from './ReplayCardView';

export default {
  title: 'Organisms/Replay Card View',
  component: ReplayCardView,
};
const replayCardView = (args) => <ReplayCardView {...args} />;

export const CardView = replayCardView.bind({});

replayCardView.args = {
  title: '면접 스터디 모집합니다.',
  description: '데이터분석 / AI엔지니어 직무 관련 면접 스터디 입니다.',
  time: '9월 24일 PM 14:00',
};
