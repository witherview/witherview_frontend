import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from '@utils/snippet';
import { setLogin } from '@store/Auth/auth';

export default function AuthRoute({ component: Component, render, ...rest }) {
  const dispatch = useDispatch();
  const authSelector = useSelector(get('auth'));
  useEffect(() => {
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    if (name !== authSelector.name) {
      dispatch(setLogin({ email, name }));
    }
  }, []);
  return (
    <Route
      {...rest}
      render={(props) => (authSelector.isLogin ? (
        render ? (
          render(props)
        ) : (
          <Component {...props} />
        )
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      ))}
    />
  );
}

AuthRoute.propTypes = {
  component: PropTypes.any,
  render: PropTypes.any,
  location: PropTypes.any,
};
