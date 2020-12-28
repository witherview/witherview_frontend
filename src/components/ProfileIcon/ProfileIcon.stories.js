/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import profileExample from '@assets/images/profile_example.png';
import ProfileIcon from './ProfileIcon';

export default {
  title: 'Profile Icon',
  description: 'Set Normal and small Profile Icon',
};

export const NormalProfileIcon = ({ src = profileExample }) => (
  <ProfileIcon src={src} />
);
export const SmallProfileIcon = ({ src = profileExample }) => (
  <ProfileIcon isSmall src={src} />
);
