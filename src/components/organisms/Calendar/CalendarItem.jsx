import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export default function CalendarItem({ date, dayOfTheWeek }) {
  return (
    <Container>
      <Date>{date < 10 ? date[1] : date}</Date>
      <DayOfTheWeek>{dayOfTheWeek}</DayOfTheWeek>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 9px; */
  width: 60px;
  height: 64px;
  margin: 15px;
`;

const Date = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 14px;
`;

const DayOfTheWeek = styled.div`
  font-size: 13px;
  color: #3d3d3d;
`;

CalendarItem.propTypes = {
  date: PropTypes.string.isRequired,
  dayOfTheWeek: PropTypes.string.isRequired,
};

CalendarItem.defaultProp = {
  key: 'key_1234',
  date: '',
  dayOfTheWeek: '',
};
