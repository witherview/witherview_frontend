/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Button from './Button';

export default {
  title: 'Molecules/Button',
  component: Button,
};
const ButtonComponent = (args) => <Button {...args} />;

export const defaultButton = ButtonComponent.bind({});

defaultButton.args = {
  text: '버튼',
  theme: 'blue',
};
