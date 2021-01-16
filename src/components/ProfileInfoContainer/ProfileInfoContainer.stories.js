/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import ProfileInfoContainer from './index';

export default {
  title: 'Profile Info Container',
  description: '프로필 사진, 이름, 참여율',
};

const profileImage = 'https://avatars2.githubusercontent.com/u/16266103?s=460&u=46ab2774d38212f0d0050592ce02dbcf36a7a97a&v=4';

export const ProfileInfoDefault = ({ src = profileImage }) => (
  <ProfileInfoContainer src={src} />
);

export const ProfileInfoName = ({ src = profileImage, name = '아무개' }) => (
  <ProfileInfoContainer name={name} src={src} />
);
export const ProfileInfoParticipateRate = ({
  src = profileImage,
  participateRate = 70,
}) => <ProfileInfoContainer participateRate={participateRate} src={src} />;

ProfileInfoDefault.propTypes = {
  src: PropTypes.string,
};

ProfileInfoName.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
};

ProfileInfoParticipateRate.propTypes = {
  src: PropTypes.string,
  participateRate: PropTypes.number,
};
