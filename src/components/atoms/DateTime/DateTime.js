import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.label`
  font-size: 1.5vh;
  text-align: left;
  font-family: AppleSDGothicNeoM00;
  color: #d3d3d3;
`;
export default function DateTime({ dateTime }) {
  return <Wrapper>{moment(dateTime).format('M월 D일 A HH:mm')}</Wrapper>;
}

DateTime.propTypes = {
  dateTime: Date,
};

DateTime.defaultProps = {
  dateTime: new Date(),
};
