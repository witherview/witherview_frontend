/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import TimeButton from './TimeButton';

export default {
  title: 'timeButton',
  component: TimeButton,
};
const Template = (args) => <TimeButton {...args} />;

export const icon = Template.bind({});
