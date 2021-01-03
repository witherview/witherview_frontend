/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TimeButton from './TimeButton';

export default {
  title: 'timeButton',
  component: TimeButton,
};

const TimeButtonComponent = (args) => <TimeButton {...args} />;

export const timeButton = TimeButtonComponent.bind({});

export const clickedTimeButton = TimeButtonComponent.bind({});

timeButton.args = { time: 30 };
clickedTimeButton.args = { time: 45 };
