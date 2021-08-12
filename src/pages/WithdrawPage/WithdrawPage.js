import React, { useState } from 'react';
import styled from 'styled-components';
import One from './WithdrawStep/One';
import Two from './WithdrawStep/Two';

const Withdraw = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 5vh;
  padding: 3.8vh 0;

  > div {
    padding: 0 5.4vh;
  }
`;

export default function WithdrawPage() {
  const [step, setStep] = useState(2);

  const changeStep = (action) => {
    if (action === 'next') setStep(step + 1);
  };

  return (
    <Withdraw>
      {step === 1 ? <One next={() => changeStep('next')} /> : <Two />}
    </Withdraw>
  );
}
