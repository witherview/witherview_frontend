/* eslint-disable indent */
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import iconImage from '@assets/images/icons.png';

const I = styled.i`
  margin: 2px;
  display: inline-block;
  background-image: url(${iconImage});
  background-size: 1237px 876px;
  border-radius: ${({ circle, size }) => (circle ? (size === 'xsm' ? '14px'
                        : size === 'sm' ? '21px'
                        : size === 'md' ? '28px'
                        : size === 'xmd' ? '32px'
                        : size === 'flat' ? '28px'
                        : size === 'thin' ? '15px'
                        : size === 'lg' ? '38px'
                        : size === 'xlg' ? '42px'
                        : size === 'mlg' ? '51px'
                        : size === 'slg' ? '63px'
                        : size === 'mxlg' ? '75px'
                        : size === 'slg' ? '63px'
                        : size === 'xxlg' ? '96px' : '1173px') : 0)};
  width: ${({ size }) => (size === 'xsm' ? '14px'
                        : size === 'sm' ? '21px'
                        : size === 'md' ? '28px'
                        : size === 'xmd' ? '32px'
                        : size === 'flat' ? '28px'
                        : size === 'thin' ? '15px'
                        : size === 'dif' ? '36px'
                        : size === 'lg' ? '38px'
                        : size === 'xlg' ? '42px'
                        : size === 'mlg' ? '51px'
                        : size === 'slg' ? '63px'
                        : size === 'mxlg' ? '75px'
                        : size === 'slg' ? '63px'
                        : size === 'xxlg' ? '96px' : '1173px')};
  height: ${({ size }) => (size === 'xsm' ? '14px'
                         : size === 'sm' ? '20px'
                         : size === 'md' ? '32px'
                         : size === 'xmd' ? '32px'
                         : size === 'flat' ? '20px'
                         : size === 'thin' ? '32px'
                         : size === 'dif' ? '15px'
                         : size === 'lg' ? '38px'
                         : size === 'xlg' ? '42px'
                         : size === 'mlg' ? '51px'
                         : size === 'slg' ? '63px'
                         : size === 'mxlg' ? '75px'
                         : size === 'xxlg' ? '96px' : '876px')};
background-position: ${({ type }) => (type === 'bubble_white' ? '-44px -36px'
                                    : type === 'bubble_black' ? '-160px -36px'
                                    : type === 'arrow_down_blue' ? '-284px -45px'
                                    : type === 'arrow_down_grey' ? '-400.5px -45px'
                                    : type === 'arrow_up_blue' ? '-517px -45.5px'
                                    : type === 'cancel_white' ? '-630.5px -42.5px'
                                    : type === 'add_orange' ? '-747px -42.5px'
                                    : type === 'add_blue' ? '-863.5px -42.5px'
                                    : type === 'folder_white' ? '-970px -35px'
                                    : type === 'folder_blue' ? '-1088px -35px'
                                    : type === 'post' ? '-43px -140px'
                                    : type === 'cancel_blue' ? '-160px -140px'
                                    : type === 'cancel_black' ? '-276px -140px'
                                    : type === 'check' ? '-395.5px -145.5px'
                                    : type === 'search' ? '-508px -140px'
                                    : type === 'clock_white' ? '-624px -139.5px'
                                    : type === 'calendar_black' ? '-740px -139.5px'
                                    : type === 'clock_gray' ? '-856px -139.5px'
                                    : type === 'clock_black' ? '-972px -139.5px'
                                    : type === 'profile_blue' ? '-1088px -139.5px'
                                    : type === 'profile_white' ? '-43.5px -246px'
                                    : type === 'profile_black' ? '-160px -246px'
                                    : type === 'drop_up' ? '-276px -251px'
                                    : type === 'drop_down' ? '-392px -251px'
                                    : type === 'drawer' ? '-503px -243px'
                                    : type === 'check_off' ? '-619px -243px'
                                    : type === 'check_on' ? '-735px -243px'
                                    : type === 'remove' ? '-851px -243px'
                                    : type === 'check_circle_white' ? '-965.5px -241px'
                                    : type === 'dots' ? '-1080px -253px'
                                    : type === 'check_circle_blue' ? '-37px -342px'
                                    : type === 'next_white' ? '-155.5px -348px'
                                    : type === 'previous' ? '-260px -348px'
                                    : type === 'next_blue' ? '-365px -348px'
                                    : type === 'filter' ? '-459px -346px'
                                    : type === 'next_rec' ? '-562px -345px'
                                    : type === 'previous_rec' ? '-667px -346px'
                                    : type === 'add_white' ? '-776.5px -349px'
                                    : type === 'add_black' ? '-881.5px -349px'
                                    : type === 'remove_rec' ? '-981.5px -346px'
                                    : type === 'add_rec' ? '-1086.5px -346.5px'
                                    : type === 'sound_white' ? '-44px -469px'
                                    : type === 'sound_black' ? '-160.5px -469px'
                                    : type === 'play_pupple' ? '-265.5px -460.5px'
                                    : type === 'cancel_circle' ? '-382px -460.5px'
                                    : type === 'pause' ? '-498.5px -460.5px'
                                    : type === 'play_blue' ? '-615px -461.5px'
                                    : type === 'cam' ? '-731.5px -460.5px'
                                    : type === 'audio' ? '-848px -460.5px'
                                    : type === 'capture' ? '-964.5px -460.5px'
                                    : type === 'exit_white' ? '-44px -594px'
                                    : type === 'exit_blue' ? '-215px -594px'
                                    : type === 'check_large' ? '-369.5px -581px'
                                    : type === 'check_rec' ? '-541px -581px'
                                    : type === 'thumb_up_white' ? '-695px -564px'
                                    : type === 'thumb_down_white' ? '-871px -564px'
                                    : type === 'sound_big' ? '-71px -712px'
                                    : type === 'bubble_big' ? '-250px -712px'
                                    : type === 'memo_big' ? '-429px -712px'
                                    : type === 'star_big' ? '-608px -712px'
                                    : type === 'thumb_up_big' ? '-787px -712px'
                                    : type === 'thumb_down_big' ? '-966px -712px'
                                    : type === 'profile_big' ? '-1125px -712px' : '0 0')};
`;

