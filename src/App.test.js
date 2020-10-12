import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

function renderApp({ path }) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}
describe('App', () => {
  context('with path /', () => {
    it('show button test', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('+-reset');
    });
  });

  context('with invalid path', () => {
    it('show 404 page', () => {
      const { container } = renderApp({ path: '/broken' });

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
