/* eslint-disable indent */
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import iconImage from '@assets/images/icons.png';

const I = styled.i`
  margin: 0.2vh;
  display: inline-block;
  background-image: url(${iconImage});
  background-size: 123.7vh 87.6vh;
  border-radius: ${({ circle, size }) =>
    circle
      ? size === 'xsm'
        ? '1.4vh'
        : size === 'sm'
        ? '2.1vh'
        : size === 'md'
        ? '2.8vh'
        : size === 'xmd'
        ? '3.2vh'
        : size === 'flat'
        ? '2.8vh'
        : size === 'thin'
        ? '1.5vh'
        : size === 'lg'
        ? '3.8vh'
        : size === 'xlg'
        ? '4.2vh'
        : size === 'mlg'
        ? '5.1vh'
        : size === 'slg'
        ? '6.3vh'
        : size === 'mxlg'
        ? '7.5vh'
        : size === 'slg'
        ? '6.3vh'
        : size === 'xxlg'
        ? '9.6vh'
        : '117.3vh'
      : 0};
  width: ${({ size }) =>
    size === 'xsm'
      ? '1.4vh'
      : size === 'sm'
      ? '2.1vh'
      : size === 'md'
      ? '2.8vh'
      : size === 'xmd'
      ? '3.2vh'
      : size === 'flat'
      ? '2.8vh'
      : size === 'thin'
      ? '1.5vh'
      : size === 'dif'
      ? '3.6vh'
      : size === 'lg'
      ? '3.8vh'
      : size === 'xlg'
      ? '4.2vh'
      : size === 'mlg'
      ? '5.1vh'
      : size === 'slg'
      ? '6.3vh'
      : size === 'mxlg'
      ? '7.5vh'
      : size === 'slg'
      ? '6.3vh'
      : size === 'xxlg'
      ? '9.6vh'
      : '117.3vh'};
  height: ${({ size }) =>
    size === 'xsm'
      ? '1.4vh'
      : size === 'sm'
      ? '2vh'
      : size === 'md'
      ? '3.2vh'
      : size === 'xmd'
      ? '3.2vh'
      : size === 'flat'
      ? '2vh'
      : size === 'thin'
      ? '3.2vh'
      : size === 'dif'
      ? '1.5vh'
      : size === 'lg'
      ? '3.8vh'
      : size === 'xlg'
      ? '4.2vh'
      : size === 'mlg'
      ? '5.1vh'
      : size === 'slg'
      ? '6.3vh'
      : size === 'mxlg'
      ? '7.5vh'
      : size === 'xxlg'
      ? '9.6vh'
      : '87.6vh'};
  background-position: ${({ type }) =>
    type === 'bubble_white'
      ? '-4.4vh -3.6vh'
      : type === 'bubble_black'
      ? '-16vh -3.6vh'
      : type === 'arrow_down_blue'
      ? '-28.4vh -4.5vh'
      : type === 'arrow_down_grey'
      ? '-40.05vh -4.5vh'
      : type === 'arrow_up_blue'
      ? '-51.7vh -4.55vh'
      : type === 'cancel_white'
      ? '-63.05vh -4.25vh'
      : type === 'add_orange'
      ? '-74.7vh -4.25vh'
      : type === 'add_blue'
      ? '-86.3.5vh -4.25vh'
      : type === 'folder_white'
      ? '-97vh -3.5vh'
      : type === 'folder_blue'
      ? '-108.8vh -3.5vh'
      : type === 'post'
      ? '-4.3vh -14vh'
      : type === 'cancel_blue'
      ? '-16vh -14vh'
      : type === 'cancel_black'
      ? '-27.6vh -14vh'
      : type === 'check'
      ? '-39.55vh -14.55vh'
      : type === 'search'
      ? '-50.8vh -14vh'
      : type === 'clock_white'
      ? '-62.4vh -13.95vh'
      : type === 'calendar_black'
      ? '-74vh -13.95vh'
      : type === 'clock_gray'
      ? '-85.6vh -13.95vh'
      : type === 'clock_black'
      ? '-97.2vh -13.95vh'
      : type === 'profile_blue'
      ? '-108.8vh -13.95vh'
      : type === 'profile_white'
      ? '-4.35vh -24.6vh'
      : type === 'profile_black'
      ? '-16vh -24.6vh'
      : type === 'drop_up'
      ? '-27.6vh -25.1vh'
      : type === 'drop_down'
      ? '-39.2vh -25.1vh'
      : type === 'drawer'
      ? '-50.3vh -24.3vh'
      : type === 'check_off'
      ? '-61.9vh -24.3vh'
      : type === 'check_on'
      ? '-73.5vh -24.3vh'
      : type === 'remove'
      ? '-85.1vh -24.3vh'
      : type === 'check_circle_white'
      ? '-96.55vh -24.1vh'
      : type === 'dots'
      ? '-108vh -25.3vh'
      : type === 'check_circle_blue'
      ? '-3.7vh -34.2vh'
      : type === 'next_white'
      ? '-15.55vh -34.8vh'
      : type === 'previous'
      ? '-26vh -34.8vh'
      : type === 'next_blue'
      ? '-36.5vh -34.8vh'
      : type === 'filter'
      ? '-45.9vh -34.6vh'
      : type === 'next_rec'
      ? '-56.2vh -34.5vh'
      : type === 'previous_rec'
      ? '-66.7vh -34.6vh'
      : type === 'add_white'
      ? '-77.65vh -34.9vh'
      : type === 'add_black'
      ? '-88.15vh -34.9vh'
      : type === 'remove_rec'
      ? '-98.15vh -34.6vh'
      : type === 'add_rec'
      ? '-108.65vh -34.65vh'
      : type === 'sound_white'
      ? '-4.4vh -46.9vh'
      : type === 'sound_black'
      ? '-16.05vh -46.9vh'
      : type === 'play_pupple'
      ? '-26.55vh -46.05vh'
      : type === 'cancel_circle'
      ? '-38.2vh -46.05vh'
      : type === 'pause'
      ? '-49.85vh -46.05vh'
      : type === 'play_blue'
      ? '-61.5vh -46.15vh'
      : type === 'cam'
      ? '-73.15vh -46.05vh'
      : type === 'audio'
      ? '-84.8vh -46.05vh'
      : type === 'capture'
      ? '-96.45vh -46.05vh'
      : type === 'exit_white'
      ? '-4.4vh -59.4vh'
      : type === 'exit_blue'
      ? '-21.5vh -59.4vh'
      : type === 'check_large'
      ? '-36.95vh -58.1vh'
      : type === 'check_rec'
      ? '-54.1vh -58.1vh'
      : type === 'thumb_up_white'
      ? '-69.5vh -56.4vh'
      : type === 'thumb_down_white'
      ? '-87.1vh -56.4vh'
      : type === 'sound_big'
      ? '-7.1vh -71.2vh'
      : type === 'bubble_big'
      ? '-25vh -71.2vh'
      : type === 'memo_big'
      ? '-42.9vh -71.2vh'
      : type === 'star_big'
      ? '-60.8vh -71.2vh'
      : type === 'thumb_up_big'
      ? '-78.7vh -71.2vh'
      : type === 'thumb_down_big'
      ? '-96.6vh -71.2vh'
      : type === 'profile_big'
      ? '-112.5vh -71.2vh'
      : '0 0'};
`;

