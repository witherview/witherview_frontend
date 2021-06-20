import React, { useEffect, useState } from 'react';
import Validation from './Validation';

import InputBar from '../InputBar';

export default {
  title: 'Atoms/Validation',
  component: Validation,
};

export const inputValidation = () => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (isValid) console.log(`유효성 값 변경 : ${isValid}`);
  }, [isValid]);
  return (
    <Validation
      rules={[(v) => !!v || '해당 데이터는 필수입니다.']}
      value={value}
      isValid={setIsValid}
    >
      <InputBar value={value} onChange={(e) => setValue(e.target.value)} />
    </Validation>
  );
};
