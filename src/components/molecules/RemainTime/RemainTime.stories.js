import React from 'react';
import PropTypes from 'prop-types';
import RemainTime from './index';

export default {
  title: 'Molecules/Remain Time',
  description: 'time',
  component: RemainTime,
  argTypes: {
    time: 59,
  },
};

// https://storybook.js.org/docs/react/essentials/controls
export const remainTime = ({ time = 59 }) => <RemainTime time={time} />;

export const TimeEnough = () => <remainTime time={200} />;
export const TimeNotEnough = () => <remainTime time={40} />;

remainTime.propTypes = {
  time: PropTypes.number,
};
