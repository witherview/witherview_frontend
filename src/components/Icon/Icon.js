/* eslint-disable indent */
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import iconImage from '../../assets/images/icons.png';

const I = styled.i`
  margin: 2px;
  display: inline-block;
  background-image: url(${iconImage});
  background-size: 928px 708px;
  width: ${({ size }) => (size === 'xsm' ? '34px'
                        : size === 'sm' ? '38px'
                        : size === 'md' ? '60px'
                        : size === 'lg' ? '70px' : '900px')};  
  height: ${({ size }) => (size === 'xsm' ? '34px'
                         : size === 'sm' ? '38px'
                         : size === 'md' ? '60px'
                         : size === 'lg' ? '70px' : '700px')};  
background-position: ${({ type }) => (type === 'bubble_white' ? '-75.5px -66px'
                                    : type === 'bubble_black' ? '-158.5px -66px'
                                    : type === 'arrow_down' ? '-241.5px -66px'
                                    : type === 'arrow_up' ? '-323px -66px'
                                    : type === 'post' ? '-403.5px -66px'
                                    : type === 'cancel_blue' ? '-486.5px -66px'
                                    : type === 'cancel_black' ? '-569.5px -66px'
                                    : type === 'check' ? '-653.5px -66px'
                                    : type === 'search' ? '-733.5px -66px'
                                    : type === 'profile_white' ? '-75.5px -170px'
                                    : type === 'profile_black' ? '-158.5px -170px'
                                    : type === 'circle' ? '-240px -171px'
                                    : type === 'drawer' ? '-320.5px -169.5px'
                                    : type === 'check_off' ? '-402.5px -169.5px'
                                    : type === 'check_on' ? '-485px -169px'
                                    : type === 'sound_white' ? '-75.5px -276px'
                                    : type === 'sound_black' ? '-158.5px -276px'
                                    : type === 'all_off' ? '-227px -265px'
                                    : type === 'sun_off' ? '-310px -265px'
                                    : type === 'mon_off' ? '-391px -265px'
                                    : type === 'tue_off' ? '-474px -265px'
                                    : type === 'wed_off' ? '-557px -265px'
                                    : type === 'thu_off' ? '-638px -265px'
                                    : type === 'fri_off' ? '-720px -265px'
                                    : type === 'sat_off' ? '-803px -265px'
                                    : type === 'exit_white' ? '-75.5px -380px'
                                    : type === 'exit_black' ? '-158.5px -380px'
                                    : type === 'all_on' ? '-227px -370px'
                                    : type === 'sun_on' ? '-310px -370px'
                                    : type === 'mon_on' ? '-391px -370px'
                                    : type === 'tue_on' ? '-474px -370px'
                                    : type === 'wed_on' ? '-557px -370px'
                                    : type === 'thu_on' ? '-638px -370px'
                                    : type === 'fri_on' ? '-720px -370px'
                                    : type === 'sat_on' ? '-803px -370px'
                                    : type === 'time_white' ? '-76px -488px'
                                    : type === 'time_black' ? '-158px -488px'
                                    : type === 'previous' ? '-227px -475px'
                                    : type === 'next' ? '-309px -475px'
                                    : type === 'minus' ? '-391px -475px'
                                    : type === 'plus' ? '-473px -475px'
                                    : type === 'add_white' ? '-73px -594px'
                                    : type === 'add_black' ? '-158px -594px'
                                    : type === 'check_circle' ? '-228px -582px'
                                    : type === 'play' ? '-309px -580px'
                                    : type === 'cancel_circle' ? '-391px -580px'
                                    : type === 'check_border' ? '-474px -580px'
                                    : type === 'check_square' ? '-550px -576px' : '0 0')};
`;

export default function Icon({
  type, alt, style, src,
}) {
  const [size, setSize] = useState('xsm');
  useEffect(() => {
    if (type === 'drawer' || type === 'check_off' || type === 'check_on') {
      setSize('sm');
    }
    if (type === 'all_off'
       || type === 'sun_off'
       || type === 'mon_off'
       || type === 'tue_off'
       || type === 'wed_off'
       || type === 'thu_off'
       || type === 'fri_off'
       || type === 'sat_off'
       || type === 'all_on'
       || type === 'sun_on'
       || type === 'mon_on'
       || type === 'tue_on'
       || type === 'wed_on'
       || type === 'thu_on'
       || type === 'fri_on'
       || type === 'sat_on'
       || type === 'next'
       || type === 'minus'
       || type === 'plus'
       || type === 'previous'
       || type === 'check_circle'
       || type === 'play'
       || type === 'cancel_circle'
       || type === 'check_border') {
      setSize('md');
    }
    if (type === 'check_square') {
      setSize('lg');
    }
  }, [type]);

  return src ? (
    <img
      src={src}
      alt={alt}
      style={style}
    />
  ) : (
    <I
      type={type}
      size={size}
      title={alt}
    />
  );
}

Icon.propTypes = {
  type: PropTypes.oneOf([
    'bubble_white',
    'bubble_black',
    'arrow_down',
    'arrow_up',
    'post',
    'cancel_blue',
    'cancel_black',
    'check',
    'search',
    'profile_white',
    'profile_black',
    'circle',
    'drawer',
    'check_off',
    'check_on',
    'sound_white',
    'sound_black',
    'all_off',
    'sun_off',
    'mon_off',
    'tue_off',
    'wed_off',
    'thu_off',
    'fri_off',
    'sat_off',
    'exit_white',
    'exit_black',
    'all_on',
    'sun_on',
    'mon_on',
    'tue_on',
    'wed_on',
    'thu_on',
    'fri_on',
    'sat_on',
    'time_white',
    'time_black',
    'previous',
    'next',
    'minus',
    'plus',
    'add_white',
    'add_black',
    'check_circle',
    'play',
    'cancel_circle',
    'check_border',
    'check_square',
  ]).isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string,
  style: PropTypes.string,
};
Icon.defaultProp = {
  type: 'test',
  alt: '',
};
