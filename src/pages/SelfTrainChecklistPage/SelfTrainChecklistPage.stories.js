import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTimeFlag } from '@store/Time/time';
import { setLocalBlob } from '@store/Train/train';

import SelfTrainChecklistPage from './SelfTrainChecklistPage';

export default {
  title: 'Pages/Self Study/Check List',
  component: SelfTrainChecklistPage,
};

export const checkList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTimeFlag({ timeFlag: [10, 100, 500, 596] }));
    dispatch(
      setLocalBlob({
        localBlob:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      }),
    );
  });

  return (
    <SelfTrainChecklistPage
      match={{
        params: { id: 1 },
      }}
    />
  );
};
