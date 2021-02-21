import configureStore from 'redux-mock-store';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import reducer, { setNumber, resetNumber } from './slice';

const mockStore = configureStore([...getDefaultMiddleware()]);

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      number: 0,
    };

    it('returns initialSatate', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  it('setAuth', () => {
    const number = 2;

    const state = reducer(undefined, setNumber({ number }));

    expect(state.number).toEqual(number);
  });

  it('resetNumber', () => {
    const store = mockStore({});

    store.dispatch(resetNumber());

    const actions = store.getActions();

    const { number } = actions[0].payload;

    expect(actions[0].payload.number).toEqual(number);
  });
});
