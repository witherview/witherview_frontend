import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from '@utils/snippet';
import { setLogin } from '@store/Auth/auth';
import { getUserInfoApi } from '@repository/accountRepository';

export default function AuthRoute({ component: Component, render, ...rest }) {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(get('auth'));
  const accessToken = sessionStorage.getItem('accessToken');

  const fetch = async () => {
    try {
      const {
        data: {
          email,
          name,
          mainIndustry,
          mainJob,
          subIndustry,
          subJob,
          profileImg,
          phoneNumber,
        },
      } = await getUserInfoApi();

      dispatch(
        setLogin({
          isLogin: true,
          email,
          name,
          mainIndustry,
          mainJob,
          subIndustry,
          subJob,
          profileImg,
          phoneNumber,
        }),
      );
    } catch (error) {
      if (error.response.status === 401) {
        sessionStorage.removeItem('accessToken');
      }
      alert(error);
    }
  };

  useEffect(() => {
    if (!isLogin && accessToken !== null) {
      fetch();
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin || accessToken ? (
          render ? (
            render(props)
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect
            to={{ pathname: '/404', state: { from: props.location } }}
          />
        )
      }
    />
  );
}

AuthRoute.propTypes = {
  component: PropTypes.any,
  render: PropTypes.any,
  location: PropTypes.any,
};
