/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import ProfileMenuContainer from './ProfileMenuContainer';

export default {
  title: 'Organisms/Profile Menu Container',
  description: '프로필 사진, 이름, 메뉴',
};

const profileImage =
  'https://avatars2.githubusercontent.com/u/16266103?s=460&u=46ab2774d38212f0d0050592ce02dbcf36a7a97a&v=4';

export const profileMenuDefault = ({ src = profileImage }) => (
  <ProfileMenuContainer src={src} />
);
export const profileMenuName = ({ src = profileImage, name = '아무개' }) => (
  <ProfileMenuContainer name={name} src={src} />
);

profileMenuDefault.propTypes = {
  src: PropTypes.string,
};

profileMenuName.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
};
