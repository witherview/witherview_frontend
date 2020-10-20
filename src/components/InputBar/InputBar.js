import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const input = styled.input`
    width: 533px;
    border: none;
    border-bottom: 2px solid #9e9e9e;
    font-size: 20px;
    line-height: 1.3;
    text-align: left;
    color: #9e9e9e;
`

export default function InputBar({
    text
}) {
    return <input type="text" placeholder="기업명을 입력해주세요" />
}

Icon.defaultProp = {
    type: 'test',
    alt: '',
  };
  