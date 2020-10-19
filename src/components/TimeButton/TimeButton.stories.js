/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import TimeButton from './TimeButton';
import { withState } from '../../stories/addon';

export default {
  title: 'timeButton',
  component: TimeButton,
};
const Template = (args) => <TimeButton {...args} />;

export const timeButton = Template.bind({
  decorators: [withState({
    time: 1,
  })],
});
