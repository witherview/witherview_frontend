import React from 'react';

import { render } from '@testing-library/react';

import SideBar from './SideBar';

function renderSideBar() {
  return render(<SideBar />);
}

describe('RemainTime', () => {
  it('render without explosion', () => {
    const { container } = renderSideBar();

    expect(container).toBeTruthy();
  });
});
