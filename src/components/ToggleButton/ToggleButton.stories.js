/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ToggleButton from './ToggleButton';

export default {
  title: 'toggleButton',
  component: ToggleButton,
};

export const Toggle = (args) => <ToggleButton {...args} />;
