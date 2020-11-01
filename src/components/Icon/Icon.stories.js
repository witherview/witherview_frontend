/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Icon from './Icon';

export default {
  title: 'icon',
  component: Icon,
};
const IconComponent = (args) => <Icon {...args} />;

export const icon = IconComponent.bind({});
icon.args = {
  type: 'bubble_black',
};
