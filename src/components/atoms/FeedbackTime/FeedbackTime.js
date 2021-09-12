import React from 'react';
import styled from 'styled-components';
import { commonStyles } from '@style';
import PropTypes from 'prop-types';
import moment from 'moment';

const Wrapper = styled.label`
  font-family: TitilliumWebBold;
  font-size: 2vh;
  color: ${commonStyles.colors.cornflower};
  align-items: center;
  display: flex;
  height: 100%;
`;
export default function FeedbackTime({ time }) {
  return <Wrapper>{moment(time, 'HH:mm:ss').format('m:ss')}</Wrapper>;
}

FeedbackTime.propTypes = {
  time: PropTypes.string,
};

FeedbackTime.defaultProps = {
  time: '0:2:34',
};
