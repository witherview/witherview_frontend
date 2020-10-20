/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import RangeBar from './RangeBar';

export default {
  title: 'rangeBar',
  component: RangeBar,
};
const Template = (args) => <RangeBar {...args} />;

export const rangeBar = Template.bind({});
