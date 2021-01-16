import React from 'react';

import { render } from '@testing-library/react';

import profileExample from '@assets/images/profile_example.png';
import ProfileIcon from './index';

function renderProfileIcon(src = profileExample, size) {
  return render(<ProfileIcon src={src} size={size} />);
}

describe('ProfileIcon', () => {
  it('render without explosion', () => {
    const { container } = renderProfileIcon();

    expect(container).toBeTruthy();
  });
});
