/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import InputBar from './InputBar';

export default {
  title: 'inputBar',
  component: InputBar,
};
const Template = (args) => <InputBar {...args} />;

export const inputBar = Template.bind({});
