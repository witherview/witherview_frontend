import React from 'react';

import { render } from '@testing-library/react';

import Button from './Button';

function renderButton() {
  return render(<Button />);
}

describe('Button', () => {
  it('render without explosion', () => {
    const { container } = renderButton();

    expect(container).toHaveTextContent('Click Me!');
  });
});
