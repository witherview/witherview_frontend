import React, { useState } from 'react';
import InputBar from './InputBar';

export default {
  title: 'Atoms/Input Bar',
  component: InputBar,
};

export const inputBar = () => {
  const [value, setValue] = useState('');
  return (
    <InputBar
      rules={[(v) => !!v || '해당 데이터는 필수입니다.']}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
