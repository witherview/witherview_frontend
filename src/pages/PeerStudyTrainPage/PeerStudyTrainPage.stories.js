import React from 'react';

import PeerStudyTrainPage from './PeerStudyTrainPage';

export default {
  title: 'pages/Peer Study/Study Train',
  component: PeerStudyTrainPage,
};

export const studyTrain = () => (
  <PeerStudyTrainPage
    match={{
      params: { id: 1 },
    }}
  />
);
