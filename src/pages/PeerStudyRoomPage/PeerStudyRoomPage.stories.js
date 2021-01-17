import React from 'react';

import PeerStudyRoomPage from './PeerStudyRoomPage';

export default {
  title: 'pages/Peer Study/Study Entry',
  component: PeerStudyRoomPage,
};

export const studyEntry = () => (
  <PeerStudyRoomPage match={{
    params: { id: 1 },
  }}
  />
);
