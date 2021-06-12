import React, { useEffect, useState } from 'react';
import InputBar from './InputBar';

export default {
  title: 'Atoms/Input Bar',
  component: InputBar,
};

export const inputBar = () => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (isValid) console.log(`유효성 값 변경 : ${isValid}`);
  }, [isValid]);
  return (
    <InputBar
      rules={[(v) => !!(v) || '해당 데이터는 필수입니다.']}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      isValid={setIsValid}
    />
  );
};
