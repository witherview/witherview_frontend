import { get, numberPad } from './snippet';

test('get', () => {
  const state = {
    name: 'number',
  };

  const f = get('name');
  const g = get('age');

  expect(f(state)).toBe('number');
  expect(g(state)).toBeUndefined();
});

describe('numberPad', () => {
  context('contain second parameter', () => {
    it('digit only 1', () => {
      expect(numberPad('0')).toBe('00');
    });

    it('digit over 2', () => {
      expect(numberPad('10')).toBe('10');
    });
  });

  context('without second parameter', () => {
    context('contain second parameter', () => {
      it('digit only 1', () => {
        expect(numberPad('0', 3)).toBe('000');
      });

      it('digit over 2', () => {
        expect(numberPad('10', 3)).toBe('010');
      });
    });
  });
});
