import React from 'react';

import InterviewStudyEntry from './InterviewStudyEntry';

export default {
  title: 'pages/Peer Study/Study Entry',
  component: InterviewStudyEntry,
};

export const StudyEntry = () => (
  <InterviewStudyEntry match={{
    params: { id: 1 },
  }}
  />
);
