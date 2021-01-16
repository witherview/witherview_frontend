import React from 'react';

import TextBox from './TextBox';

export default {
  title: 'Molecules/TextBox',
  component: TextBox,
};

export const textBox = () => (
  <TextBox
    topText="실제 면접을 본다고 생각하고 상황을 상상해보세요"
    bottomText="3분 동안 예상 면접 질문에 대해 답변을 생각해 보세요."
  />
);
