/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Icon from './Icon';

export default {
  title: 'icon',
  component: Icon,
};
const Template = (args) => <Icon {...args} />;

export const icon = Template.bind({});
icon.args = {
  type: 'bubble_black',
};
