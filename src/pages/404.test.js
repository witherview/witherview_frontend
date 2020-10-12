import React from 'react';

import { render } from '@testing-library/react';

import NotFound from './404';

function renderNotFound() {
  return render(<NotFound />);
}
describe('404', () => {
  it('render without explosion', () => {
    const { container } = renderNotFound();

    expect(container).toHaveTextContent('404 Not Found');
  });
});
