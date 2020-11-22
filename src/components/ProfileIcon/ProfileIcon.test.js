import React from 'react';

import { render } from '@testing-library/react';

import ProfileIcon from './index';

import profileExample from '../../../public/assets/images/profile_example.png';

function renderProfileIcon(src = profileExample, size) {
  return render(<ProfileIcon src={src} size={size} />);
}

describe('ProfileIcon', () => {
  it('render without explosion', () => {
    const { container } = renderProfileIcon();

    expect(container).toBeTruthy();
  });
});
