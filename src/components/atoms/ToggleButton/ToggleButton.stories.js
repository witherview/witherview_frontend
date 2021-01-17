import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

export default {
  title: 'Atoms/Toggle Button',
  component: ToggleButton,
};

export const Toggle = (args) => <ToggleButton {...args} />;
export const ToggleWithFunction = (args) => {
  const [state, setState] = useState('Deactive');

  const handleClickActive = () => {
    setState('Active');
  };

  const handleClickDeactive = () => {
    setState('Decative');
  };
  return (
    <>
      <ToggleButton
        {...args}
        funcActive={handleClickActive}
        funcDeactive={handleClickDeactive}
      />
      <div>{state}</div>
    </>
  );
};
