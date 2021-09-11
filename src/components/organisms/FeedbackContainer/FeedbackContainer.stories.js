/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import FeedbackContainer from './index';

export default {
  title: 'Organisms/Feedback Container',
  description: '프로필 사진, 이름, 참여율',
};

const profileImage =
  'https://avatars2.githubusercontent.com/u/16266103?s=460&u=46ab2774d38212f0d0050592ce02dbcf36a7a97a&v=4';

export const feedbackContainer = ({ src = profileImage, name = '아무개' }) => (
  <FeedbackContainer src={src} name={name} />
);

feedbackContainer.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
};
