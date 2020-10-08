import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';

import { setNumber, resetNumber } from '../slice';
import { get } from '../utils';

const Font = styled.div`
  font-family: 'AppleSDGothicNeoBold';
`;

export default function Button() {
  const dispatch = useDispatch();

  const number = useSelector(get('number'));

  function add() {
    dispatch(setNumber({ number: number + 1 }));
  }

  function minus() {
    dispatch(setNumber({ number: number - 1 }));
  }

  return (
    <div>
      <Font id="test-num">{number}</Font>
      <button type="button" onClick={() => add()}>
        +
      </button>
      <button type="button" onClick={() => minus()}>
        -
      </button>
      <button type="button" onClick={() => dispatch(resetNumber())}>
        reset
      </button>
    </div>
  );
}