export default function Icon({ type, alt, isCircle, func }) {
  const [size, setSize] = useState('md');
  useEffect(() => {
    if (
      type === 'arrow_down_blue' ||
      type === 'arrow_down_grey' ||
      type === 'arrow_up_blue' ||
      type === 'drawer' ||
      type === 'check_off' ||
      type === 'check_on'
    ) {
      setSize('xsm');
    }
    if (
      type === 'cancel_white' ||
      type === 'add_orange' ||
      type === 'add_blue' ||
      type === 'check' ||
      type === 'check_off' ||
      type === 'check_on'
    ) {
      setSize('sm');
    }
    if (type === 'drop_up' || type === 'drop_down') {
      setSize('flat');
    }
    if (type === 'next_white' || type === 'previous' || type === 'next_blue') {
      setSize('thin');
    }
    if (
      type === 'add_white' ||
      type === 'add_black' ||
      type === 'folder_white' ||
      type === 'folder_blue'
    ) {
      setSize('xmd');
    }
    if (
      type === 'drawer' ||
      type === 'check_off' ||
      type === 'check_on' ||
      type === 'remove' ||
      type === 'check_circle_white' ||
      type === 'filter'
    ) {
      setSize('lg');
    }
    if (
      type === 'check_circle_white' ||
      type === 'check_circle_blue' ||
      type === 'next_rec' ||
      type === 'previous_rec' ||
      type === 'remove_rec' ||
      type === 'add_rec'
    ) {
      setSize('xlg');
    }
    if (
      type === 'play_pupple' ||
      type === 'cancel_circle' ||
      type === 'pause' ||
      type === 'play_blue' ||
      type === 'cam' ||
      type === 'audio' ||
      type === 'capture'
    ) {
      setSize('mlg');
    }
    if (type === 'check_large' || type === 'check_rec') {
      setSize('slg');
    }
    if (
      type === 'sound_big' ||
      type === 'bubble_big' ||
      type === 'memo_big' ||
      type === 'star_big' ||
      type === 'thumb_up_big' ||
      type === 'thumb_down_big' ||
      type === 'profile_big' ||
      type === 'thumb_up_white' ||
      type === 'thumb_down_white'
    ) {
      setSize('xxlg');
    }
    if (type === 'check_square') {
      setSize('lg');
    }
    if (type === 'dots') {
      setSize('dif');
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
    'play_pupple',
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

Icon.defaultProp = {
  type: 'test',
  alt: '',
  func: () => {},
  isCircle: false,
};
