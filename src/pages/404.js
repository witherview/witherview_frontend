import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function NotFound() {
  const history = useHistory();
  const [remainingTime, setRemainingTime] = useState(3);
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setRemainingTime((t) => t - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timeInterval);
      history.push('/');
    }, 3000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  return (
    <>
      <div>404 Not Found</div>
      <p>{remainingTime}초 후 메인페이지로 이동합니다..</p>
    </>
  );
}
