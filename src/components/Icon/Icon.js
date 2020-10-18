/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import iconImage from '../../assets/images/icons.png';

const I = styled.i`
  margin:2px;
  display: inline-block;
  background-image: url(${iconImage});
  background-size: 928px 708px;
  width: ${(props) => (props.size === 'xsm' ? '34px'
    : props.size === 'sm' ? '38px'
      : props.size === 'md' ? '60px'
        : props.size === 'lg' ? '70px' : '900px')};  
height: ${(props) => (props.size === 'xsm' ? '34px'
    : props.size === 'sm' ? '38px'
      : props.size === 'md' ? '60px'
        : props.size === 'lg' ? '70px' : '700px')};  
background-position: ${(props) => (props.type === 'bubble_white' ? '-75.5px -66px'
                                : props.type === 'bubble_black' ? '-158.5px -66px'
                                : props.type === 'arrow_down' ? '-241.5px -66px'
                                : props.type === 'arrow_up' ? '-323px -66px'
                                : props.type === 'post' ? '-403.5px -66px'
                                : props.type === 'cancel_blue' ? '-486.5px -66px'
                                : props.type === 'cancel_black' ? '-569.5px -66px'
                                : props.type === 'check' ? '-653.5px -66px'
                                : props.type === 'search' ? '-733.5px -66px'
                                : props.type === 'profile_white' ? '-75.5px -170px'
                                : props.type === 'profile_black' ? '-158.5px -170px'
                                : props.type === 'circle' ? '-240px -171px'
                                : props.type === 'drawer' ? '-320.5px -169.5px'
                                : props.type === 'check_off' ? '-402.5px -169.5px'
                                : props.type === 'check_on' ? '-485px -169px'
                                : props.type === 'sound_white' ? '-75.5px -276px'
                                : props.type === 'sound_black' ? '-158.5px -276px'
                                : props.type === 'all_off' ? '-227px -265px'
                                : props.type === 'sun_off' ? '-310px -265px'
                                : props.type === 'mon_off' ? '-391px -265px'
                                : props.type === 'tue_off' ? '-474px -265px'
                                : props.type === 'wed_off' ? '-557px -265px'
                                : props.type === 'thu_off' ? '-638px -265px'
                                : props.type === 'fri_off' ? '-720px -265px'
                                : props.type === 'sat_off' ? '-803px -265px'
                                : props.type === 'exit_white' ? '-75.5px -380px'
                                : props.type === 'exit_black' ? '-158.5px -380px'
                                : props.type === 'all_on' ? '-227px -370px'
                                : props.type === 'sun_on' ? '-310px -370px'
                                : props.type === 'mon_on' ? '-391px -370px'
                                : props.type === 'tue_on' ? '-474px -370px'
                                : props.type === 'wed_on' ? '-557px -370px'
                                : props.type === 'thu_on' ? '-638px -370px'
                                : props.type === 'fri_on' ? '-720px -370px'
                                : props.type === 'sat_on' ? '-803px -370px'
                                : props.type === 'time_white' ? '-76px -488px'
                                : props.type === 'time_black' ? '-158px -488px'
                                : props.type === 'previous' ? '-227px -475px'
                                : props.type === 'next' ? '-309px -475px'
                                : props.type === 'minus' ? '-391px -475px'
                                : props.type === 'plus' ? '-473px -475px'
                                : props.type === 'add_white' ? '-73px -594px'
                                : props.type === 'add_black' ? '-158px -594px'
                                : props.type === 'check_circle' ? '-228px -582px'
                                : props.type === 'play' ? '-309px -580px'
                                : props.type === 'cancel_circle' ? '-391px -580px'
                                : props.type === 'check_border' ? '-474px -580px'
                                : props.type === 'check_square' ? '-550px -576px' : '0 0')};
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
