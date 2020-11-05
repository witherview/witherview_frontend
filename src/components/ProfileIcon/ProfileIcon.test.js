import React from 'react';

import { render } from '@testing-library/react';

import ProfileIcon from './index';

function renderProfileIcon(src, size) {
  return render(<ProfileIcon src={src} size={size} />);
}

describe('ProfileIcon', () => {
  it('render without explosion', () => {
    const { container } = renderProfileIcon();

    expect(container).toBeTruthy();
  });
});
