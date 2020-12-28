/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

import QuestionCardView from './QuestionCardView';

export default {
  title: 'questionCardView',
  component: QuestionCardView,
};

const Div = styled.div`
  display: flex;
  width: 500px;
  height: 300px;
  align-items: center;
  justify-content: center;
`;

const questionCardView = (args) => (
  <Div>
    <QuestionCardView {...args} />
  </Div>
);

export const CardView = questionCardView.bind({});
export const LongCardView = questionCardView.bind({});

CardView.args = {
  number: 15,
  title: '카카오 1차',
  description: '데이터분석',
};

LongCardView.args = {
  number: 150,
  title: '카카오 엔터프라이즈 1차',
  description: '데이터분석 / AI 전문가 / BigData',
};
