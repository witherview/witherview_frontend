import React from 'react';

import { render } from '@testing-library/react';

import Sidebar from './Sidebar';

function renderSidebar() {
  return render(<Sidebar />);
}

describe('RemainTime', () => {
  it('render without explosion', () => {
    const { container } = renderSidebar();

    expect(container).toBeTruthy();
  });
});
