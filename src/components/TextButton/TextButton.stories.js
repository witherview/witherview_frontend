/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TextButton from './TextButton';

export default {
  title: 'textButton',
  component: TextButton,
};

const textButtonView = (args) => <TextButton {...args} />;

export const textButton = textButtonView.bind({});

textButton.args = {
  text: '이공계_공기업',
};
