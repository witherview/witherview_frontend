/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Button from './Button';

export default {
  title: 'button',
  component: Button,
};
const ButtonComponent = (args) => <Button {...args} />;

export const blueThemeButton = ButtonComponent.bind({});
export const grayThemeButton = ButtonComponent.bind({});

blueThemeButton.args = {
  text: '버튼',
  theme: 'blue',
};

grayThemeButton.args = {
  text: '버튼',
  theme: 'gray',
};
