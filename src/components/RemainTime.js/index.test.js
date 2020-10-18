import React from 'react';

import { render } from '@testing-library/react';

import RemainTime from './index';

function renderButton(time = 1000) {
  return render(<RemainTime time={time} />);
}

describe('RemainTime', () => {
  it('render without explosion', () => {
    const { container } = renderButton();

    expect(container).toHaveTextContent(':');
  });

  // TODO: need enhance
  context('when time is lesser then 60', () => {
    it('toggle is activate', () => {
      const { container } = renderButton(40);

      expect(container).toHaveTextContent(40);
    });
  });

  // TODO: need enhance
  context('when time is bigger then 60', () => {
    it('toggle is not activate', () => {
      const { container } = renderButton(100);

      expect(container).toHaveTextContent(100);
    });
  });
});
