import React from 'react';

import { render } from '@testing-library/react';

import ProfileMenuContainer from './index';

const profileImage = 'https://avatars2.githubusercontent.com/u/16266103?s=460&u=46ab2774d38212f0d0050592ce02dbcf36a7a97a&v=4';

function renderProfileMenuContainer(name = '홍길동', src = profileImage) {
  return render(<ProfileMenuContainer name={name} src={src} />);
}

describe('ProfileIcon', () => {
  it('render without explosion', () => {
    const { container } = renderProfileMenuContainer();

    expect(container).toHaveTextContent('홍길동');
  });
});
