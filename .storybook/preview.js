import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../src/style/globalStyles';
import { Provider } from 'react-redux';
import { WithThemeProvider } from 'storybook-addon-styled-components-themes'
import { ThemeProvider } from 'styled-components';
import theme from '../src/style/theme';
import store from '@store';

const customViewports = {
  landScapeDefault: {
    name: 'Default Environment',
    styles: {
      width: '144vh',
      height: '60vh',
    },
  },
  landScape1: {
    name: '16:9',
    styles: {
      width: '107vh',
      height: '60vh',
    },
  },
  landScape2: {
    name: '16:10',
    styles: {
      width: '96vh',
      height: '60vh',
    },
  },
};

console.log('테마', theme);

addParameters({
  layout: 'fullscreen',
  viewport: { viewports: customViewports, defaultViewport: 'landScapeDefault' },
  styledComponentsThemes: {
    themes: [theme.viewModeTheme.light, theme.viewModeTheme.dark],
    label: 'name'
  }
});

addDecorator((Story) => (
  <Provider store={store}>
    <WithThemeProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Story />
      </BrowserRouter>
    </WithThemeProvider>
  </Provider>
));
