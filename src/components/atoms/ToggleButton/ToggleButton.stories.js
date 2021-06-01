import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

export default {
  title: 'Atoms/Toggle Button',
  component: ToggleButton,
};

export const Toggle = (args) => <ToggleButton {...args} />;
export const ToggleWithFunction = (args) => {
  const [state, setState] = useState('Deactive');

  const onToggle = (isChecked) => {
    if (isChecked) {
      setState('Active');
    } else {
      setState('Decative');
    }
  };

  return (
    <>
      <ToggleButton
        {...args}
        cb={onToggle}
      />
      <div>{state}</div>
    </>
  );
};
