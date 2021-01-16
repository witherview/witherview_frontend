import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyles from '../src/style/globalStyles';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '../src/style/theme';
import store from '@store';

addDecorator((Story) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  </Provider>
));
