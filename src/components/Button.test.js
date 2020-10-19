// import React from 'react';

// import { useSelector, useDispatch } from 'react-redux';

// import { render, fireEvent } from '@testing-library/react';

// import Button from './Button';

// function renderButton() {
//   return render(<Button />);
// }

// describe('Button', () => {
//   const dispatch = jest.fn();

//   beforeEach(() => {
//     dispatch.mockClear();

//     useSelector.mockImplementation((selector) => selector({
//       number: 0,
//     }));

//     useDispatch.mockImplementation(() => dispatch);
//   });

//   it('render without explosion', () => {
//     const { container } = renderButton();

//     expect(container).toHaveTextContent('+-reset');
//   });

//   context('when click add button', () => {
//     it('number is increase', () => {
//       const { getByText } = renderButton();

//       fireEvent.click(getByText('+'));

//       expect(dispatch).toBeCalledTimes(1);
//     });
//   });

//   context('when click minus button', () => {
//     it('number is decrease', () => {
//       const { getByText } = renderButton();

//       fireEvent.click(getByText('-'));

//       expect(dispatch).toBeCalledTimes(1);
//     });
//   });

//   context('when click reset button', () => {
//     it('number is reset', () => {
//       const { getByText } = renderButton();

//       fireEvent.click(getByText('reset'));

//       expect(dispatch).toBeCalledTimes(1);
//     });
//   });
// });
