import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from '@utils/snippet';

export default function AuthRoute({ component: Component, render, ...rest }) {
  const authSelector = useSelector(get('auth'));
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
        <Redirect
          to={{ pathname: '/', state: { from: props.location } }}
        />
      ))}
    />
  );
}

AuthRoute.propTypes = {
  component: PropTypes.any,
  render: PropTypes.any,
  location: PropTypes.any,
};
