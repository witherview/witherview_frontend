import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

function renderApp() {
  return render(<App />);
}
describe('App', () => {
  it('render without explosion', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('Hello React!');
  });
});
