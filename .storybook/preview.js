import React from 'react';
import { addDecorator } from '@storybook/react'
import { withProvider } from './decorators/addon-redux-toolkit'
import GlobalStyles from "../src/style/globalStyles";

addDecorator((story) => (
  <>
    <GlobalStyles />
    {story()}
  </>
));

addDecorator(withProvider())

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}