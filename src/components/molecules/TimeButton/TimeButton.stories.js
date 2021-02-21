/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TimeButton from './TimeButton';

export default {
  title: 'Molecules/Time Button',
  component: TimeButton,
};

const timeButton = (args) => <TimeButton {...args} />;

export const timeButtonDefault = timeButton.bind({});

export const clickedTimeButton = timeButton.bind({});

timeButton.args = { time: 30 };
clickedTimeButton.args = { time: 45 };