export default function Icon({
  type, alt, isCircle, func,
}) {
  const [size, setSize] = useState('md');
  useEffect(() => {
    if (type === 'arrow_down_blue' || type === 'arrow_down_grey' || type === 'arrow_up_blue' || type === 'drawer' || type === 'check_off' || type === 'check_on') {
      setSize('xsm');
    }
    if (type === 'cancel_white' || type === 'add_orange' || type === 'add_blue' || type === 'check' || type === 'check_off' || type === 'check_on') {
      setSize('sm');
    }
    if (type === 'drop_up' || type === 'drop_down') {
      setSize('flat');
    }
    if (type === 'next_white' || type === 'previous' || type === 'next_blue') {
      setSize('thin');
    }
    if (type === 'add_white' || type === 'add_black' || type === 'folder_white' || type === 'folder_blue') {
      setSize('xmd');
    }
    if (type === 'drawer' || type === 'check_off' || type === 'check_on' || type === 'remove' || type === 'check_circle_white' || type === 'filter') {
      setSize('lg');
    }
    if (type === 'check_circle_white' || type === 'check_circle_blue' || type === 'next_rec' || type === 'previous_rec' || type === 'remove_rec' || type === 'add_rec') {
      setSize('xlg');
    }
    if (type === 'play_pupple' || type === 'cancel_circle' || type === 'pause' || type === 'play_blue' || type === 'cam' || type === 'audio' || type === 'capture') {
      setSize('mlg');
    }
    if (type === 'check_large' || type === 'check_rec') {
      setSize('slg');
    }
    if (type === 'sound_big' || type === 'bubble_big' || type === 'memo_big' || type === 'star_big' || type === 'thumb_up_big' || type === 'thumb_down_big' || type === 'profile_big' || type === 'thumb_up_white' || type === 'thumb_down_white') {
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
    <I
      type={type}
      size={size}
      title={alt}
      onClick={func}
      circle={isCircle}
    />
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
