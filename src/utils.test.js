import { get } from './utils';

test('get', () => {
  const state = {
    name: 'number',
  };

  const f = get('name');
  const g = get('age');

  expect(f(state)).toBe('number');
  expect(g(state)).toBeUndefined();
});
