import React from 'react';

import { render } from '@testing-library/react';

import ProfileIcon from './index';

const profileImage = 'https://avatars2.githubusercontent.com/u/16266103?s=460&u=46ab2774d38212f0d0050592ce02dbcf36a7a97a&v=4';

function renderProfileIcon(src=profileImage, size) {
  return render(<ProfileIcon src={src} size={size} />);
}

describe('ProfileIcon', () => {
  it('render without explosion', () => {
    const { container } = renderProfileIcon();

    expect(container).toBeTruthy();
  });
});
