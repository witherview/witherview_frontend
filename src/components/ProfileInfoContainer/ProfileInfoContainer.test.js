import React from 'react';

import { render } from '@testing-library/react';

import ProfileInfoContainer from './index';

const profileImage = 'https://avatars2.githubusercontent.com/u/16266103?s=460&u=46ab2774d38212f0d0050592ce02dbcf36a7a97a&v=4';

function renderProfileInfoContainer(name = '홍길동', participateRate = 90, src = profileImage) {
  return render(<ProfileInfoContainer name={name} pariticpateRate={participateRate} src={src} />);
}

describe('ProfileIcon', () => {
  it('render without explosion', () => {
    const { container } = renderProfileInfoContainer();

    expect(container).toHaveTextContent('%의 참여도');
  });
});
