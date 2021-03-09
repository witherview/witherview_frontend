import React, { useEffect, useState } from 'react';

import moment from 'moment';
import CalendarLayout from './Layout';

function Calendar() {
  // const [loading, setLoading] = useState(false);
  const [thisMonth, setThisMonth] = useState(moment());
  const [calendarItems, setCalendarItems] = useState([]);

  async function getCalendarItems(current) {
    try {
      // setLoading(true);

      const start = current.startOf('months');
      const daysInThisMonth = moment(current).daysInMonth();

      const newCalendarItems = [start];

      let i = 1;
      while (i < daysInThisMonth) {
        const tmpDate = moment(start.add(1, 'days'));
        newCalendarItems.push(tmpDate);

        i += 1;
      }

      setCalendarItems(newCalendarItems);

      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!thisMonth) {
      return;
    }

    async function fetch(current) {
      await getCalendarItems(current);
    }
    fetch(thisMonth);
  }, [thisMonth]);

  const goToPreviousMonth = () => {
    setThisMonth((prev) => moment(prev).subtract(1, 'month'));
  };

  const goToNextMonth = () => {
    setThisMonth((prev) => moment(prev).add(1, 'month'));
  };

  return (
    <CalendarLayout
      thisMonth={thisMonth}
      calendarItems={calendarItems}
      goToPreviousMonth={goToPreviousMonth}
      goToNextMonth={goToNextMonth}
    />
  );
}

export default Calendar;
