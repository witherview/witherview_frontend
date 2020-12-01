import React from 'react';

export default function useWindowSize() {
  const isBrowser = typeof window !== 'undefined';
  const [windowSize, setWindowSize] = React.useState({
    width: isBrowser ? window.innerWidth : 1200,
    height: isBrowser ? window.innerHeight : 590,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener('resize', changeWindowSize);

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return windowSize;
}
