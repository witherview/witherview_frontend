/* eslint-disable indent */
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const unitGenerator = (num, unit = 'vh') => {
  if (Array.isArray(num)) {
    return num.reduce((res, val) => `${res} ${val}${unit} `, '');
  }
  return `${num}${unit}`;
};

const basicSize = {
  xsm: '1.4vh',
  sm: '2.1vh',
  md: '2.8vh',
  xmd: '3.2vh',
  flat: '2.8vh',
  thin: '1.5vh',
  lg: '3.8vh',
  xlg: '4.2vh',
  mlg: '5.1vh',
  mxlg: '7.5vh',
  slg: '6.3vh',
  xxlg: '9.6vh',
};

const borderRadiusSize = { ...basicSize };
const widthSize = {
  ...basicSize,
  dif: '3.6vh',
};
const heightSize = {
  ...basicSize,
  sm: unitGenerator(2),
  md: unitGenerator(3.2),
  flat: unitGenerator(2),
  thin: unitGenerator(3.2),
  dif: unitGenerator(1.5),
};

const backgroundPositionType = {
  bubble_white: unitGenerator([-4.5, -3.6]),
  bubble_black: unitGenerator([-15.8, -3.6]),
  arrow_down_blue: unitGenerator([-28.4, -4.5]),
  arrow_down_grey: unitGenerator([-25.5, -4.5]),
  arrow_up_blue: unitGenerator([-51.5, -4.55]),
  cancel_white: unitGenerator([-63.05, -4.25]),
  add_orange: unitGenerator([-74.7, -4.25]),
  add_blue: unitGenerator([-86, -4.25]),
  folder_white: unitGenerator([-108.6, -3.5]),
  folder_blue: unitGenerator([-120, -3.5]),
  post: unitGenerator([-4.3, -14]),
  cancel_blue: unitGenerator([-16, -14]),
  cancel_black: unitGenerator([-27.6, -14]),
  check: unitGenerator([-39.55, -14.55]),
  search: unitGenerator([-50.8, -14]),
  clock_white: unitGenerator([-62.4, -13.95]),
  calendar_black: unitGenerator([-74, -13.95]),
  clock_gray: unitGenerator([-85.6, -13.95]),
  clock_black: unitGenerator([-97.2, -13.95]),
  profile_blue: unitGenerator([-15.8, -24.6]),
  profile_white: unitGenerator([-4.3, -24.6]),
  profile_black: unitGenerator([-108.7, -14]),
  drop_up: unitGenerator([-27.6, -25.1]),
  drop_down: unitGenerator([-39.2, -25.1]),
  drawer: unitGenerator([-50.3, -24.3]),
  check_off: unitGenerator([-61.9, -24.3]),
  check_on: unitGenerator([-73.5, -24.3]),
  remove: unitGenerator([-85.1, -24.3]),
  check_circle_white: unitGenerator([-96.4, -24.1]),
  dots: unitGenerator([-108, -25.3]),
  check_circle_blue: unitGenerator([-3.7, -34.2]),
  next_white: unitGenerator([-15.55, -34.8]),
  previous: unitGenerator([-26, -34.8]),
  next_blue: unitGenerator([-36.5, -34.8]),
  filter: unitGenerator([-41.5, -34.6]),
  next_rec: unitGenerator([-56.2, -34.5]),
  previous_rec: unitGenerator([-66.7, -34.6]),
  add_white: unitGenerator([-77.65, -34.9]),
  add_black: unitGenerator([-88.2, -34.9]),
  remove_rec: unitGenerator([-98.15, -34.6]),
  add_rec: unitGenerator([-108.65, -34.65]),
  sound_white: unitGenerator([-4.2, -46.9]),
  sound_black: unitGenerator([-16, -46.9]),
  play_purple: unitGenerator([-26.55, -46.05]),
  cancel_circle: unitGenerator([-38.2, -46.05]),
  pause: unitGenerator([-49.85, -46.05]),
  play_blue: unitGenerator([-61.5, -46.15]),
  cam: unitGenerator([-73.15, -46.05]),
  audio: unitGenerator([-84.8, -46.05]),
  capture: unitGenerator([-96.45, -46.05]),
  exit_white: unitGenerator([-4.4, -59.4]),
  exit_blue: unitGenerator([-21.5, -59.4]),
  check_large: unitGenerator([-36.95, -58.1]),
  check_rec: unitGenerator([-54.1, -58.1]),
  thumb_up_white: unitGenerator([-69.5, -56.4]),
  thumb_down_white: unitGenerator([-87.1, -56.4]),
  alert_large: unitGenerator([-103.8, -57.7]),
  sound_big: unitGenerator([-7.1, -71.2]),
  bubble_big: unitGenerator([-25, -71.2]),
  memo_big: unitGenerator([-42.9, -71.2]),
  star_big: unitGenerator([-60.8, -71.2]),
  thumb_up_big: unitGenerator([-78.7, -71.2]),
  thumb_down_big: unitGenerator([-96.6, -71.2]),
  profile_big: unitGenerator([-112.5, -71.2]),
};

