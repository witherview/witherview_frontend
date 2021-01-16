/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TextButton from './TextButton';

export default {
  title: 'Atoms/Text Button',
  component: TextButton,
};

const textButtonView = (args) => <TextButton {...args} />;

export const textButton = textButtonView.bind({});

textButton.args = {
  text: '이공계_공기업',
};
