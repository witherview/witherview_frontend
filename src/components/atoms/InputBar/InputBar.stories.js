import React, { useState } from 'react';
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import InputBar from './InputBar';

export default {
  title: 'Atoms/Input Bar',
  component: InputBar,
};

export const inputBar = (args) => {
  const [value, setValue] = useState('');
  const test = () => {
    console.log(123);
  };
  return (
    <InputBar
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      submit={test}
    />
  );
};

inputBar.args = {
  rules: [
    (v) => !!(v) || '해당 데이터는 필수입니다.',
  ],
};
