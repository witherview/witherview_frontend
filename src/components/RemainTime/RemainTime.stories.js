import React from 'react';
import PropTypes from 'prop-types';
import RemainTime from './index';

export default {
  title: 'RemainTime',
  description: 'time',
  component: RemainTime,
  argTypes: {
    time: 59,
  },
};

// https://storybook.js.org/docs/react/essentials/controls
export const Controls = ({ time = 59 }) => <RemainTime time={time} />;

export const TimeEnough = () => <RemainTime time={200} />;
export const TimeNotEnough = () => <RemainTime time={40} />;

Controls.propTypes = {
  time: PropTypes.number,
};