const I = styled.i`
  margin: 0.2vh;
  display: inline-block;
  background-image: ${({ theme: { iconImage } }) => `url(${iconImage})`};
  background-size: 136.4vh 87.6vh;
  border-radius: ${({ circle, size }) => (circle ? borderRadiusSize[size] : 0)};
  width: ${({ size }) => widthSize[size]};
  height: ${({ size }) => heightSize[size]};
  background-position: ${({ type }) => backgroundPositionType[type]};
`;

export default function Icon({
  type = 'test',
  alt = '',
  isCircle = false,
  func = () => {},
}) {
  const [size, setSize] = useState('md');
  useEffect(() => {
    switch (type) {
      case 'arrow_down_blue':
      case 'arrow_down_grey':
      case 'arrow_up_blue':
        setSize('xsm');
        break;
      case 'cancel_white':
      case 'add_orange':
      case 'add_blue':
      case 'check':
        setSize('sm');
        break;
      case 'drop_up':
      case 'drop_down':
        setSize('flat');
        break;
      case 'next_white':
      case 'previous':
      case 'next_blue':
        setSize('thin');
        break;
      case 'add_white':
      case 'add_black':
      case 'folder_white':
      case 'folder_blue':
        setSize('xmd');
        break;
      case 'drawer':
      case 'check_off':
      case 'check_on':
      case 'remove':
      case 'filter':
        setSize('lg');
        break;
      case 'check_circle_white':
      case 'check_circle_blue':
      case 'next_rec':
      case 'previous_rec':
      case 'remove_rec':
      case 'add_rec':
        setSize('xlg');
        break;
      case 'play_purple':
      case 'cancel_circle':
      case 'pause':
      case 'play_blue':
      case 'cam':
      case 'audio':
      case 'capture':
        setSize('mlg');
        break;
      case 'check_large':
      case 'check_rec':
      case 'alert_large':
        setSize('slg');
        break;
      case 'sound_big':
      case 'bubble_big':
      case 'memo_big':
      case 'star_big':
      case 'thumb_up_big':
      case 'thumb_down_big':
      case 'profile_big':
      case 'thumb_up_white':
      case 'thumb_down_white':
        setSize('xxlg');
        break;
      case 'check_square':
        setSize('lg');
        break;
      case 'dots':
        setSize('dif');
        break;
      default:
        break;
    }
  }, [type]);

  return (
    <I type={type} size={size} title={alt} onClick={func} circle={isCircle} />
  );
}

Icon.propTypes = {
  type: PropTypes.oneOf([
    'bubble_white',
    'bubble_black',
    'arrow_down_blue',
    'arrow_down_grey',
    'arrow_up_blue',
    'cancel_white',
    'add_orange',
    'add_blue',
    'folder_white',
    'folder_blue',
    'post',
    'cancel_blue',
    'cancel_black',
    'check',
    'search',
    'clock_white',
    'calendar_black',
    'clock_gray',
    'clock_black',
    'profile_blue',
    'profile_white',
    'profile_black',
    'drop_up',
    'drop_down',
    'drawer',
    'check_off',
    'check_on',
    'remove',
    'check_circle_white',
    'dots',
    'check_circle_blue',
    'next_white',
    'previous',
    'next_blue',
    'filter',
    'next_rec',
    'previous_rec',
    'add_white',
    'add_black',
    'remove_rec',
    'add_rec',
    'sound_white',
    'sound_black',
    'play_purple',
    'cancel_circle',
    'pause',
    'play_blue',
    'cam',
    'audio',
    'capture',
    'exit_white',
    'exit_blue',
    'check_large',
    'check_rec',
    'thumb_up_white',
    'thumb_down_white',
    'alert_large',
    'sound_big',
    'bubble_big',
    'memo_big',
    'star_big',
    'thumb_up_big',
    'thumb_down_big',
    'profile_big',
  ]).isRequired,
  alt: PropTypes.string.isRequired,
  func: PropTypes.func,
  isCircle: PropTypes.bool,
};
