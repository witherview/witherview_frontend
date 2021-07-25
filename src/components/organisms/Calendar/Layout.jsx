import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';
import React from 'react';
import dayjs from 'dayjs';
import CalendarItem from './CalendarItem';

export default function CalendarLayout({
  thisMonth,
  calendarItems,
  goToPreviousMonth,
  goToNextMonth,
}) {
  const renderCalendarItems = () => {
    const list = calendarItems?.map((item) => {
      const newItems = dayjs(item);
      return (
        <CalendarItem
          key={newItems.toString()}
          date={newItems.format('DD')}
          dayOfTheWeek={newItems.format('ddd')}
          isSelected={thisMonth === newItems}
          havingSchedule
        />
      );
    });

    return <ItemsWrapper>{list}</ItemsWrapper>;
  };

  return (
    <Container>
      <TopWrapper>
        <Next>
          <Button onClick={goToPreviousMonth}>{'<'}</Button>
          <NextMonth>{dayjs().subtract(1, 'months').format('MMMM')}</NextMonth>
        </Next>
        <ThisMonth>{thisMonth.format('MMMM, YYYY')}</ThisMonth>
        <Next>
          <NextMonth>{dayjs().add(1, 'months').format('MMMM')}</NextMonth>
          <Button onClick={goToNextMonth}>{'>'}</Button>
        </Next>
      </TopWrapper>
      {renderCalendarItems()}
    </Container>
  );
}

CalendarLayout.propTypes = {
  thisMonth: PropTypes.object.isRequired,
  calendarItems: PropTypes.array.isRequired,
  goToPreviousMonth: PropTypes.func.isRequired,
  goToNextMonth: PropTypes.func.isRequired,
};

CalendarLayout.defaultProp = {
  thisMonth: {},
  calendarItems: [],
  goToPreviousMonth: () => console.log(123),
  goToNextMonth: () => console.log(123),
};

const row = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Container = styled.div``;

const TopWrapper = styled.div`
  ${row}
  justify-content: space-between;
  box-shadow: 0 2px 10px 0 rgba(4, 4, 161, 0.1);
  border: solid 2px var(--white);
  padding: 25px 10px;
  margin-bottom: 30px;

  .row {
    ${row}
  }
`;

const ThisMonth = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`;

const ItemsWrapper = styled.div`
  ${row}
`;

const Next = styled.div`
  ${row};
  justify-content: center;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 10px;
  background-image: linear-gradient(to bottom, #2323de -16%, #5f5fd9 122%);
  border: none;

  &:focus {
    outline: none;
  }
`;

const NextMonth = styled.div`
  font-size: 20px;
  color: #d3d3d3;
  margin: 0 40px;
`;
