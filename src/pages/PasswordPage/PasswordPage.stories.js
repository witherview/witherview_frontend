import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import PasswordPage from './PasswordPage';

export default {
  title: 'pages/Main/Password',
  component: PasswordPage,
  argTypes: {
    mode: {
      options: ['find', 'reset'],
      control: { type: 'radio' },
      defaultValue: 'find',
    },
  },
};

const Password = (args) => {
  const history = useHistory();
  const [location, setLocation] = useState({
    pathname: '/password-find',
  });

  useEffect(() => {
    if (args.mode === 'find')
      setLocation({
        pathname: '/password-find',
      });
    if (args.mode === 'reset')
      setLocation({
        pathname: '/password-reset',
        search: '?token=someToken',
      });
    // eslint-disable-next-line react/destructuring-assignment
  }, [args.mode]);

  return <PasswordPage history={history} location={location} />;
};

export const defaultPassword = Password.bind({});
