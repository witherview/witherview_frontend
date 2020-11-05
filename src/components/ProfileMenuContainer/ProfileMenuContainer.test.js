import React from 'react';

import { render } from '@testing-library/react';

import ProfileMenuContainer from './index';

function renderProfileMenuContainer(name = '홍길동', src) {
  return render(<ProfileMenuContainer name={name} src={src} />);
}

describe('ProfileIcon', () => {
  it('render without explosion', () => {
    const { container } = renderProfileMenuContainer();

    expect(container).toHaveTextContent('홍길동');
  });
});
