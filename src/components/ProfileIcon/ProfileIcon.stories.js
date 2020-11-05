/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ProfileIcon from './ProfileIcon';

export default {
  title: 'Profile Icon',
  description: 'Set Normal and small Profile Icon',
};

const profileImage = 'https://avatars2.githubusercontent.com/u/16266103?s=460&u=46ab2774d38212f0d0050592ce02dbcf36a7a97a&v=4';

export const NormalProfileIcon = ({ src = profileImage }) => <ProfileIcon src={src} />;
export const SmallProfileIcon = ({ src = profileImage }) => <ProfileIcon size="small" src={src} />;
