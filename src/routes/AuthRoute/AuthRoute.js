import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from '@utils/snippet';
import { setLogin, setImage } from '@store/Auth/auth';

export default function AuthRoute({ component: Component, render, ...rest }) {
  const dispatch = useDispatch();
  const authSelector = useSelector(get('auth'));
  useEffect(() => {
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    const mainIndustry = sessionStorage.getItem('mainIndustry');
    const mainJob = sessionStorage.getItem('mainJob');
    const subIndustry = sessionStorage.getItem('subIndustry');
    const subJob = sessionStorage.getItem('subJob');
    const image = sessionStorage.getItem('image');

    if (name !== authSelector.name) {
      dispatch(
        setLogin({
          email,
          name,
          mainIndustry,
          mainJob,
          subIndustry,
          subJob,
        }),
      );
      dispatch(
        setImage({
          image,
        }),
      );
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
      ))
      }
    />
  );
}

AuthRoute.propTypes = {
  component: PropTypes.any,
  render: PropTypes.any,
  location: PropTypes.any,
};
