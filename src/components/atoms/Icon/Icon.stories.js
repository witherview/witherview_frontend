import React from 'react';
import Icon from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
};
const IconComponent = (args) => <Icon {...args} />;

export const icon = IconComponent.bind({});

icon.args = {
  type: 'bubble_black',
};
