/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import ProfileIcon from './ProfileIcon';

export default {
  title: 'Atoms/Profile Icon',
  description: 'Set Normal and small Profile Icon',
};

export const NormalProfileIcon = ({ src }) => <ProfileIcon src={src} />;
export const SmallProfileIcon = ({ src }) => <ProfileIcon isSmall src={src} />;

NormalProfileIcon.propTypes = {
  src: PropTypes.string,
};

SmallProfileIcon.propTypes = {
  src: PropTypes.string,
};
